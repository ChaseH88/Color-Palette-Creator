import React, { useState } from 'react';
import styled from "styled-components";

// Components
import { PaletteWrap } from "./styled-components/Palette"
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import Footer from './Footer';

const ColorBoxesWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(5,5fr);
  @media screen and (max-width: 1024px){
    grid-template-columns: repeat(4,4fr);
  }
  @media screen and (max-width: 650px){
    grid-template-columns: repeat(2,2fr);
  }
  @media screen and (max-width: 500px){
    grid-template-columns: repeat(1,1fr);
  }
`;

const Palette = (props) => {

  // State
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const changeLevel = (l) => {
    setLevel(l)
  }

  const changeFormat = (format) => {
    setFormat(format);
  }

  const colorBoxes = props.palette.colors[level].map(c => (
    <ColorBox background={c[format]} name={c.name} key={c.id} colorId={c.id} paletteId={props.palette.id} />
  ))
  return (
    <PaletteWrap>
      <NavBar level={level} changeLevel={changeLevel} handleChange={changeFormat} />
      <ColorBoxesWrapper className="colors">
        {colorBoxes}
      </ColorBoxesWrapper>
      <Footer paletteName={props.palette.name} emoji={props.palette.emoji} />
    </PaletteWrap>
  );
}

export default Palette;
