import React, { useState } from "react";
import "./StatsBar.css";

export default function StatsBar(prop) {
  const [biddingAmount, setBiddingAmount] = useState(0);

  //Check balance before making a bid

  const storeBiddingAmount = (event) => {
    setBiddingAmount(event.target.value);
  };

  const verifyBalance = () => {
    if (biddingAmount > 0 && biddingAmount < 100000) {
      if (prop.balance > biddingAmount) {
        console.log("hello");
      } else {
        alert("Insuffient Balance");
      }
    } else {
      alert("Please Enter A Correct Value");
    }
  };
  return (
    <>
      <div className="stats-bar-wrapper">
        <h2>
          Current Bet <strong>{biddingAmount}</strong>
        </h2>
        <h2>
          Balance <strong>{prop.balance}</strong>
        </h2>
        <div>
          <h2>Enter bid</h2>
          <input
            type="number"
            className="bidding-input"
            value={biddingAmount}
            onChange={storeBiddingAmount}
          />
          <button className="btn-stats-bar" onClick={verifyBalance}>
            Click ME
          </button>
        </div>
      </div>
    </>
  );
}
