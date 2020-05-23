import React from 'react';
import Layout from '../../components/Layout';
import { Client, linkResolver } from '../../prismic-configuration';
import { RichText } from 'prismic-reactjs';

const Post = (props) => {
  const { data } = props.doc;

  return (
    <div>
      <Layout>
        <div className='p-3 mb-3 rounded-lg tems-center text-3xl font-bold'>
          <h2 className='text-3xl mb-3'>{RichText.asText(data.blogtitle)}</h2>
        </div>
        <div className='overflow-hidden flex flex-col justify-between'>
          <div className='max-w-lg'>
            <img className=' object-cover w-full h-auto' src={data.image.url} />
          </div>
          <div className='p-6'>
            <RichText render={data.blogbody} linkResolver={linkResolver} />
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
