import Contact from "@/Components/contact";
import ContactForm from "@/Components/contact-form";
import { getAbout } from "../../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import toni from "../assets/toni-about.jpg";
import quoteOpenGrey from "../assets/quote-open-grey.png";
import quoteCloseGrey from "../assets/quote-close-grey.png";
import quoteOpenLp from "../assets/quote-open-lp.png";
import quoteCloseLp from "../assets/quote-close-lp.png";

export default async function AboutPage() {
  const about = await getAbout();

  return (
    <main id="top-of-page">
      <div className="about-section">
        <div className="about-container">
          <div className="about-heading main-font">TONI MICHELLE</div>
          <p className="about-summary main-font">
            Cover Design | Graphics | Illustration | Fine Art
          </p>
          <p className="about-text main-font">
            {documentToReactComponents(about.bio.json)}
          </p>
        </div>
        <div className="about-image-container">
          <Image
            src={toni}
            width="450"
            height="500"
            alt="Toni Michelle smiling at the camera"
          ></Image>
        </div>
      </div>
      <div className="testimonial-container background-purple">
        <div className="testimonial-quote">
          <Image
            src={quoteOpenGrey}
            width="30"
            height="50"
            alt="open quotation mark"
          ></Image>
          <p className="quote-grey main-font">{about.testimonial1.quote}</p>
          <Image
            src={quoteCloseGrey}
            width="30"
            height="50"
            alt="close quotation mark"
          ></Image>
        </div>
        <div className="testimonial-author author-grey main-font">
          {about.testimonial1.author}
        </div>
      </div>
      <div className="contact-section" id="contact-section">
        <Contact />
        <ContactForm />
      </div>
      <div className="testimonial-container background-grey">
        <div className="testimonial-quote">
          <Image
            src={quoteOpenLp}
            width="30"
            height="50"
            alt="open quotation mark"
          ></Image>
          <p className="quote-purple main-font">{about.testimonial2.quote}</p>
          <Image
            src={quoteCloseLp}
            width="30"
            height="50"
            alt="close quotation mark"
          ></Image>
        </div>
        <div className="testimonial-author author-purple main-font">
          {about.testimonial2.author}
        </div>
      </div>
    </main>
  );
}
