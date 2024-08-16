import React, { useState } from "react";
import "./intro.css";
export default function intro() {
  const [isPopupOpen, setisPopupOpen] = useState(true);

  const closePopUp = () => {
    setisPopupOpen(false);
  };

  return (
    <>
      <div className={isPopupOpen ? "popup-overlay" : "popup-hidden"}>
        <div className="popup-content">
          <h2>Game Rules</h2>
          <div className="rules-section">
            <p>Rule 1: </p>
            <p>Rule 2: </p>
            <p>Rule 3: </p>
          </div>
          <button className="continue-button" onClick={closePopUp}>
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
