import React from "react";

export const Page = ({ header, content, ...props }) => {
  //   console.log(props);
  return (
    <article>
      <header>
        <h1>{`This is page ${header}`}</h1>
        <p>{content}</p>
      </header>
    </article>
  );
};
