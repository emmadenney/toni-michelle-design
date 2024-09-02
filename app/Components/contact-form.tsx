export default async function ContactForm() {
  const submitFormHandler = (event: any) => {
    event.preventDefault();
    // send email to tmichelle
  };

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
      <div className="button-container">
        <button
          // onClick={submitFormHandler}
          className="contact-form-submit-btn main-font"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
}
