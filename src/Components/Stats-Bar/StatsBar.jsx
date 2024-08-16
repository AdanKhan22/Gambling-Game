import React, { useState } from "react";
import "./StatsBar.css";
import { useDispatch, useSelector } from "react-redux";
import { updateBiddng } from "../../state/Bidding-Amount/bidding-Amount";
import { deductBiddingAmount } from "../../state/Balance/balance.slice";

export default function StatsBar() {
  const balance = useSelector((state) => state.balance.value);
  const biddingAmount = useSelector((state) => state.bidding.value);
  const dispatch = useDispatch();
  const [tempbiddingAmount, setBiddingAmount] = useState(0);

  //Check balance before making a bid

  const storeBiddingAmount = (event) => {
    setBiddingAmount(Number(event.target.value));
  };

  const verifyBalance = () => {
    if (tempbiddingAmount > 0 && tempbiddingAmount < 100000) {
      if (balance > tempbiddingAmount) {
        dispatch(updateBiddng(tempbiddingAmount));
        dispatch(deductBiddingAmount(tempbiddingAmount));
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
          Balance <strong>{balance}</strong>
        </h2>
        <div>
          <h2>Enter bid</h2>
          <input
            type="number"
            className="bidding-input"
            value={tempbiddingAmount}
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
