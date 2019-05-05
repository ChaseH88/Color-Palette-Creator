import React from "react";
import styled from "styled-components";

// Components
import ColorBox from "./ColorBox";

// Styled
const ShadeWrapper = styled.div`
  height: 80vh;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(5, 5fr);
  grid-gap: 0;
`

const SingleColor = (props) => {
  const { colorId, palette } = props;
  let shades;
  // Get all the corresponding shades
  const gatherShades = (palette, colorFilter) => {
    let shades = [];
    let allColors = palette.colors;
    for(let key in allColors){
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorFilter)
      )
    }
    return shades.splice(1);
  }
  shades = gatherShades(palette, colorId);
  const colorBoxes = shades.map(c => (
    <ColorBox background={c.hex} name={c.name} key={c.id} colorId={c.id} paletteId={props.palette.id} />
  ));

  return(
    <div>
      <ShadeWrapper>
        {colorBoxes}
      </ShadeWrapper>
      <h1>Single Color Palette</h1>
    </div>
  )
}

export default SingleColor;