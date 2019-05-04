import React, { useState } from 'react';
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ColorBoxWrap = styled.div`
  width: 20%;
  height: 25%;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  cursor: pointer;
  /* ---Box Content--- */
  & div.boxContent {
    position: absolute;
    bottom: 3px;
    left: 3px;
    font-size: 12px;
  }
  /* ---Box Content--- */
  & a.more {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 3px 9px;
    text-decoration: none;
    border: 2px solid #fff;
    font-size: 12px;
  }
  /* ---Copy Button--- */
  & button {
    position: absolute;
    display: inline-block;
    height: 30px;
    width: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(.8);
    cursor: pointer;
    outline: none;
    background: rgba(255,255,255,0.3);
    font-size: 1rem;
    color: #fff;
    text-transform: uppercase;
    border: 0;
    opacity: 0;
    transition: all 250ms ease-in-out;
  }
  &:hover button {
    opacity: 1;
    transform: translate(-50%,-50%) scale(1);
  }
`;

const Overlay = styled.div`
  opacity: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  transform: scale(0);
  transition: transform 1500ms ease-in-out;
  &.show {
    opacity: 1;
    transform: scale(50);
    z-index: 1000;
    position: absolute;
  }
`;

const CopyMessage = styled.div`
  position: fixed;
  z-index: 2000;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0);
  transition: transform 200ms ease-in-out;
  & div {
    text-align: center;
    color: #fff;
    font-size: 4vw;
    text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.7), 1px -1px 0 rgba(0, 0, 0, 0.7), -1px 1px 0 rgba(0, 0, 0, 0.7), 1px 1px 0 rgba(0, 0, 0, 0.7)
  }
  & div h2 {
    color: inherit;
    text-shadow: inherit;
    margin: 15px 0 0;
  }
  & div p {
    color: inherit;
    text-shadow: inherit;
    margin: 0;
  }
  &.show {
    transition-delay: 300ms;
    opacity: 1;
    transform: scale(1);
  }
`;

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
