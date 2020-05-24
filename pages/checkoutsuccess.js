import React from 'react';
import Layout from '../components/Layout';
import SocialMediaLinks from '../components/SocialMediaLinks';

const CheckoutSuccess = () => {
  return (
    <Layout>
      <h2 className='text-6xl'>Thanks for your order!</h2>
      <p>
        I truly appreciate your purchase from SewChallenged! A portion of our
        proceeds are donated to charities to help those in need.
      </p>
      <p>Follow me on Social media!</p>
      <SocialMediaLinks />
    </Layout>
  );
};

export default CheckoutSuccess;
