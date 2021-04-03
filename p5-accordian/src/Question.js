import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showHide, setShowHide] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowHide(!showHide)}>
          {showHide ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showHide && <p>{info}</p>}
    </article>
  );
};

export default Question;
