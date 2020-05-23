import React, { useState } from 'react';
import Link from 'next/link';
import SocialMediaLinks from './SocialMediaLinks';
import NavLinks from './NavLinks';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='sticky top-0 bottom-0 p-6 bg-gray-500 lg:hidden z-10'>
      <header className='flex justify-between items-center'>
        <h1 className='text-3xl font-extrabold'>
          <Link href='/'>
            <a>SewChallenged</a>
          </Link>
        </h1>
        <div>
          <button onClick={() => toggleMenu()}>
            <svg
              width='32'
              height='32'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8 6.9834C7.44772 6.9834 7 7.43111 7 7.9834C7 8.53568 7.44772 8.9834 8 8.9834H16C16.5523 8.9834 17 8.53568 17 7.9834C17 7.43111 16.5523 6.9834 16 6.9834H8Z'
                fill='currentColor'
              />
              <path
                d='M7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12Z'
                fill='currentColor'
              />
              <path
                d='M8 15.017C7.44772 15.017 7 15.4647 7 16.017C7 16.5693 7.44772 17.017 8 17.017H16C16.5523 17.017 17 16.5693 17 16.017C17 15.4647 16.5523 15.017 16 15.017H8Z'
                fill='currentColor'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z'
                fill='currentColor'
              />
            </svg>
          </button>
        </div>
      </header>
      <div className='flex flex-col text-right'>
        {menuOpen ? (
          <React.Fragment className='w-24'>
            <NavLinks />

            <SocialMediaLinks />
          </React.Fragment>
        ) : null}
      </div>
    </div>
  );
}
