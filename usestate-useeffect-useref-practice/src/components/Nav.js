import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export const Nav = () => {
  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/showHide">Show/Hide</Link>
          </li>
          <li>
            <Link to="/addData">Add Data</Link>
          </li>
          <li>
            <Link to="/useRef">UseRef</Link>
          </li>
          <li>
            <Link to="">item 5</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
