import React, { useState } from "react";

export default function UsestateObjects() {
  const [data, setData] = useState({
    name: "Rames Shah",
    age: "20",
  });

  const [value, setValue] = useState({
    name: "",
    age: "",
  });

  const onChange = () => {
    value.name | value.age &&
      setData({ ...data, name: value.name, age: value.age });
  };

  return (
    <div>
      <h3>{data.name}</h3>
      <p>{data.age}</p>
      <input
        placeholder="Enter the name to change"
        type="text"
        value={value.name}
        onChange={(e) => setValue({ ...value, name: e.target.value })}
      />
      <input
        placeholder="Enter the age to change"
        type="number"
        value={value.age}
        onChange={(e) => setValue({ ...value, age: e.target.value })}
      />
      <button onClick={onChange}>Change</button>
    </div>
  );
}
