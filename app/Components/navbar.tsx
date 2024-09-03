import React from "react";
import Link from "next/link";
import Image from "next/image";
import topbarLogo from "../assets/topbar-logo.png";
import insta from "../assets/sm-insta-lt-prple.png";
import linkedin from "../assets/sm-linkedin-lt-prple.png";
import mail from "../assets/sm-mail-lt-prple.png";
import dropdown from "../assets/dropdown-prple.png";

const Navbar = () => {
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
              href="https://www.linkedin.com/in/toni-campbell-69a94a321"
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
            <a href="mailto:tmichelledesign@outlook.com">
              <Image src={mail} alt="email" width="35" height="35"></Image>
            </a>
          </div>
        </div>

        <div className="header-logo-container">
          <div className="header-logo">
            <Link href="/">
              <Image
                src={topbarLogo}
                alt="Toni Michelle Logo"
                width="300"
                height="400"
              ></Image>
            </Link>
          </div>
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
              alt="dropdown arrow"
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
        <div className="menu-dropdown">
          <Image
            src={dropdown}
            alt="dropdown arrow"
            width="60"
            height="60"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Navbar;
