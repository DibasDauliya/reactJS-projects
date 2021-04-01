import React, { useState } from "react";

export const Model = ({ content, onRemove }) => {
  useState(() => {
    setTimeout(() => onRemove(), 3000);
  });
  return (
    <div className="modal">
      <strong>{content}</strong>
    </div>
  );
};
