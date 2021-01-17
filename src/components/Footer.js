import React from "react";
import github from "../images/github-logo-3.png";
import linkedin from "../images/linkedin-2.png";
function Footer() {
  return (
    <footer className="footer-container">
      <a
        className="footer-container-github"
        href="https://github.com/Hadenkezama"
      >
        <img src={github} alt="" />
      </a>

      <a
        className="footer-container-linkedin"
        href="https://www.linkedin.com/in/haden-remoue-kezama-215357204/"
      >
        <img src={linkedin} alt="" />
      </a>
    </footer>
  );
}

export default Footer;
