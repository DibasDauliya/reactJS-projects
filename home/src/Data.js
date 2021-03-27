import React from "react";
import Table from "./components/Table";

export default function Data() {
  const data = [
    {
      name: "Breaking Bad API Practice",
      link: "hihi",
      repo: "hihi",
    },
    {
      name: "Breaking Bad API Practice",
      link: "hihi",
      repo: "lorem5",
    },
  ];

  return <Table data={data} />;
}
