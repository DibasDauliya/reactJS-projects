import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    let amount = parseInt(count);
    if (count > 8) {
      // setText(["Please choose within 1 to 9"]);
      amount = 8;
    }
    if (count <= 0) {
      // setText(["Please choose within 1 to 9"]);
      amount = 1;
    }
    setText(data.slice(0, amount));

    e.preventDefault();
    console.log(amount);
  };
  return (
    <section className="section-center">
      <h3>lorem ipsum project</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((txt, idx) => (
          <p key={idx}>{txt}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
