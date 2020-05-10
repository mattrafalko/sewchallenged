import React from "react";
import Link from "next/link";
function AboutPageLinksSidebar() {
  return (
    <div className="flex flex-col items-center justify-between ">
      <div className="">
        <ul className="">
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
      </div>
      <div className="">
        <ul>
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
    </div>
  );
}

export default AboutPageLinksSidebar;
