import React, { useState } from "react";

export default function UsestateObjects() {
  const [data, setData] = useState({
    name: "Rames Shah",
    age: "20",
  });

  const [value, setValue] = useState("");

  const onChange = () => {
    value && setData({ ...data, name: value, age: 30 });
  };
  return (
    <div>
      <h3>{data.name}</h3>
      <p>{data.age}</p>
      <input
        placeholder="Enter the name to change"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onChange}>Change</button>
    </div>
  );
}
