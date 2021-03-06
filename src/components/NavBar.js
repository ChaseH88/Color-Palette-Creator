import React, { useState } from "react";
import chroma from "chroma-js";
import { Link } from "react-router-dom";

// Components
import { NavBar } from "./styled-components/NavBar"

// Slider
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

// Dropdown
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

// Snackbar
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";

// Utilities
import { getLum } from "../extras/getLum";

const NavBarComponent = (props) => {

  // State
  const [format, setFormat] = useState("hex");
  const [open, setOpen] = useState(false);

  // Props
  const { level, changeLevel, allColors } = props;

  // Format Change
  const handleChange = (e) => {
    setFormat(e.target.value)
    setOpen(true);
    props.handleChange(e.target.value);
  }

  // Close the snackbar
  const handleSnackbar = () => {
    setOpen(false);
  }

  // Dynamic Header and Footer background colors
  let newLevel = level * 0.006;
  let lumColor = chroma("#171719").brighten(newLevel).hex();

  // Render
  return(
    <NavBar style={{background: lumColor}} className={getLum(newLevel)}>
      <div className="container">
        <div id="logo">
          <Link to="/">Home</Link>
        </div>
        {allColors && (
          <div id="slider">
            <span>Level: {level}</span>
            <Slider defaultValue={level} min={100} max={900} onChange={changeLevel} step={100} />
          </div>
        )}
        <div id="select">
          <Select value={format} onChange={handleChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1)</MenuItem>
          </Select>
        </div>
      </div>
      <Snackbar 
        anchorOrigin={{
          vertical: "bottom", horizontal: "left"
        }}
        open={open} 
        autoHideDuration={3000} 
        message={
          <span id="message">Format Changed!</span>
        }
        ContentProps={{
          "aria-describedby":"message"
        }}
        onClose={handleSnackbar}
        action={[
          <IconButton>
            <CloseIcon onClick={handleSnackbar}  />
          </IconButton>
        ]}
      />
    </NavBar>
  )
};

export default NavBarComponent;