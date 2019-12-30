import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(340deg, #cf3e71, #30b1d3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 15em;
    font-weight: bolder;
    color: #fff;
    margin: 0;
  }

  h2 {
    font-size: 2.5em;
    color: #fff;
    text-transform: uppercase;
  }

  p {
    font-size: 18px;
    color: #fff;

    a {
      text-decoration: none;
      color: #30b1d3;
      font-weight: bold;
      letter-spacing: 2px;
      font-size: 20px;
    }
  }
`;
