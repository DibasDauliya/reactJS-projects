import React, { useState } from "react";

export default function Search({ getValue }) {
  const [value, setValue] = useState("");

  const onValueChange = (q) => {
    setValue(q);
    getValue(q);
  };
  return (
    <div>
      <input
        type="search"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </div>
  );
}
