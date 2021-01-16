import React, { useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

function EmailPop({ showPopUp }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validForm, setValidForm] = useState(true);
  const [errors, setErrors] = useState({ name: "", email: "", body: "" });

  return (
    <form
      className="email-pop-container"
      onSubmit={(event) =>
        handleSubmit(
          event,
          name,
          email,
          message,
          setValidForm,
          showPopUp,
          setErrors
        )
      }
      method="post"
    >
      <h1 className="email-pop-contact-me">Contact Me</h1>
      <div className="email-pop-name">
        <h2>Your Name</h2>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Enter your name"
          onChange={(event) => setName(event.target.value)}
          onBlur={(event) => setName(event.target.value)}
        />
        <br />
        {!validForm ? <span style={{ color: "red" }}>{errors.name}</span> : ""}
      </div>
      <br />
      <div className="email-pop-email">
        <h2>Your Email</h2>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Enter your email"
          onChange={(event) => setEmail(event.target.value)}
          onBlur={(event) => setEmail(event.target.value)}
        />
        <br />
        {!validForm ? <span style={{ color: "red" }}>{errors.email}</span> : ""}
      </div>
      <br />
      <div className="email-pop-body">
        <h2>Your Message</h2>
        <textarea
          type="text"
          id="message"
          value={message}
          placeholder="What do you want to say?"
          onChange={(event) => setMessage(event.target.value)}
          onBlur={(event) => setMessage(event.target.value)}
        />
        <br />
        {!validForm ? <span style={{ color: "red" }}>{errors.body}</span> : ""}
      </div>

      <br />
      <div className="captcha">
        <ReCAPTCHA
          sitekey="6LedtiwaAAAAAPcGaePnt8UP5Xsh5o4xdHjt1o2x"
          size="invisible"
        />
      </div>
      <button>Send</button>
      <button onClick={() => showPopUp(false)}>Close</button>
    </form>
  );
}

function handleSubmit(
  event,
  name,
  email,
  message,
  setValidForm,
  showPopUp,
  setErrors
) {
  event.preventDefault();
  let anyFormError = false;
  let nameError = "";
  let emailError = "";
  let bodyError = "";

  if (!name) {
    nameError = "Name can not be left blank";
    anyFormError = true;
  }

  if (typeof email !== "undefined") {
    let lastAtPos = email.lastIndexOf("@");
    let lastDotPos = email.lastIndexOf(".");

    if (
      !(
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        email.indexOf("@@") === -1 &&
        lastDotPos > 2 &&
        email.length - lastDotPos > 2
      )
    ) {
      emailError = "Invalid email";
      anyFormError = true;
    }
  }

  if (!message) {
    bodyError = "Message can not be left blank";
    anyFormError = true;
  }

  if (anyFormError) {
    setValidForm(false);
    setErrors({ name: nameError, email: emailError, body: bodyError });
    return;
  }

  setValidForm(true);
  showPopUp(false);

  axios({
    method: "POST",
    url: "https://haden-kezama.herokuapp.com/send",
    data: { name, email, message },
  }).then((response) => {
    if (response.data.status === "success") {
      alert("Message Sent.");
    } else if (response.data.status === "fail") {
      alert("Message failed to send.");
    }
  });
}

export default EmailPop;
