import React, { useState } from 'react';
import Link from 'next/link';
import SocialMediaLinks from './SocialMediaLinks';
import NavLinks from './NavLinks';
import MenuButton from '../assets/MenuButton';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='sticky top-0 p-6 bg-gray-500 z-10'>
      <header className='flex justify-between items-center max-w-screen-xl mx-auto'>
        <h1 className='text-3xl font-extrabold'>
          <Link href='/'>
            <a>SewChallenged</a>
          </Link>
        </h1>
        <div className='lg:hidden'>
          <button onClick={() => toggleMenu()}>
            <MenuButton />
          </button>
        </div>
      </header>
      {menuOpen ? (
        <div className='flex flex-col text-right'>
          <React.Fragment className='w-24'>
            <NavLinks />
            <SocialMediaLinks />
          </React.Fragment>
        </div>
      ) : null}
    </div>
  );
}
