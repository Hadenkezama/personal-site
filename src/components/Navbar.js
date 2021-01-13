import React, { useState } from "react";
import EmailPop from "./EmailPop";
import "../styles.css";

function Navbar() {
  const [showPop, showPopUp] = useState(false);
  return (
    <nav id="nav" className="nav-grid-container">
      <div className="nav-grid-item-left">
        <button onClick={() => showPopUp(!showPop)}>CONTACT ME</button>
      </div>

      <div className="nav-grid-item-center">
        {showPop ? <EmailPop showPopUp={showPopUp} /> : ""}
      </div>

      <div className="nav-grid-item-right">
        <h1>HADEN R.K</h1>
        <h2>WEB DEV</h2>
      </div>
    </nav>
  );
}

export default Navbar;
