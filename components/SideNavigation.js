import React from "react";
import Link from "next/link";
import SocialMediaLinks from "./SocialMediaLinks";
import NavLinks from "./NavLinks";

function SideNavigation() {
  return (
    <div className="px-6 bg-gray-500 min-h-screen sticky top-0 flex flex-col justify-between">
      <div className="mt-8">
        <div className="xl:text-4xl lg:text-3xl text-white font-extrabold w-full">
          <Link href="/">
            <a>SewChallenged</a>
          </Link>
        </div>
        <NavLinks />
      </div>
      <SocialMediaLinks />
    </div>
  );
}

export default SideNavigation;
