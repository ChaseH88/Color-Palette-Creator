import React from 'react';
import styled from "styled-components";



// Components
import ColorBox from './ColorBox';

const PaletteWrap = styled.div`
  height: 100vh;
  & .colors {
    height: 90%;
  }
`;

const Palette = (props) => {
  const colorBoxes = props.colors.map(c => (
    <ColorBox background={c.color} name={c.name} />
  ))
  return (
    <PaletteWrap>
    {/* Nav bar here */}
      <div className="colors">
        {colorBoxes}
      </div>
      {/* footer here */}
    </PaletteWrap>
  );
}

export default Palette;
