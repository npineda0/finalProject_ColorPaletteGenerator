//displays the color palette
import { useState, useEffect } from "react";
import { Grid, Container } from "@mui/material";
import ColorRow from "./ColorRow";
import Generate from "./ColorShuffle";
import "./paletteStyle.css";

export default function ColorPalette() {
  const [rowColor, setRowColor] = useState([]);

  useEffect(() => {
    fetch("data/data.json")
      .then((result) => result.json())
      .then((data) => {
        //console.log(data);
        //store data
        setRowColor(data);
      });
  }, []);

  //pre-render (added after importing ColorRow.js)
  let rows = rowColor.map((row, ind) => (
    <ColorRow key={ind} rowColor={row} rowNum={ind} />
  ));

  return (
    <Container>
      <p className="header">COLOR PALETTE GENERATOR</p>
      <button className="shuffle">generate</button>
      <Grid className="grid" container xs={7}>
        {rows}
      </Grid>
    </Container>
  );
}
