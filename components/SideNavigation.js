import React from "react";
import Link from "next/link";
import SocialMediaLinks from "./SocialMediaLinks";
import NavLinks from "./NavLinks";

function SideNavigation() {
  return (
    <div className="px-6 bg-pink-200 min-h-screen sticky top-0 flex flex-col justify-between">
      <div className="mt-8">
        <div className="xl:text-4xl lg:text-3xl text-pink-700 font-extrabold w-full">
          <Link href="/">
            <a>
              <span className="text-pink-500">Sew</span>
              <span>Challenged</span>
            </a>
          </Link>
        </div>
        <NavLinks />
      </div>
      <SocialMediaLinks />
    </div>
  );
}

export default SideNavigation;
