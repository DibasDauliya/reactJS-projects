import React from "react";
import { useFetch } from "./useFetch";

function App() {
  const { isLoading, items } = useFetch(
    `https://jsonplaceholder.typicode.com/posts`
  );

  console.log(items);

  return (
    <>
      {isLoading
        ? "Loading..."
        : items.map(({ id, title }) => <h1 key={id}>{title}</h1>)}
    </>
  );
}

export default App;
