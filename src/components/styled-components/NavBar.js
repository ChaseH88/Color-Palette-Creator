import styled from "styled-components";

const NavBar = styled.header`
  height: 10%;
  background-color: #f3f3f3;
  position: relative;
  box-shadow: 0 0 10px #6363636e;
  z-index: 4000;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  & .container {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > div {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
  & #logo {
    flex: 1 1 20%;
    justify-content: flex-start;
  }
  & #slider {
    flex: 1 1 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    & span {
      flex: 1 125px;
    }
    & div {
      flex: 1 1 auto;
    }
  }
  & #select {
    flex: 0 0 275px;
    justify-content: flex-end;
  }
`;

export { NavBar }