import React, { useState } from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";

// Styled Component
import { ColorBoxWrap, Overlay, CopyMessage } from "./styled-components/ColorBox";

const ColorBox = (props) => {
  // State
  const [copied, setCopied] = useState(false);
  const { background, name } = props;
  
  const changeCopyState =() => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }
  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <ColorBoxWrap style={{ background }}>
      <Overlay className={`${copied ? "show" : ""}`} style={{ background }} />
        <CopyMessage className={`copyMessage ${copied ? "show" : ""}`}>
          <div>
            <h2>Copied</h2>
            <p>{background}</p>
          </div>
        </CopyMessage>
        <div className="copyContainer">
          <div className="boxContent">
            <span>{name}</span>
          </div>
          <button>Copy</button>
        </div>
        <a className="more" href="/   ">See More</a>
      </ColorBoxWrap>
    </CopyToClipboard>
  );
}

export default ColorBox;
