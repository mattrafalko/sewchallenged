import React from 'react';
import Layout from '../../components/Layout';
import { Client, linkResolver } from '../../prismic-configuration';
import { RichText } from 'prismic-reactjs';

const Post = (props) => {
  const { data } = props.doc;
  const tags = data.tags.split(',');

  return (
    <Layout>
      <div className='bg-white min-h-screen flex flex-col items-center rounded-lg shadow-xl p-3'>
        <div className='  p-3 mb-3 rounded-lg w-full text-3xl font-bold '>
          <h2 className='text-4xl font-semibold border-b-4 border-teal-400'>
            {RichText.asText(data.blogtitle)}
          </h2>
          <div className='flex flex-wrap space-x-3 mt-3'>
            {tags.map((tag) => (
              <span
                key={tag}
                className='text-sm px-2 py-1 bg-teal-400 text-gray-100 rounded-full'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className='w-full'>
          <div className='mt-3  w-full h-full rounded-lg overflow-hidden'>
            <div className='pb-2/3 relative'>
              <img
                className='absolute to-0 object-cover w-full h-full mx-auto bg'
                src={data.image.url}
              />
            </div>
          </div>
        </div>
        <div className='w-full'>
          <RichText render={data.blogbody} linkResolver={linkResolver} />
        </div>
      </div>
    </Layout>
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
