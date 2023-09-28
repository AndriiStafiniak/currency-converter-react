import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
::after,
::before {
  box-sizing: inherit;
}

body {
  font-family: "lato", sans-serif;
}
`;