import React from "react";
import { Link } from "react-router-dom";

// Styled
import { Footer } from "./styled-components/Footer";

const PaletteListComponent = (props) => {
  
  // Grab the props
  const { palettes } = props;
  return(
    <div>
      {palettes.map(palette => (
        <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
      ))}
    </div>
  )
};

export default PaletteListComponent;