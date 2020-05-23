import React from 'react';
import Header from './Header';
import Head from 'next/head';

const Layout = (props) => (
  <React.Fragment>
    <Head>
      <title>SewChallenged</title>
      <meta charSet='uf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header />
    <div
      className='flex bg-gray-100 min-h-screen object-cover bg-fixed'
      style={{
        backgroundImage: `url(${require('../public/backgroundOptimized.png')})`,
      }}
    >
      <div className='flex flex-col flex-grow px-4 pb-16 max-w-screen-xl mx-auto lg:bg-gray-100'>
        <div className='mt-12'>{props.children}</div>
      </div>
    </div>
  </React.Fragment>
);

export default Layout;
