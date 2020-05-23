import React from 'react';
import Link from 'next/link';

const NavLinks = () => {
  return (
    <div className='sidebar text-2xl mt-3 space-y-3'>
      <Link href='/'>
        <a className='text-white '>Home</a>
      </Link>

      <Link href='/shop'>
        <a className='text-white '>Shop</a>
      </Link>

      <Link href='/about'>
        <a className='text-white '>About</a>
      </Link>
    </div>
  );
};

export default NavLinks;
