import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "./Data";

export const People = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      {people.map(({ name, id }) => (
        <div key={id}>
          <h2>{name}</h2>
          <Link to={`/person/${id}`}>More Info</Link>
        </div>
      ))}
    </>
  );
};
