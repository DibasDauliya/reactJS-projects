import React, { useState } from "react";
import { data } from "../data";
import "../index.css";

export default function UsestateArray() {
  const [dataa, setData] = useState(data);

  const [addedData, setAddedData] = useState({
    name: "",
    age: "",
    status: "",
    id: "",
  });

  const onCardClick = (id) => {
    const newData = dataa.filter((data) => id !== data.id);
    setData(newData);
  };

  const sortByMarried = () => {
    const marriedData = dataa.filter(
      (data) => data.status.toLowerCase() === "married"
    );
    setData(marriedData);
  };

  const sortBySingle = () => {
    const newData = dataa.filter(
      (data) => data.status.toLowerCase() === "single"
    );
    setData(newData);
  };

  const addButton = () => {
    addedData.name | addedData.age | addedData.status
      ? setData([...dataa, addedData])
      : console.log("add data");
    setAddedData({ ...addedData, id: Date.now() });
  };

  return (
    <div>
      <div className="card">
        <input
          type="text"
          value={addedData.name}
          onChange={(e) => setAddedData({ ...addedData, name: e.target.value })}
        />
        <input
          type="number"
          value={addedData.age}
          onChange={(e) => setAddedData({ ...addedData, age: e.target.value })}
        />
        <input
          type="text"
          value={addedData.status}
          onChange={(e) =>
            setAddedData({ ...addedData, status: e.target.value })
          }
        />
        <button onClick={addButton}>Add</button>
      </div>
      {dataa.map(({ name, status, id, age }) => (
        <div
          key={id}
          className="card"
          onClick={() => onCardClick(id)}
          title={`Remove ${name}`}
        >
          <h2>{name}</h2>
          <h3>
            <span>Age: {age} </span>({status})
          </h3>
        </div>
      ))}
      {!dataa.length && (
        <div className="card">
          <h2>Boom! It's empty.</h2>
        </div>
      )}
      <button onClick={sortByMarried}>Sort by Married</button>
      <button onClick={sortBySingle}>Sort by Single</button>
      <button onClick={() => setData([])}>Clear All &times;</button> <br />
      <button onClick={() => window.location.reload()}>Reload</button>
    </div>
  );
}
