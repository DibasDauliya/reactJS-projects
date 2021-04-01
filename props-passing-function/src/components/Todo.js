import React, { useState } from "react";
import { Backdrop } from "./Backdrop";
import { Model } from "./Model";

export const Todo = ({ todo }) => {
  const [showModel, setShowModel] = useState(false);
  return (
    <div>
      <div className="card">
        <h1>{todo}</h1>
        <button className="btn" onClick={() => setShowModel(true)}>
          Delete
        </button>
      </div>
      {showModel && <Model onCancel={() => setShowModel(false)} />}
      {showModel && <Backdrop onCancel={() => setShowModel(false)} />}
    </div>
  );
};
