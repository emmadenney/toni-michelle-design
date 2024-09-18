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
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
      </div>
      <div className="contact-form-item">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
      </div>
      <div className="contact-form-item">
        <label htmlFor="message">Message</label>
        <textarea
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
