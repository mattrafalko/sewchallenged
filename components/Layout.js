import React from 'react';
import Header from './Header';
import Head from 'next/head';
import Footer from './Footer';

const Layout = (props) => (
  <React.Fragment>
    <Head>
      <title>SewChallenged</title>
      <meta charSet='uf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header />
    <div className='flex bg-gray-100 min-h-screen'>
      <div className='flex flex-col flex-grow px-4 pb-16 max-w-screen-xl mx-auto lg:bg-gray-100'>
        <div className='mt-12'>{props.children}</div>
      </div>
    </div>
    <Footer />
  </React.Fragment>
);

export default Layout;
