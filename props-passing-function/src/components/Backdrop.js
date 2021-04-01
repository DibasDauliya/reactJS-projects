import React from "react";

export const Backdrop = ({ onCancel }) => {
  return <div className="backdrop" onClick={onCancel} />;
};
