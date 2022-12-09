//generates random color in the rows
//import { useState } from "react";

export default function ColorRow(props) {
  return (
    <div className="colorBox" style={{ backgroundColor: "lime" }}>
      <div className="hexCode">{props.rowColor.name}</div>
    </div>
  );
}
