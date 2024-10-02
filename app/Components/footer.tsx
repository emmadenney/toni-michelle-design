import Image from "next/image";
import instaGrey from "../assets/sm-insta-grey.png";
import linkedinGrey from "../assets/sm-linkedin-grey.png";
import mailGrey from "../assets/sm-mail-grey.png";
import arrowUpGrey from "../assets/arrow-up-grey.png";
import Link from "next/link";
import footerLogo from "../assets/footer-logo.png";
import footerRespLogo from "../assets/tm-logo-grey.png";

const Footer = () => {
  return (
    <>
      <div className="footer background-purple">
        <div className="footer-left-container">
          <Image
            id="footer-logo"
            src={footerLogo}
            alt="Toni Michelle Design logo"
            height="100"
            width="200"
          ></Image>
          <Image
            id="footer-resp-logo"
            src={footerRespLogo}
            alt="Toni Michelle Design logo"
            height="100"
            width="200"
          ></Image>
        </div>
        <div className="footer-right-container">
          <div className="footer-social-media-container">
            <div className="social-media-item">
              <a target="_blank" href="https://www.instagram.com/tmdesign_">
                <Image
                  src={instaGrey}
                  alt="instagram"
                  height="35"
                  width="35"
                ></Image>
              </a>
            </div>
            <div className="social-media-item">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/toni-michelle-design/"
              >
                <Image
                  src={linkedinGrey}
                  alt="linked in"
                  width="35"
                  height="35"
                ></Image>
              </a>
            </div>
            <div className="social-media-item">
              <Link href="/about#contact-section">
                <Image
                  src={mailGrey}
                  alt="email"
                  width="35"
                  height="35"
                ></Image>
              </Link>
            </div>
            <div className="social-media-item arrow-up">
              <Link href="#top-of-page">
                <Image
                  src={arrowUpGrey}
                  alt="scroll to top of page"
                  width="35"
                  height="35"
                ></Image>
              </Link>
            </div>
          </div>
          <div className="footer-copyright main-font">
            ©2024 by Toni Michelle Design. <br id="footer-copyright-break" />
            Website created by Emma Denney
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
