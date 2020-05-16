import React from "react";
import Header from "./Header";
import SideNavigation from "./SideNavigation";
import Link from "next/link";

const Layout = (props) => (
  <React.Fragment>
    <Header />
    <div className="flex">
      <div className="flex lg:block hidden">
        <SideNavigation />
      </div>
      <div className="flex flex-col flex-grow px-4 pb-16 mt-8">
        {props.children}
      </div>
    </div>
  </React.Fragment>
);

export default Layout;
