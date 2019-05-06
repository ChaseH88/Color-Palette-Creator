import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled
import MiniPalette from "./MiniPalette";
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

  const goToPalette = (id) => {
    props.history.push(`/palette/${id}`);
  }

  return(
    <Fragment>
      <div className="container">
        <div className="text">
          <div className="left">
            <h1>Color Palettes!</h1>
            <span>Showing {palettes.length} color palettes!</span>
          </div>
          <div className="right">
            <Link to="/palette/new">Create New Palette!</Link>
          </div>
        </div>
        <PaletteList className="palettes">
          {palettes.map(palette => (
            <MiniPalette {...palette} handleClick={()=> goToPalette(palette.id)} />
          ))}
        </PaletteList>
      </div>
    </Fragment>
  )
};

export default PaletteListComponent;