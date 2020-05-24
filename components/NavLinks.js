import React from 'react';
import Link from 'next/link';

const NavLinks = () => {
  return (
    <div className='lg:items-center text-2xl mt-3 flex flex-col lg:flex-row items-end lg:justify-between'>
      <Link href='/'>
        <a className='navLinks'>Home</a>
      </Link>

      <Link href='/shop'>
        <a className='navLinks'>Shop</a>
      </Link>

      <Link href='/about'>
        <a className='navLinks'>About</a>
      </Link>
    </div>
  );
};

export default NavLinks;
