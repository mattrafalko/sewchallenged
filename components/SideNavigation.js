import React from "react";
import Link from "next/link";
function SideNavigation() {
  return (
    <div className="px-6 bg-pink-200 min-h-screen sticky top-0">
      <h1 className="pt-12 text-3xl text-pink-700 font-extrabold mb-3">
        <Link href="/">
          <a>
            <span className="text-pink-500">Sew</span>
            <span>Challenged</span>
          </a>
        </Link>
      </h1>
      <ul className="sidebar">
        <li className="">
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
      <ul className="sidebar">
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
  );
}

export default SideNavigation;
