import React from 'react';
import Layout from '../components/Layout';
import SocialMediaLinks from '../components/SocialMediaLinks';

const CheckoutSuccess = () => {
  return (
    <Layout>
      <div className='flex flex-col'>
        <h2 className='text-4xl lg:text-6xl'>Thanks for your order!</h2>
        <p>
          I truly appreciate your purchase from SewChallenged! A portion of our
          proceeds are donated to charities to help those in need.
        </p>
        <div className='lg:w-1/2 lg:mx-auto mt-6'>
          <SocialMediaLinks />
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutSuccess;
