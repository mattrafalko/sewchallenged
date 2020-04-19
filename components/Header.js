import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <header>
        <h1>Sew Challenged</h1>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <a>Shop</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
