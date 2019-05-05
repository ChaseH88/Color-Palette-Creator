import React, { useState } from "react";
import styled from "styled-components";

// Slider
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

// Dropdown
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const NavBar = styled.header`
  padding: 30px 0;
  & .container {
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > div {
      flex: 1 1 auto;
    }
  }
  & #logo {

  }
  & #slider {
    max-width: 30vw;
    min-width: 350px;
    display: flex;
    align-items: center;
    & span {
      flex: 1 125px;
    }
    & div {
      flex: 1 1 auto;
    }
  }
`;


const NavBarComponent = (props) => {

  // State
  const [format, setFormat] = useState("hex");

  // Props
  const { level, changeLevel } = props;

  const handleChange = (e) => {
    setFormat(e.target.value)
    props.handleChange(e.target.value);
  }

  // Render
  return(
    <NavBar>
      <div className="container">
        <div id="logo">
          <a href="/">Home</a>
        </div>
        <div id="slider">
          <span>Level: {level}</span>
          <Slider defaultValue={level} min={100} max={900} onChange={changeLevel} step={100} />
        </div>
        <div id="select">
          <Select value={format} onChange={handleChange}>
            <MenuItem value="hex">Hex - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb( 255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba( 255, 255, 255, 1)</MenuItem>
          </Select>
        </div>
      </div>
    </NavBar>
  )
};

export default NavBarComponent;