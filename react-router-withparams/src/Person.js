import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "./Data";

export const Person = () => {
  const { id } = useParams();
  const [name, setName] = useState("");

  useEffect(() => {
    const newItem = data.find((name) => name.id === parseInt(id));
    setName(newItem.name);
  }, []);
  return (
    <div>
      <h1>{`Hi ${name}`}</h1>
      <Link to="/People">Go to people</Link>
    </div>
  );
};
