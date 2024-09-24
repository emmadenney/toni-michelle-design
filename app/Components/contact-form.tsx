"use client";

import { useState } from "react";

export default async function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // send email to tmichelle
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-item main-font">
        <label htmlFor="contact-form-name">Name</label>
        <input
          id="contact-form-name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
      </div>
      <div className="contact-form-item">
        <label htmlFor="contact-form-email">Email</label>
        <input
          id="contact-form-email"
          name="email"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
      </div>
      <div className="contact-form-item">
        <label htmlFor="contact-form-message">Message</label>
        <textarea
          id="contact-form-message"
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="button-container">
        <button type="button" className="contact-form-submit-btn main-font">
          SUBMIT
        </button>
      </div>
    </form>
  );
}
