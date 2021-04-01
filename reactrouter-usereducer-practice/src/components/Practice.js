import React, { useReducer, useState } from "react";
import { Model } from "./Model";

import { reducer } from "./reducer";

const defaultState = {
  people: [],
  isModelOpen: false,
  modelMessage: "",
};
export const Practice = () => {
  const [username, setUsername] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    if (username) {
      const newItem = { id: new Date().getTime(), username };
      dispatch({ type: "ADD_VALUE", newItem });
      setUsername("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }

    e.preventDefault();
  };

  function removeItem() {
    dispatch({ type: "SET_FALSE" });
  }
  return (
    <>
      <div className="form">
        {state.isModelOpen && (
          <Model content={state.modelMessage} onRemove={removeItem} />
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">Add Data</button>
        </form>
      </div>
      <main>
        {state.people.map(({ username, id }) => (
          <div key={id}>
            <h1>{username}</h1>{" "}
            <button onClick={() => dispatch({ type: "REMOVE_ITEM", id: id })}>
              remove
            </button>
          </div>
        ))}
      </main>
    </>
  );
};
