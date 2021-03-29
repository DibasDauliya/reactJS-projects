import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/UsestateArray">useState (Array)</Link>
        </li>
        <li>
          <Link to="/UsestateObjects">useState (Objects)</Link>
        </li>
      </ul>
    </nav>
  );
}
