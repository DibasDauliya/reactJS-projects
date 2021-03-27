import React, { useState } from "react";
import "./search.css";

export default function Search({ getQuery }) {
  const [value, setValue] = useState("");

  const onChange = (q) => {
    setValue(q);
    getQuery(q);
  };

  return (
    <section>
      <input
        type="text"
        placeholder="Enter the name of character"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoFocus
      />
    </section>
  );
}
