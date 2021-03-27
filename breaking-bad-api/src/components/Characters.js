import React from "react";
import "./character.css";
import Spinner from "./Spinner";

export default function Characters({ isLoding, items }) {
  return (
    <>
      {isLoding ? (
        <Spinner />
      ) : (
        <section className="grid">
          {items.data.map((item, idx) => (
            <div key={idx} className="card">
              <div className="card-front">
                <img className="img" src={item.img} alt="" loading="lazy" />
              </div>
              <p>{item.name}</p>
              <div className="card-back">
                {/* <h1>{item.name}</h1> */}
                <ul>
                  <li>
                    <strong>Actor Name:</strong> {item.portrayed}
                  </li>
                  <li>
                    <strong>Nickname:</strong> {item.nickname}
                  </li>
                  <li>
                    <strong>Birthday:</strong> {item.birthday}
                  </li>
                  <li>
                    <strong>Status:</strong> {item.status}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
}
