import React, { useState } from 'react';
import styled from "styled-components";

// Components
import ColorBox from './ColorBox';
import NavBar from './NavBar';

const PaletteWrap = styled.div`
  height: 100vh;
  & .colors {
    height: 90%;
  }
`;

const Palette = (props) => {

  // State
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const changeLevel = (l) => {
    setLevel(l)
    console.log(level)
  }

  const changeFormat = (format) => {
    setFormat(format);
  }

  const colorBoxes = props.palette.colors[level].map(c => (
    <ColorBox background={c[format]} name={c.name} />
  ))
  return (
    <PaletteWrap>
      <NavBar level={level} changeLevel={changeLevel} handleChange={changeFormat} />
      <div className="colors">
        {colorBoxes}
      </div>
      {/* footer here */}
    </PaletteWrap>
  );
}

export default Palette;
