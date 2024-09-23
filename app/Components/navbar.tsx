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
  const [isHamburgerDropdownVisible, setHamburgerDropdownVisible] =
    useState(false);
  const hamburgerDropdownRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);
  const [isPortfolioDropdownVisible, setPortfolioDropdownVisible] =
    useState(false);
  const portfolioDropdownRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);

  const toggleHamburgerDropdown = () => {
    setHamburgerDropdownVisible(!isHamburgerDropdownVisible);
  };

  const closeHamburgerDropdown = () => {
    setHamburgerDropdownVisible(false);
  };

  const togglePortfolioDropdown = () => {
    setPortfolioDropdownVisible(!isPortfolioDropdownVisible);
  };

  const closePortfolioDropdown = () => {
    setPortfolioDropdownVisible(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      hamburgerDropdownRef.current &&
      !hamburgerDropdownRef.current.contains(event.target as Node) &&
      hamburgerRef.current && // Ensure the click isn't on the hamburger icon
      !hamburgerRef.current.contains(event.target as Node)
    ) {
      setHamburgerDropdownVisible(false);
    }
    if (
      portfolioDropdownRef.current &&
      !portfolioDropdownRef.current.contains(event.target as Node) &&
      portfolioRef.current && // Ensure the click isn't on the portfolio icon
      !portfolioRef.current.contains(event.target as Node)
    ) {
      setPortfolioDropdownVisible(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 1070) {
      setHamburgerDropdownVisible(false);
    }
    if (window.innerWidth <= 1070) {
      setPortfolioDropdownVisible(false);
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
            <Link href="/other" className="dropbtn">
              PORTFOLIO
            </Link>
            <div
              className="portfolio-menu-icon"
              onClick={togglePortfolioDropdown}
              ref={portfolioRef}
            >
              <Image
                src={dropdown}
                alt="portfolio menu"
                width="40"
                height="40"
              ></Image>
            </div>
          </li>
        </ul>
        <div
          className="hamburger-menu-icon"
          onClick={toggleHamburgerDropdown}
          ref={hamburgerRef}
        >
          <Image src={hamburger} alt="menu" width="60" height="60"></Image>
        </div>

        {isPortfolioDropdownVisible && (
          <div ref={portfolioDropdownRef}>
            <ul className="dropdown-menu main-font">
              <li className="dropdown-menu-item">
                <Link href="/other" onClick={closePortfolioDropdown}>
                  <p>ILLUSTRATIONS</p>
                </Link>
              </li>
              <li className="dropdown-menu-item">
                <Link href="/other" onClick={closePortfolioDropdown}>
                  <p>FINE ART</p>
                </Link>
              </li>
              <li className="dropdown-menu-item">
                <Link href="/" onClick={closePortfolioDropdown}>
                  <p>BOOK DESIGNS</p>
                </Link>
              </li>
            </ul>
          </div>
        )}

        {isHamburgerDropdownVisible && (
          <div ref={hamburgerDropdownRef}>
            <ul className="dropdown-menu main-font">
              <li className="dropdown-menu-item">
                <Link href="/about" onClick={closeHamburgerDropdown}>
                  <p>ABOUT</p>
                </Link>
              </li>
              <li className="dropdown-menu-item">
                <Link
                  href="/about/#contact-section"
                  onClick={closeHamburgerDropdown}
                >
                  <p>CONTACT</p>
                </Link>
              </li>
              <li className="dropdown-menu-item">
                <Link href="/other" onClick={closeHamburgerDropdown}>
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
