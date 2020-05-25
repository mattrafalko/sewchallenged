import React from 'react';
import Layout from '../components/Layout';
import { Client } from '../prismic-configuration';
import Prismic from 'prismic-javascript';
import HomeBlogPostCard from '../components/HomeBlogPostCard';

const Home = (props) => {
  const { results } = props.doc;

  const posts = results.map((item) => {
    return (
      <HomeBlogPostCard
        key={item.uid}
        uid={item.uid}
        imgUrl={item.data.image.url}
        blogTitle={item.data.blogtitle}
        date={item.first_publication_date}
        tags={item.tags}
      />
    );
  });

  return (
    <Layout>
      <div className='flex flex-col flex-1 bg-teal-500 rounded-lg shadow-xl p-4'>
        <span className='lg:text-6xl text-3xl text-gray-100 font-bold'>
          Welcome to SewChallenged!
        </span>
        <span className='bg-teal-500 text-gray-100 lg:text-2xl'>
          A blog about sewing, drinking, and <em>sew</em> much more
        </span>
      </div>
      <div className='flex flex-wrap mt-6'>{posts}</div>
    </Layout>
  );
};

Home.getInitialProps = async (context) => {
  const req = context.req;
  const query = Prismic.Predicates.at('document.type', 'blog');
  const res = await Client(req).query(query);
  return {
    doc: res,
  };
};

export default Home;
