import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  html {
    scrollbar-gutter: stable both-edges;
  }
  
  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  input, textarea, button, body  {
    font-family: "Roboto",sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  body  {
    background-color: ${(props) => props.theme["gray-100"]};
    color: ${(props) => props.theme["gray-700"]};
    -webkit-font-smoothing: antialiased
  }

  ul {
    list-style: none;
  }
`;
