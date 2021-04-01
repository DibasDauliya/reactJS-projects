import React from "react";

export const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "1rem",
        padding: "1px 2px",
        textAlign: "center",
        background: "#333",
        color: "#fff",
        width: "100%",
      }}
    >
      <p>
        By{" "}
        <a
          href="http://twitter.com/dibasdauliya33"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff" }}
        >
          Dibas Dauliya
        </a>{" "}
        | {new Date().getFullYear().toString()}
      </p>
    </footer>
  );
};
