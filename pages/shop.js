import React, { useState, useEffect, useContext } from 'react';
import Layout from '../components/Layout';
import Prismic from 'prismic-javascript';
import { Client } from '../prismic-configuration';
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
    const product = stripeProducts.filter((item) => item.id === productId);
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
        <div className=''>
          {categories.map((category) => {
            return (
              <React.Fragment>
                <h2 className='p-6 text-2xl'>{category}</h2>
                <div className='flex flex-wrap'>
                  {stripeProducts.map((product) => {
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

Shop.getInitialProps = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET);
  const { data } = await stripe.products.list();
  const prices = await stripe.prices.list();

  let products = data.map((item) => {
    let itemPrice = prices.data.filter((price) => price.product === item.id);
    itemPrice = itemPrice[0];
    return { ...item, price: itemPrice.unit_amount, priceId: itemPrice.id };
  });

  return { stripeProducts: [...products] };
};

export default Shop;
