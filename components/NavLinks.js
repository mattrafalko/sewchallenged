import React from "react";
import Link from "next/link";

const NavLinks = () => {
  return (
    <div>
      <ul className="sidebar lg:text-2xl mt-3">
        <li className="">
          <Link href="/">
            <a className="text-white ">Home</a>
          </Link>
        </li>
        <li className="">
          <Link href="/shop">
            <a className="text-white "> Shop</a>
          </Link>
        </li>
        <li className="">
          <Link href="/about">
            <a className="text-white ">About</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
