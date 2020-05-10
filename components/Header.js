import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky top-0 p-6 bg-pink-200 lg:hidden">
      <header className="flex justify-between">
        <h1 className="text-3xl text-pink-700 font-extrabold">
          <Link href="/">
            <a>
              <span className="text-pink-500">Sew</span>
              <span>Challenged</span>
            </a>
          </Link>
        </h1>
        <div>
          <ul className="">
            <li>
              <Link href="/">
                <a className="text-pink-700 hover:text-pink-900">Home</a>
              </Link>
            </li>
            <li className="">
              <Link href="/shop">
                <a className="text-pink-700 hover:text-pink-900"> Shop</a>
              </Link>
            </li>
            <li className="">
              <Link href="/about">
                <a className="text-pink-700 hover:text-pink-900">About</a>
              </Link>
            </li>
          </ul>
          <h2 className="mb-3 text-xl">Follow me on:</h2>
          <ul className="">
            <li>
              <a href="#">Youtube</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
