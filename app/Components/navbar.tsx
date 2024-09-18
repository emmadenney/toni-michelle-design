"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import topbarLogo from "../assets/topbar-logo.png";
import insta from "../assets/sm-insta-lt-prple.png";
import linkedin from "../assets/sm-linkedin-lt-prple.png";
import mail from "../assets/sm-mail-lt-prple.png";
import dropdown from "../assets/dropdown-prple.png";
import hamburger from "../assets/hamburger-menu-lp.png";
import topbarRespLogo from "../assets/tm-logo-lp.png";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      hamburgerRef.current && // Ensure the click isn't on the hamburger icon
      !hamburgerRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 1070) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    // Add event listener to close dropdown when clicking outside
    document.addEventListener("mousedown", handleClickOutside);

    // Add resize event listener to hide dropdown on larger screens
    window.addEventListener("resize", handleResize);

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="header" id="top-of-page">
        <div className="social-media-list-container">
          <div className="social-media-item">
            <a target="_blank" href="https://www.instagram.com/tmdesign_">
              <Image src={insta} alt="instagram" width="35" height="35"></Image>
            </a>
          </div>
          <div className="social-media-item">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/toni-michelle-design/"
            >
              <Image
                src={linkedin}
                alt="linked in"
                width="35"
                height="35"
              ></Image>
            </a>
          </div>
          <div className="social-media-item">
            <Link href="/about#contact-section">
              <Image src={mail} alt="email" width="35" height="35"></Image>
            </Link>
          </div>
        </div>

        <div className="header-logo-container">
          <Link className="header-logo" href="/">
            <Image
              id="header-logo"
              src={topbarLogo}
              alt="Toni Michelle Logo"
              width="300"
              height="400"
            ></Image>
            <Image
              id="header-resp-logo"
              src={topbarRespLogo}
              alt="Toni Michelle Logo"
              width="300"
              height="400"
            ></Image>
          </Link>
        </div>

        <ul className="menu main-font">
          <li className="menu-item">
            <Link href="/about">
              <p>ABOUT</p>
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/about/#contact-section">
              <p>CONTACT</p>
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/" className="dropbtn">
              PORTFOLIO
            </Link>
            <Image
              src={dropdown}
              alt="portfolio menu"
              width="40"
              height="40"
            ></Image>
            <div className="dropdown-content">
              <a href="/other">Paintings</a>
              <a href="#">Sketches</a>
              <a href="#">Other Designs</a>
            </div>
          </li>
        </ul>
        <div
          className="hamburger-menu-icon"
          onClick={toggleDropdown}
          ref={hamburgerRef}
        >
          <Image src={hamburger} alt="menu" width="60" height="60"></Image>
        </div>

        {isDropdownVisible && (
          <div ref={dropdownRef}>
            <ul className="dropdown-menu main-font">
              <li className="dropdown-menu-item">
                <Link href="/about" onClick={closeDropdown}>
                  <p>ABOUT</p>
                </Link>
              </li>
              <li className="dropdown-menu-item">
                <Link href="/about/#contact-section" onClick={closeDropdown}>
                  <p>CONTACT</p>
                </Link>
              </li>
              <li className="dropdown-menu-item">
                <Link href="/other" onClick={closeDropdown}>
                  <p>PORTFOLIO</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
