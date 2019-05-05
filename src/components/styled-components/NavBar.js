import styled from "styled-components";

const NavBar = styled.header`
  height: 10%;
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
  & #select {
    flex: 0 0 275px;
    text-align: right;
  }
`;

export { NavBar }