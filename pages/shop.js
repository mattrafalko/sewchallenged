import React, { useState, useEffect, useContext } from "react";
import Layout from "../components/Layout";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import ProductCard from "../components/ProductCard";
import SelectedProductCard from "../components/SelectedProductCard";
import ShoppingCartContext from "../components/ShoppingCartContext";
import ProductsContext from "../components/ProductsContext";
import CartInfo from "../components/CartInfo";

const Shop = (props) => {
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
      setProducts(props.doc.results);
      createProductCatergories(props.doc.results);
      setSelectedProduct(props.doc.results[0]);
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
        <div className="flex mt-12">
          {selectedProduct ? (
            <SelectedProductCard
              item={selectedProduct}
              addToCart={additemToCart}
            />
          ) : null}
        </div>
        <div className="">
          {categories.map((category) => {
            return (
              <React.Fragment>
                <h2 className="p-6 text-2xl">{category}</h2>
                <div className="flex flex-wrap">
                  {products.map((product) => {
                    if (product.data.category[0].text === category) {
                      return (
                        <ProductCard
                          item={product}
                          handleSelection={handleSelectedProduct}
                          key={product.uid}
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

Shop.getInitialProps = async (context) => {
  const req = context.req;
  const query = Prismic.Predicates.at("document.type", "product");
  const res = await Client(req).query(query);
  return {
    doc: res,
  };
};

export default Shop;
