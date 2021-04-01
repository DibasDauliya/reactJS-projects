import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> <span className="dot">•</span>
        </li>
        <li>
          <Link to="/UsestateArray">useState (Array)</Link>{" "}
          <span className="dot">•</span>
        </li>
        <li>
          <Link to="/UsestateObjects">useState (Objects)</Link>{" "}
          <span className="dot">•</span>
        </li>
        <li>
          <Link to="/Counter">Simple Counter</Link>
        </li>
      </ul>
    </nav>
  );
}
