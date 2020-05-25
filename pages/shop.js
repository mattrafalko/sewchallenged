import React, { useState, useEffect, useContext } from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import SelectedProductCard from '../components/SelectedProductCard';
import ShoppingCartContext from '../components/ShoppingCartContext';
import ProductsContext from '../components/ProductsContext';
import CartInfo from '../components/CartInfo';
import Stripe from 'stripe';

const Shop = ({ stripeProducts }) => {
  const [isInitialized, setIsIntialized] = useState(false);
  const { additemToCart } = useContext(ShoppingCartContext);
  const {
    products,
    selectedProduct,
    categories,
    createProductCatergories,
    setProducts,
    setSelectedProduct,
  } = useContext(ProductsContext);

  useEffect(() => {
    if (!isInitialized) {
      setProducts(stripeProducts);
      createProductCatergories(stripeProducts);
      setSelectedProduct(stripeProducts[0]);
    }
    setIsIntialized(true);
  }, []);

  const handleSelectedProduct = (productId) => {
    const product = products.filter((item) => item.id === productId);
    setSelectedProduct(product[0]);
  };

  return (
    <React.Fragment>
      <Layout>
        <CartInfo />
        <div className='flex mt-12'>
          {selectedProduct ? (
            <SelectedProductCard
              item={selectedProduct}
              addToCart={additemToCart}
            />
          ) : null}
        </div>
        <div className=' bg-gray-100 my-6 rounded-lg'>
          {categories.map((category) => {
            return (
              <React.Fragment>
                <h2 className='p-6 text-2xl font-semibold'>{category}</h2>
                <div className='flex flex-wrap'>
                  {products.map((product) => {
                    if (product.metadata.Category === category) {
                      return (
                        <ProductCard
                          item={product}
                          handleSelection={handleSelectedProduct}
                          key={product.id}
                        />
                      );
                    }
                  })}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </Layout>
    </React.Fragment>
  );
};

export const getServerSideProps = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET);
  const { data } = await stripe.products.list();
  const prices = await stripe.prices.list();

  console.log(data);

  let products = data.map((item) => {
    let itemPrice = prices.data.filter((price) => price.product === item.id);
    itemPrice = itemPrice[0];
    return { ...item, price: itemPrice.unit_amount, priceId: itemPrice.id };
  });

  console.log(products);

  return { props: { stripeProducts: [...products] } };
};

export default Shop;
