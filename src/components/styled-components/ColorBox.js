import styled from "styled-components";

const ColorBoxWrap = styled.div`
  position: relative;
  cursor: pointer;
  /* ---Box Content--- */
  & div.boxContent {
    position: absolute;
    bottom: 3px;
    left: 3px;
    font-size: 12px;
  }
  &.light div.boxContent {
    color: #fff
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
    z-index: 10000;
    position: absolute;
  }
`;

const CopyMessage = styled.div`
  position: fixed;
  z-index: 10001;
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
  &.dark div {
    color: #252525 !important;
    text-shadow: -1px -1px 0 rgba(255, 255, 255, 0.7), 1px -1px 0 rgba(255, 255, 255, 0.7), -1px 1px 0 rgba(255, 255, 255, 0.7), 1px 1px 0 rgba(255, 255, 255, 0.7);
  }
  & div {
    text-align: center;
    color: #fff;
    font-size: 4vw;
    text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.7), 1px -1px 0 rgba(0, 0, 0, 0.7), -1px 1px 0 rgba(0, 0, 0, 0.7), 1px 1px 0 rgba(0, 0, 0, 0.7);
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

export { ColorBoxWrap, Overlay, CopyMessage };