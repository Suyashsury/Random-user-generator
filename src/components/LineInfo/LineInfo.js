import React from "react";
import './LineInfo.css';

export const LineInfo = (props) => {
  return (
    <div className="flex-align">
      <label>{props.label}</label>
      <p className="val">{props.value}</p>
    </div>
  );
};
