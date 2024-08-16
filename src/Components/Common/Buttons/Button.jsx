import React from "react";
import "./Button.css";
export default function Button({ text, onCLick }) {
  return (
    <>
      <button className="cashout-btn" onClick={onCLick}>
        {text}
      </button>
    </>
  );
}
