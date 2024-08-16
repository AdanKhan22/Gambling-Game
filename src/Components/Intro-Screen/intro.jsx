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
            <p>
              <b>Rule 1:</b> You need to find the Gems Hidden beneath the Dark
              but beware bad things surrond it...Spooky!!!
            </p>
            <p>
              <b>Rule 2:</b>Higher the Bid Higher the Rewards and Risks
            </p>
            <p>
              <b>Rule 3:</b>Minimum Value for Bidding is 100
            </p>
          </div>
          <button className="continue-button" onClick={closePopUp}>
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
