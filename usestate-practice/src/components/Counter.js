import React, { useState } from "react";

export default function Counter() {
  let [value, setValue] = useState(0);

  const increaseValue = () => {
    setTimeout(() => {
      setValue((prev) => prev + 1);
      console.log(123);
    }, 2000);
  };
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Increase</button>
      <button onClick={() => setValue(0)}>Reset</button>
      <button onClick={() => setValue(value - 1)}>Decrease</button>
      <hr />
      <h1>{value}</h1>
      <button onClick={increaseValue}>Increase</button> <br />
      <small>
        Will increase after 2 second.{" "}
        <code>
          Setting value of <mark>state</mark> in <mark>function</mark> from{" "}
          <mark>setTimeOut</mark>
        </code>
      </small>
    </div>
  );
}
