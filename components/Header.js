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
    <nav className='sticky top-0 p-6 border-teal-500 border-b-4 bg-white z-10 shadow-xl w-full'>
      <header className='flex justify-between items-center max-w-screen-xl mx-auto'>
        <div className=''>
          <h1 className='siteHeader text-3xl lg:text-5xl'>
            <Link href='/'>
              <a>SewChallenged</a>
            </Link>
          </h1>
        </div>

        <div>
          <button onClick={() => toggleMenu()}>
            <MenuButton />
          </button>
        </div>
      </header>
      {menuOpen ? (
        <div className='mx-auto max-w-screen-xl'>
          <div className=''>
            <NavLinks />
            <SocialMediaLinks />
          </div>
        </div>
      ) : null}
    </nav>
  );
}
