import React from "react";
import Link from "next/link";
// import Logo from "./Logo";
// import Button from "./Button";
import Image from "next/image";
import instagram from "../instagram.png";
import topbarLogo from "../assets/topbar-logo.png";
import downArrow from "../caret-down.png";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-36 bg-white sticky top-0 border-custom">
        <div className="container mx-auto px-4 h-full">
          <div className="logo">
            <Link href="/">
              <Image
                src={topbarLogo}
                alt="Toni Michelle Logo"
                width="300"
                height="400"
              ></Image>
            </Link>
          </div>
          <div className="flex justify-between items-center h-full">
            <div className="mb-8 mt-auto">
              <Link href="https://www.instagram.com/tmichelleart/">
                <Image
                  src={instagram}
                  alt="instagram"
                  width="35"
                  height="35"
                ></Image>
              </Link>
            </div>

            <ul className="hidden md:flex gap-x-9 text-black main-font ml-auto mb-8 mt-auto tracking-wide">
              <li>
                <Link href="/about">
                  <p>ABOUT</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>CONTACT</p>
                </Link>
              </li>
              <li className="dropdown">
                <Link href="/" className="dropbtn">
                  WORK
                </Link>
                <div className="dropdown-content">
                  <a href="/other">Paintings</a>
                  <a href="#">Sketches</a>
                  <a href="#">Other Designs</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
