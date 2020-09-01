import React, { FC } from "react";
import Login from "../Login/Login";
import Products from "../Products/Products";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
     html, body {
        width: 100%;
        height: 100%;
        font-family: "Roboto";
        margin: 0px;
        padding: 0px;
    }
`;

const defaultTheme = {};
const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ ...defaultTheme }}>
        <Login />{" "}
      </ThemeProvider>
    </>
  );
};

export default App;
