import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import ProductCard from "../components/ProductCard";
import SelectedProductCard from "../components/SelectedProductCard";

const Shop = (props) => {
  const [isInitialized, setIsIntialized] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (!isInitialized) {
      setProducts(props.doc.results);
      setSelectedProduct(products[0]);
    }
    setIsIntialized(true);
  }, []);

  const handleSelectedProduct = (productId) => {
    let product = products.filter((item) => item.id === productId);
    setSelectedProduct(product[0]);
  };

  console.log(products[0]);

  return (
    <React.Fragment>
      <Layout>
        <div className="flex mt-12">
          {selectedProduct ? (
            <SelectedProductCard item={selectedProduct} />
          ) : null}
        </div>
        <div className="">
          <h1 className="p-6">Category 1</h1>
          <div className="flex flex-wrap">
            {products.map((product) => (
              <ProductCard
                item={product}
                handleSelection={handleSelectedProduct}
                key={product.uid}
              />
            ))}
          </div>
        </div>
        <div className="">
          <h1 className="p-6">Category 2</h1>
          <div className="flex flex-wrap">
            {products.map((product) => (
              <ProductCard
                item={product}
                handleSelection={handleSelectedProduct}
                key={product.uid}
              />
            ))}
          </div>
        </div>
        <div className="">
          <h1 className="p-6">Category 3</h1>
          <div className="flex flex-wrap">
            {products.map((product) => (
              <ProductCard
                item={product}
                handleSelection={handleSelectedProduct}
                key={product.uid}
              />
            ))}
          </div>
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
