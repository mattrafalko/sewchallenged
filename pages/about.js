import React from 'react';
import { Client, linkResolver } from '../prismic-configuration';
import Layout from '../components/Layout';
import { RichText } from 'prismic-reactjs';

const About = (props) => {
  const { data } = props.doc;

  return (
    <React.Fragment>
      <Layout>
        <div className=' p-2 max-w-2xl'>
          <div className='text-3xl font-extrabold tracking-wide'>
            <RichText render={data.title} />
            <div className='leading-5 text-xl'>
              <RichText render={data.content} linkResolver={linkResolver} />
            </div>
          </div>
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
