import React from "react";
import "./table.css";

export default function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Project</th>
          <th>Live</th>
          <th>GitHub Repo</th>
        </tr>
      </thead>

      {data.map((dta, idx) => (
        <tbody key={idx}>
          <tr>
            <td>{idx + 1}.</td>
            <td>{dta.name}</td>
            <td>
              <a href={dta.link} target="_blank" rel="noopener">
                Visit
              </a>
            </td>
            <td>
              <a href={dta.link} target="_blank" rel="noopener">
                Visit Repo
              </a>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}
