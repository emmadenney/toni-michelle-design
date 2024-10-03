"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setStatus("Sending...");
    const formData = {
      name,
      email,
      message,
    };
    sendEmail(formData);
  };

  const sendEmail = async (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
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
      } else {
        setStatus("Error sending email.");
      }
    } catch (error) {
      setStatus("Error sending email.");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-item">
        <label htmlFor="contact-form-name" className="main-font">
          Name
        </label>
        <input
          id="contact-form-name"
          className="main-font"
          name="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
      </div>
      <div className="contact-form-item">
        <label htmlFor="contact-form-email" className="main-font">
          Email
        </label>
        <input
          id="contact-form-email"
          className="main-font"
          name="email"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
      </div>
      <div className="contact-form-item">
        <label htmlFor="contact-form-message" className="main-font">
          Message
        </label>
        <textarea
          id="contact-form-message"
          className="main-font"
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
      <p
        className={
          status
            ? "status-message main-font"
            : "status-message-hidden main-font"
        }
      >
        {status}
      </p>
    </form>
  );
}
