import React, { useState } from "react";
import Link from "next/link";
import SocialMediaLinks from "./SocialMediaLinks";
import NavLinks from "./NavLinks";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky top-0 bottom-0 p-6 bg-pink-200 lg:hidden">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl text-pink-700 font-extrabold">
          <Link href="/">
            <a>
              <span className="text-pink-500">Sew</span>
              <span>Challenged</span>
            </a>
          </Link>
        </h1>
        <div>
          <button onClick={() => toggleMenu()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
            </svg>
          </button>
        </div>
      </header>
      <div className="flex flex-col text-right">
        {menuOpen ? (
          <React.Fragment className="w-24">
            <NavLinks />

            <SocialMediaLinks />
          </React.Fragment>
        ) : null}
      </div>
    </div>
  );
}
