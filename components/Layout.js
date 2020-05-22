import React from 'react';
import Header from './Header';
import SideNavigation from './SideNavigation';
import Head from 'next/head';

const Layout = (props) => (
  <React.Fragment>
    <Head>
      <title>SewChallenged</title>
      <meta charSet='uf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header />
    <div className='flex bg-gray-100 min-h-screen'>
      <div className='flex lg:block hidden'>
        <SideNavigation />
      </div>
      <div className='flex flex-col flex-grow px-4 pb-16 mt-8'>
        {props.children}
      </div>
    </div>
  </React.Fragment>
);

export default Layout;
