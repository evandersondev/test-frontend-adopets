import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

  width: 100%;
  display: flex;
  flex-direction: column;

  nav {
    width: 100%;
    height: 60px;
    background: #cf3e71;
    padding: 0 30px;
    margin-bottom: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 1.8em;
      font-family: "Roboto", sans-serif;
      text-transform: lowercase;
      color: #fff;
      font-weight: 400;
      margin: 0;
    }

    button {
      font-size: 12px;
      margin: 0;
      padding: 5px 18px;
      border: 1px solid #fff;
      color: #fff;
      border-radius: 5px;
      background: transparent;
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;
      transition: 0.3s ease-out;

      &:hover {
        color: #cf3e71;
        background: #fff;
        border: 1px solid #fff;
      }
    }
  }

  section {
    width: 92%;
    padding: 30px;
    margin: 0 auto;
    box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, 0.1);
  }
`;
