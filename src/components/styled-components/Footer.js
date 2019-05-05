import styled from "styled-components";

const Footer = styled.footer`
  height: 10%;
  background-color: #f3f3f3;
  position: relative;
  box-shadow: 0 0 10px #6363636e;
  z-index: 4001;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  & .container {
    max-width: 95%;
    margin: 0 auto;
    text-align: center;
    & p {
      margin: 0;
    }
  }
`;

export { Footer };