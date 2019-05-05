import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled
import MiniPalette from "./MiniPalette";
import { Footer } from "./styled-components/Footer";
const PaletteList = styled.div`
  margin: 20px 0 0;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(3, 3fr);
  grid-gap: 15px 2vw;
`;

const PaletteListComponent = (props) => {
  
  // Grab the props
  const { palettes } = props;
  return(
    <Fragment>
      <div className="container">
        <div className="text">
          <h1>Color Palettes!</h1>
          <span>Showing {palettes.length} color palettes!</span>
        </div>
        <PaletteList className="palettes">
          {palettes.map(palette => (
            <Link to={`/palette/${palette.id}`}>
              <MiniPalette {...palette} />
            </Link>
          ))}
        </PaletteList>
      </div>
    </Fragment>
  )
};

export default PaletteListComponent;