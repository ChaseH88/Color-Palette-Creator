import React from "react";
import chroma from "chroma-js";

// Utilities
import { getLum } from "../extras/getLum";

// Styled
import { Footer } from "./styled-components/Footer";

const FooterComponent = (props) => {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  // Grab the props
  const { paletteName, emoji, level } = props;

    // Dynamic Header and Footer background colors
    let newLevel = level * 0.006;
    let lumColor = chroma("#171719").brighten(newLevel).hex();

  return(
    <Footer style={{background: lumColor}} className={getLum(newLevel)}>
      <div className="container">
        <div className="info">
          <p>{`${paletteName} ${emoji}`}</p>
        </div>
        <p>&copy; {getCurrentYear()}</p>
      </div>
    </Footer>
  )
};

export default FooterComponent;