import React from 'react';
import Layout from '../../components/Layout';
import { Client, linkResolver } from '../../prismic-configuration';
import { RichText } from 'prismic-reactjs';

const Post = (props) => {
  const { data } = props.doc;

  return (
    <div>
      <Layout>
        <div className="grid px-2 py-4 lg:grid-cols-12">
          <div className="hidden col-span-2 lg:block"></div>
          <div className="col-span-8 ">
            <div className="container mx-auto overflow-hidden border rounded-lg shadow-xl">
              <div className="px-3 py-2">
                <img src={data.image.url} />
                <h1>{RichText.asText(data.blogtitle)}</h1>
                <RichText render={data.blogbody} linkResolver={linkResolver} />
              </div>
            </div>
          </div>
          <div className="sticky col-span-2 ">
            
          </div>
        </div>
      </Layout>
    </div>
  );
};

Post.getInitialProps = async (context) => {
  const { req } = context;
  const { id } = context.query;
  const res = await Client(req).getByUID('blog', id);
  return {
    doc: res,
  };
};

export default Post;
