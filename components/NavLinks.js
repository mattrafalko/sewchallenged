import React from 'react';
import Link from 'next/link';

const NavLinks = () => {
  return (
    <div className='items-center text-2xl mt-3 flex justify-between space-x-8'>
      <Link href='/'>
        <a className='navLinks '>Home</a>
      </Link>

      <Link href='/shop'>
        <a className='navLinks '>Shop</a>
      </Link>

      <Link href='/about'>
        <a className='navLinks '>About</a>
      </Link>
    </div>
  );
};

export default NavLinks;
