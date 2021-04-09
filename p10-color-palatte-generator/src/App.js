import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [list, setColorList] = useState(new Values("#ff0000").all(10));
  const [isError, setError] = useState(false);
  const [color, setColor] = useState("");

  const handelSubmit = (e) => {
    try {
      const colors = new Values(color).all(10);
      setColorList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log("error");
    }
    e.preventDefault();
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handelSubmit}>
          <input
            placeholder="#ff0000"
            type="text"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${isError && "error"}`}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => (
          <SingleColor
            key={index}
            {...color}
            index={index}
            hexColour={color.hex}
          />
        ))}
      </section>
    </>
  );
}

export default App;
