import React, { useEffect, useState } from "react";

export const ShowHide = () => {
  const [show, setIsShow] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const changeWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", changeWidth);
    return () => window.removeEventListener("resize", changeWidth);
  }, []);

  return (
    <div className="App">
      <button onClick={() => setIsShow(!show)}>
        {!show ? "Show Content" : "Hide Content"}
      </button>
      {show && <h2>{width} px</h2>}
    </div>
  );
};
