import React from 'react';

const Footer = () => {
  return (
    <div className='bg-teal-500 w-full p-0 px-3 lg:py-2'>
      <div className='max-w-screen-xl text-gray-100 mx-auto'>
        <div className='flex justify-between'>
          <span className='text-gray-100 text-xs lg:text-base'>
            SewChallenged &copy;, 2020
          </span>
          <span className='text-gray-100 text-xs lg:text-base'>
            Built with 🖤 by{' '}
            <a href='https://www.github.com/mattrafalko'>Matt Rafalko</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
