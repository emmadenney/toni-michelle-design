import { getContactDetails } from "../../lib/api";

export default async function Contact() {
  const contactDetails = await getContactDetails();

  return (
    <>
      <h1 className="contact-heading main-font">CONTACT</h1>
      <p className="contact-blurb main-font">{contactDetails.contactBlurb}</p>
    </>
  );
}
