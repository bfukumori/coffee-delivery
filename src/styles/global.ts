import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
