import React from "react";

// Styled
import { Footer } from "./styled-components/Footer";

const FooterComponent = (props) => {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  // Grab the props
  const { paletteName, emoji } = props;
  return(
    <Footer>
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