import React, { useRef } from "react";

export const Useref = () => {
  const reference = useRef(null);
  const handleOnSubmit = (e) => {
    console.log(reference.current);
    reference.current.style.border = "3px #ccc solid";
    e.preventDefault();
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="name"></label>
      <input autoFocus={true} type="text" id="name" ref={reference} />
      <button type="submit">Submit</button>
    </form>
  );
};
