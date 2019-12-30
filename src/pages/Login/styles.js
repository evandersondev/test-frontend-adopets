import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #fbfeff;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  section {
    width: 400px;
    height: 400px;
    padding: 70px 30px;
    box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    background: #fff;

    h1 {
      font-size: 2em;
      margin-bottom: 30px;

      span {
        color: #cf3e71;
        font-weight: bold;
      }
    }

    .btn {
      width: 100%;
      display: block;
      background: #30b1d3;
      border: 0;
      font-weight: bold;
      letter-spacing: 1px;

      &:hover {
        background: #2da8c6;
      }
    }
  }
`;
