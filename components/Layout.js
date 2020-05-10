import React from "react";
import Header from "./Header";
import SideNavigation from "./SideNavigation";
import Link from "next/link";

const Layout = (props) => (
  <React.Fragment>
    <Header />
    <div className="grid grid-cols-12">
      <div className="col-span-3 lg:block hidden ">
        <SideNavigation />
      </div>
      <div className="lg:col-span-9 col-span-12 px-4 pb-16 h-full lg:overflow-scroll">
        {props.children}
      </div>
    </div>
  </React.Fragment>
);

export default Layout;
