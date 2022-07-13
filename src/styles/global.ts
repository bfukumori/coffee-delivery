import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media screen and (min-width: 960px) {
    html {
        margin-left: calc(100vw - 100%);
        margin-right: 0;
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

  img {
    display: block;
    max-width: 100%;
    width: 100%;
  }
`;
