import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import Footer from "./Footer";

// Styled
const ShadeWrapper = styled.div`
  height: 80vh;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(5, 5fr);
  grid-gap: 0;
`;

const BackBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #252525;
  & a {
    display: inline-block;
    padding: 10px 20px;
    background-color: #ffffff2b;
    color: #fff;
    text-decoration: none;
    transition: all 200ms ease-in-out;
    border: 2px solid transparent;
  }
  & a:hover {
    background-color: #ffffff;
    color: #252525;
    border-color: #252525;
    box-shadow: 0 0 10px 0 #ffffff5e;
  }
`;

const SingleColor = (props) => {
  const { colorId, palette } = props;
  let shades;

  // State
  const [format, setFormat] = useState("hex");

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

  const changeFormat = (format) => {
    setFormat(format);
  }

  shades = gatherShades(palette, colorId);
  const colorBoxes = shades.map(c => (
    <ColorBox background={c[format]} name={c.name} key={c.id} colorId={c.id} paletteId={props.palette.id} showLink={false} />
  ));
    console.log(props)
  return(
    <div style={{height: "100vh"}}>
      <NavBar handleChange={changeFormat} allColors={false} />
      <ShadeWrapper>
        {colorBoxes}
        <BackBox>
          <Link to={`/palette/${palette.id}`}>Go Back</Link>
        </BackBox>
      </ShadeWrapper>
      <Footer paletteName={colorId} emoji={props.palette.emoji} />
    </div>
  )
}

export default SingleColor;