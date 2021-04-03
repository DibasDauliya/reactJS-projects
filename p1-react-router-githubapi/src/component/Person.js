import React from "react";
import { Link } from "react-router-dom";

export const Person = ({
  login,
  created_at,
  followers,
  following,
  location,
  name,
  email,
  avatar_url,
}) => {
  return (
    <>
      <div className="card column">
        <img id="card-img" src={avatar_url} alt={name} />
        <strong>{`Name: ${name}`}</strong>
        <strong>{`Username: ${login}`}</strong>
        <strong>{`Email: ${email}`}</strong>
        <strong>{`Location: ${location}`}</strong>
        <strong>{`Following: ${following}`}</strong>
        <strong>{`Followers: ${followers}`}</strong>
        <strong>{`Created at: ${created_at}`}</strong>
      </div>
      <div className="center">
        <Link className="center btn" to="/">
          Go Back
        </Link>
      </div>
    </>
  );
};
