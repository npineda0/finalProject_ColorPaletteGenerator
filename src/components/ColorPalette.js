import { useState, useEffect } from "react";
//import { Grid, Container } from "@mui/material";

export default function ColorPalette() {
  const [rowColor, setRowColor] = useState([]);

  useEffect(() => {
    fetch("data/data.json")
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        //store data
        setRowColor(data);
      });
  }, []);

  return (
    <div>
      <div>hi</div>
    </div>
  );
}
