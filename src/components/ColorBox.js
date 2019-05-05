import React, { useState } from 'react';
import chroma from "chroma-js";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

// Styled Component
import { ColorBoxWrap, Overlay, CopyMessage } from "./styled-components/ColorBox";

const ColorBox = (props) => {
  // State
  const [copied, setCopied] = useState(false);
  const { background, name, colorId, paletteId, showLink } = props;
  
  const changeCopyState =() => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  // 1 = whitest, 0 = darkest
  let colorLum = chroma(background).luminance();
  
  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <ColorBoxWrap style={{ background }} className={colorLum < 0.4 ? "light" : "dark"}>
      <Overlay className={`${copied ? "show" : ""}`} style={{ background }} />
        <CopyMessage className={`copyMessage ${copied ? "show" : ""} ${colorLum < 0.4 ? "light" : "dark"}`}>
          <div>
            <h2>Copied</h2>
            <p>{name}</p>
            <p>{background}</p>
          </div>
        </CopyMessage>
        <div className="copyContainer">
          <div className="boxContent">
            <span>{name}</span>
          </div>
          <button>Copy</button>
        </div>
        {showLink && (
          <Link to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation()} className="more">More</Link>
        )}
      </ColorBoxWrap>
    </CopyToClipboard>
  );
}

export default ColorBox;
