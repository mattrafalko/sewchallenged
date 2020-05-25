import React from 'react';
import { Client, linkResolver } from '../prismic-configuration';
import Layout from '../components/Layout';
import { RichText } from 'prismic-reactjs';

const About = (props) => {
  const { data } = props.doc;

  return (
    <React.Fragment>
      <Layout>
        <div className='p-6 mx-auto max-w-4xl bg-white min-h-full rounded shadow-xl'>
          <div className='text-5xl font-extrabold tracking-wide'>
            <RichText render={data.title} />
          </div>
          <RichText render={data.content} linkResolver={linkResolver} />
        </div>
      </Layout>
    </React.Fragment>
  );
};

About.getInitialProps = async (context) => {
  const req = context.req;
  const about = await Client(req).getSingle('about');
  return {
    doc: about,
  };
};

export default About;
