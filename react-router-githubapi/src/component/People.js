import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ items }) => {
  // console.log(items.data);s
  return (
    <main className="grid">
      {items.data.map(({ avatar_url, login, id }) => (
        <div className="card" key={id}>
          <img src={avatar_url} alt={login} />
          <div>
            <strong>{login}</strong>
            <Link to={`/user/${login}`} className="btn">
              View More
            </Link>
            {/* <a href={html_url} target="_blank" rel="noopener noreferrer">
              Github URL
            </a> */}
          </div>
        </div>
      ))}
    </main>
  );
};
