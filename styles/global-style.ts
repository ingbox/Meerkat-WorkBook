import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

  ${normalize}

  * {
    box-sizing: border-box;
  }
  html {
        box-sizing: border-box;
        font-size: 20px;
        min-width: 320px;
        }
  a {
    cursor: pointer;
    text-decoration: none;
  }
  body {
    font-family: "Noto Sans KR";
  }
  h1 {
    font-size: 42px;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
  h2, h3, h4 {
    margin: 0;
  }

  `;
