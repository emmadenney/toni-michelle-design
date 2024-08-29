export default async function ContactForm() {
  // const submitFormHandler = () => {};
  return (
    <form className="contact-form">
      <div className="contact-form-item main-font">
        <label htmlFor="name">Name</label>
        <input name="name" type="text"></input>
      </div>
      <div className="contact-form-item">
        <label htmlFor="email">Email</label>
        <input name="email" type="text"></input>
      </div>
      <div className="contact-form-item">
        <label htmlFor="message">Message</label>
        <textarea name="message"></textarea>
      </div>
      <button
        // onClick={submitFormHandler}
        className="contact-form-submit-btn"
      >
        Submit
      </button>
    </form>
  );
}
