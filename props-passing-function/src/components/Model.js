import React, { useState } from "react";

export const Model = ({ onCancel }) => {
  const [show, setShow] = useState(false);
  function onClick() {
    // onCancel();
    setShow(true);
  }
  return (
    <div className="model">
      <p>Are you sure?</p>
      <button onClick={onCancel} className="btn btn--alt">
        Cancel
      </button>
      <button onClick={() => onClick()} className="btn">
        Confirm
      </button>
      <div className={`model2 ${show && "appear"}`}>
        <h2>Wooolaaa!</h2>
      </div>
    </div>
  );
};
