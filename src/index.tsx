import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./Hooks/auth";
import { ThemeProvider } from "./Hooks/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
