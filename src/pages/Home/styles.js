import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Quicksand:400,700&display=swap");

  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fbfeff;

  nav {
    width: 100%;
    height: 64px;
    background: #cf3e71;
    padding: 0 30px;
    margin-bottom: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.4);

    h1 {
      font-size: 1.7em;
      font-family: "Quicksand", sans-serif;
      text-transform: lowercase;
      color: #fff;
      font-weight: 700;
      margin: 0;
    }

    button {
      font-size: 12px;
      letter-spacing: 1px;
      margin: 0;
      padding: 5px 18px;
      border: 1px solid #fff;
      color: #fff;
      border-radius: 5px;
      background: transparent;
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

  @keyframes seta {
    from {
      right: 30px;
    }
    to {
      right: 20px;
    }
  }

  section {
    width: 92%;
    padding: 30px;
    background: #fff;
    margin: 0 auto;
    box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }

  @media (max-width: 600px) {
    section {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar;
      position: relative;

      &::after {
        content: "➙";
        position: absolute;
        top: 5px;
        right: 30px;
        color: rgba(0, 0, 0, 0.3);
        animation: seta 0.5s ease-in 0s infinite alternate;
      }
    }
  }
`;
