import React from "react";

import { Container, ThemeSelector, ToggleLabel } from "./styles";

const ButtonTheme: React.FC = () => (
  <Container>
        <ToggleLabel>Light</ToggleLabel>
        <ThemeSelector checked uncheckedIcon={false} checkedIcon={false} onChange={() => console.log('changed')} /> 
    <ToggleLabel>Blue</ToggleLabel>
  </Container>
);

export default ButtonTheme;
