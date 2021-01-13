import React, { useState } from "react";
import axios from "axios";

function EmailPop(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  return (
    <form
      className="email-pop-container"
      onSubmit={(event) => handleSubmit(event, name, email, body)}
      method="post"
    >
      <h1 className="email-pop-contact-me">Contact Me!</h1>
      <div className="email-pop-name">
        <h5>Your Name</h5>
        <textarea
          type="text"
          id="name"
          value={name}
          placeholder="Enter your name"
          onChange={(event) => setName(event.target.value)}
          onBlur={(event) => setName(event.target.value)}
        />
      </div>
      <br />
      <div className="email-pop-email">
        <h5>Your Email</h5>
        <textarea
          type="text"
          id="email"
          value={email}
          placeholder="Enter your email"
          onChange={(event) => setEmail(event.target.value)}
          onBlur={(event) => setEmail(event.target.value)}
        />
      </div>
      <br />
      <div className="email-pop-body">
        <h5>Your Message</h5>
        <textarea
          type="text"
          id="message"
          value={body}
          placeholder="What do you want to say?"
          onChange={(event) => setBody(event.target.value)}
          onBlur={(event) => setBody(event.target.value)}
        />
      </div>
      <br />
      <button>Send</button>
      <button onClick={() => props.showPopUp(false)}>Close</button>
    </form>
  );
}

function handleSubmit(event, name, email, body) {
  event.preventDefault();
  axios({
    method: "POST",
    url: "http://localhost:3002/send",
    data: { name, email, body },
  }).then((response) => {
    if (response.data.status === "success") {
      alert("Message Sent.");
    } else if (response.data.status === "fail") {
      alert("Message failed to send.");
    }
  });
}

export default EmailPop;
