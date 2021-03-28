import React from "react";
import Table from "./components/Table";

export default function Data() {
  const data = [
    {
      name: "Breaking Bad API Practice",
      link: "https://loving-ride-3e12ef.netlify.app/",
      repo:
        "https://github.com/DibasDauliya/reactJS-projects/tree/main/breaking-bad-api",
    },
    {
      name: "Breaking Bad API Practice",
      link: "hihi",
      repo: "lorem5",
    },
  ];

  return <Table data={data} />;
}
