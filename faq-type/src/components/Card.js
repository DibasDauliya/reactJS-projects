import React, { useState } from "react";
import "./card.css";

export default function Card({ question, answer }) {
  const [isTrue, setIsTrue] = useState(false);
  function onHClick() {
    setIsTrue(!isTrue);
  }
  return (
    <div className="card">
      <h3 style={{ cursor: "pointer" }} onClick={onHClick}>
        {question}{" "}
        {isTrue ? (
          <i className="fas fa-caret-down"></i>
        ) : (
          <i className="fas fa-caret-up"></i>
        )}
      </h3>
      {isTrue && <p>{answer}</p>}
    </div>
  );
}
