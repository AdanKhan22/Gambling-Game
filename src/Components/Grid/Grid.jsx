import React, { useState, useEffect } from "react";
import "./Grid.css";
import Button from "../Common/Buttons/Button.jsx";
import bomb from "../../assets/bomb.svg";
import diamond from "../../assets/diamond.svg";

//Redux imports
import { increment, decrement } from "../../state/Balance/balance.slice";
import { useDispatch, useSelector } from "react-redux";
import { checkBidEntered } from "../../state/Is-Bid-Entered/isbidEntered.js";
import { resetBidding } from "../../state/Bidding-Amount/bidding-Amount.js";
//Functions Import

import { generateRandomGems } from "./Algorithm/hard.js";
import { logMultiplier } from "./Algorithm/Multiplier/logMultiplier.js";
//============================================================================

export default function Grid() {
  //----Redux Hooks------
  const biddingAmount = useSelector((state) => state.bidding.value);
  const dispatch = useDispatch();

  const [isClicked, setIsClicked] = useState(true);
  const [gridItems, setGridItems] = useState([]);

  // Function to generate grid items
  const generateGridItems = () => {
    const items = [];
    for (let i = 1; i <= 25; i++) {
      const isDiamond = generateRandomGems() === 0;
      items.push(
        <div className="grid-item" key={i}>
          <div className="icons-img">
            <img src={isDiamond ? diamond : bomb} alt="" />
          </div>
          <div
            id={"grid-overlay" + i}
            className={isClicked ? "grid-overlay" : ""}
            onClick={removeOverlay}
          >
            <span className="place-holder-number">{isDiamond ? 0 : 1}</span>
          </div>
        </div>
      );
    }
    return items;
  };

  // Initialize grid items only once
  useEffect(() => {
    setGridItems(generateGridItems());
  }, []);

  const removeOverlay = (event) => {
    const divID = event.target.id;
    const element = document.getElementById(divID);
    if (element) {
      element.classList.remove("grid-overlay");
    }
  };

  const onClickGridItems = (event) => {
    if (event.target.textContent == 0 && event.target.textContent != "") {
      console.log(logMultiplier(biddingAmount));
      dispatch(increment(logMultiplier(biddingAmount)));
    } else if (
      event.target.textContent == 1 &&
      event.target.textContent != ""
    ) {
      dispatch(decrement());
      // setTimeout(() => {

      // }, 200);
    }
  };

  const cashOut = () => {
    dispatch(checkBidEntered());
    dispatch(resetBidding());
  };
  const gameReset = () => {};

  return (
    <>
      <div className="grid-wrapper">
        <div className="grid-container" onClick={onClickGridItems}>
          {gridItems}{" "}
        </div>
        <Button text="Cashout" onCLick={cashOut}></Button>
        <Button text="Restart"></Button>
      </div>
    </>
  );
}
