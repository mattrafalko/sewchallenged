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
    <div className='sticky top-0 p-6 border-teal-500 border-b-4 bg-white z-10 shadow-xl'>
      <header className='flex justify-between items-center max-w-screen-xl mx-auto'>
        <div className=''>
          <h1 className='siteHeader'>
            <Link href='/'>
              <a>SewChallenged</a>
            </Link>
          </h1>
        </div>
        <NavLinks className='hidden md:block' />
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
