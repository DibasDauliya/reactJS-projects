import React from "react";
import spinner from "../img/spinner.gif";

export default function Spinner() {
  return (
    <img
      id="spinner"
      src={spinner}
      style={{ width: "150px", margin: "auto", display: "block" }}
      alt="Loading"
    />
  );
}
