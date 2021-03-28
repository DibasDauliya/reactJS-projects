import React from "react";
import "./card.css";

export default function Card({ data }) {
  return (
    <div className="grid">
      {data.map((dta, idx) => (
        <div className="card" key={idx}>
          <h2>{dta.name}</h2>
          <img
            src={`https://robohash.org/${idx}?set=set2?size=150x150`}
            alt="monster"
          />
          <p>{dta.email}</p>
        </div>
      ))}
    </div>
  );
}
