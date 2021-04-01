import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        listStyleType: "none",
        borderBottom: "1px solid #ccc",
        gap: "1rem",
        textTransform: "uppercase",
        padding: "20px",
        marginBottom: "20%",
      }}
    >
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/practice1">Practice 1</Link>
      </li>
      <li>
        <Link to="">item 3</Link>
      </li>
      <li>
        <Link to="/page1">page 1</Link>
      </li>
      <li>
        <Link to="page2">page 2</Link>
      </li>
    </nav>
  );
};
