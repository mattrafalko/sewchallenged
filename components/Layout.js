import React from "react";
import Header from "./Header";
import AboutPageLinksSidebar from "../components/AboutPageLinksSidebar";
import Link from "next/link";

const Layout = (props) => (
  <React.Fragment>
    <Header />
    <div className="grid grid-cols-12">
      <div className="col-span-3 bg-purple-300 lg:block hidden">
        <AboutPageLinksSidebar />
      </div>
      <div className="lg:col-span-9 col-span-12 px-4 pb-16">
        {props.children}
      </div>
    </div>
  </React.Fragment>
);

export default Layout;
