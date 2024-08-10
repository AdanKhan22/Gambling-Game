import React, { useState, useEffect } from "react";
import bomb from "../../assets/bomb.svg";
import diamond from "../../assets/diamond.svg";
import StatsBar from "../Stats-Bar/StatsBar";
import "./Grid.css";

export default function Grid() {
  const [isClicked, setIsClicked] = useState(true);
  const [balance, setBalance] = useState(500);
  const [gridItems, setGridItems] = useState([]);

  // Function to generate random gems
  const generateRandomGems = () => {
    return Math.floor(Math.random() * 2); // Generates number between 0 and 1
  };

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
    console.log(event.target.textContent);
    if (event.target.textContent == 0 && event.target.textContent != "") {
      setBalance(balance + 100);
    } else if (
      event.target.textContent == 1 &&
      event.target.textContent != ""
    ) {
      alert("You Lost"); //Add some delay using time interval
      setBalance(balance - 100);
    }
  };

  const gameReset = () => {};

  return (
    <>
      <StatsBar balance={balance}></StatsBar>
      <div className="grid-wrapper">
        <div className="grid-container" onClick={onClickGridItems}>
          {gridItems}{" "}
        </div>
        <button className="cashout-btn">Cashout</button>
      </div>
    </>
  );
}
