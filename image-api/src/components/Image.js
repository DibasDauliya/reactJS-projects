import React, { useRef, useState } from "react";
import "./image.css";

export default function Image({ imgs }) {
  const reference = useRef(null);
  const [span, setSpan] = useState(0);

  const getSize = () => {
    const height = reference.current.clientHeight;
    const reqSpan = Math.ceil(height / 10);
    setSpan(reqSpan);
  };

  return (
    <div className="grid">
      {imgs.map((img, idx) => (
        <img
          onLoad={getSize}
          ref={reference}
          style={{ gridAutoRows: `span ${span}` }}
          key={idx}
          src={img.urls.regular}
          alt={img.alt_description}
          title={img.alt_description}
        />
      ))}
    </div>
  );
}
