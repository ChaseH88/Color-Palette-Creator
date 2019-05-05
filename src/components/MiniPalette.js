import React from "react";
import styled from "styled-components";

const MiniPalette = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  position: relative;
  overflow: hidden;
  border: 3px solid teal;
  &:hover {
    cursor: pointer;
  }
  & .colors {
    margin: 0;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(5, 5fr);
    grid-gap: 0;
    border-radius: 5px;
    overflow: hidden;
      border: 2px solid #eee;
    & .miniColor {
      height: 25px;
    }

  }
  & .text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .name {
      margin: 0;
      color: #252525;
    }
  }
`;

const MiniPaletteComponent = (props) => {
  const { paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map(color => (
    <div className="miniColor" style={{ background: color.color }}></div>
  ))
  return(
    <MiniPalette>
      <div className="colors">
        {miniColorBoxes}
      </div>
      <div className="text">
        <h3 className="name">{paletteName}</h3>
        <span className="emoji">{emoji}</span>
      </div>
    </MiniPalette>
  )
}

export default MiniPaletteComponent;