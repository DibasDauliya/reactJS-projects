import React from "react";
import Tour from "./Tour";
const Tours = ({ items, removeItem }) => {
  return (
    <section>
      <div className="title">
        <h1>Our Tours</h1>
        <div className="underline"></div>
      </div>
      <div>{!items.length && <h2>No tours left.</h2>}</div>
      <div>
        {items.map((item) => (
          <Tour key={item.id} {...item} removeItem={removeItem} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
