import React, { useState } from "react";

const Tour = ({ name, info, price, image, id, removeItem }) => {
  const [show, setShow] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt="name" />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p className="info">
          {!show ? info.slice(0, 255) + " ..." : info}
          <button onClick={() => setShow(!show)}>
            {show ? "show less" : "show more"}
          </button>
        </p>

        <button onClick={() => removeItem(id)} className="delete-btn">
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
