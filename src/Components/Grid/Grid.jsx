import React, { useState, useEffect } from "react";
import "./Grid.css";
import Button from "../Common/Buttons/Button.jsx";
import bomb from "../../assets/bomb.svg";
import diamond from "../../assets/diamond.svg";
import StatsBar from "../Stats-Bar/StatsBar";

//Redux imports
import { increment, decrement } from "../../state/Balance/balance.slice";
import { useDispatch, useSelector } from "react-redux";

//Functions Import
import { generateRandomGems } from "./AlgorithmForGems/hard.js";

//============================================================================

export default function Grid() {
  //----Redux Hooks------
  const balance = useSelector((state) => state.balance.value);
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
      dispatch(increment());
    } else if (
      event.target.textContent == 1 &&
      event.target.textContent != ""
    ) {
      dispatch(decrement());
      alert("You Lost"); //Add some delay using time interval
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
        <Button></Button>
      </div>
    </>
  );
}
