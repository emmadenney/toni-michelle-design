"use client";

import { useState } from "react";

export default async function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Error sending email.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending email.");
    }
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
        <button type="submit" className="contact-form-submit-btn main-font">
          SUBMIT
        </button>
      </div>
    </form>
  );
}
