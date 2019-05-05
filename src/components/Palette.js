import React, { useState } from 'react';

// Components
import { PaletteWrap } from "./styled-components/Palette"
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import Footer from './Footer';

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
    <ColorBox background={c[format]} name={c.name} key={c.id} />
  ))
  return (
    <PaletteWrap>
      <NavBar level={level} changeLevel={changeLevel} handleChange={changeFormat} />
      <div className="colors">
        {colorBoxes}
      </div>
      <Footer paletteName={props.palette.name} emoji={props.palette.emoji} />
    </PaletteWrap>
  );
}

export default Palette;
