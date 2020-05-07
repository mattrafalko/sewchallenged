import React from "react";
import Header from "./Header";
import AboutPageLinksSidebar from "../components/AboutPageLinksSidebar";
import Link from "next/link";

const Layout = (props) => (
  <React.Fragment>
    <Header />
    <div className="grid grid-cols-12">
      <div className="col-span-3 bg-purple-300 min-h-screen lg:block hidden">
        <ul className="flex items-center w-auto flex-col">
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
        <AboutPageLinksSidebar />
      </div>
      <div className="lg:col-span-9 col-span-12 px-4 pb-16">
        {props.children}
      </div>
    </div>
  </React.Fragment>
);

export default Layout;
