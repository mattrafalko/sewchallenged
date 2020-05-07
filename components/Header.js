import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky top-0 p-6 bg-pink-100">
      <header className="flex justify-between">
        <h1 className="text-3xl text-pink-700 font-extrabold">
          <Link href="/">
            <a>
              <span className="text-pink-500">Sew</span>
              <span>Challenged</span>
            </a>
          </Link>
        </h1>
        <ul className="flex items-center w-auto">
          <li className="mr-6">
            <Link href="/">
              <a className="text-pink-700 hover:text-pink-900">Home</a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/shop">
              <a className="text-pink-700 hover:text-pink-900"> Shop</a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/about">
              <a className="text-pink-700 hover:text-pink-900">About</a>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
