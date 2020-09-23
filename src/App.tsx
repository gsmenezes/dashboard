import React from "react";
import { ThemeProvider } from "styled-components";
import Routes from "./Routes";
import GlobalStyles from "./Styles/GlobalStyles";
import blue from "./Styles/Themes/blue";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={blue}>
      <GlobalStyles />
     <Routes />
    </ThemeProvider>
  );
};

export default App;
