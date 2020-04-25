import React from 'react';
import Layout from '../components/Layout';
import Prismic from 'prismic-javascript';
import { Client } from '../prismic-configuration';
import { RichText } from 'prismic-reactjs';

const Shop = (props) => {
  const products = props.doc.results;

  return (
    <div>
      <Layout>
        <h1>Shop</h1>
        {products.map((product) => (
          <div style={{ maxWidth: '15rem' }}>
            <img
              src={product.data.image.url}
              style={{ maxHeight: '7em', width: '100%' }}
            />
            <h1>{product.uid}</h1>
            <p>{product.data.description[0].text}</p>
            <span>{product.data.price}</span>
          </div>
        ))}
      </Layout>
    </div>
  );
};

Shop.getInitialProps = async (context) => {
  const req = context.req;

  const query = Prismic.Predicates.at('document.type', 'product');
  const res = await Client(req).query(query);

  return {
    doc: res,
  };
};

export default Shop;
