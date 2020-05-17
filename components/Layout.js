import React from "react";
import Header from "./Header";
import SideNavigation from "./SideNavigation";
import { Link, Head } from "next/link";

const Layout = (props) => (
  <React.Fragment>
    {/* <Head>
      <title>SewChallenged</title>
      <meta charSet="uf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head> */}
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
