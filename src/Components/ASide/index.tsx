import React, { useState } from "react";

import {
  TiArrowUp,
  TiArrowDown,
  TiEject,
  TiThLarge,
  TiThMenu,
  TiTimes,
} from "react-icons/ti";

import ButtonTheme from "../ButtonTheme";

import { useAuth } from "../../Hooks/auth";
import { useTheme } from "../../Hooks/theme";

import logo from "../../assets/logo.svg";

import {
  Container,
  Header,
  ToggleMenu,
  LogoImg,
  Title,
  MenuContainer,
  MenuItemLink,
  MenuItemButton,
  Footer
} from "./styles";

const Aside: React.FC = () => {
  const { signOut } = useAuth();
  
  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
  const { toggleTheme, theme } = useTheme();
  const [blueTheme, setBlueTheme] = useState(() =>
    theme.title === "Blue" ? true : false
  );

  const handleChangeTheme = () => {
    setBlueTheme(!blueTheme);
    toggleTheme();
  }

  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened);
  };

  return (
    <Container menuIsOpen={toggleMenuIsOpened}>
      <Header>
        <ToggleMenu onClick={handleToggleMenu}>
          {toggleMenuIsOpened ? <TiTimes /> : <TiThMenu />}
        </ToggleMenu>
        <LogoImg src={logo} alt="logo Meu dimdim" />
        <Title> Meu dimdim </Title>
      </Header>
      <MenuContainer>
        <MenuItemLink href="/dashboard">
          <TiThLarge /> Dashboard
        </MenuItemLink>
        <MenuItemLink href="/list/entry-balance">
          <TiArrowUp /> Entradas
        </MenuItemLink>
        <MenuItemLink href="/list/exit-balance">
          <TiArrowDown /> Saídas
        </MenuItemLink>
        <MenuItemButton onClick={signOut}>
          <TiEject /> Sair
        </MenuItemButton>
      </MenuContainer>
      <Footer menuIsOpen={toggleMenuIsOpened}>
      <ButtonTheme labelLeft="Light" labelRight="Blue" checked={blueTheme} onChange={handleChangeTheme} />
      </Footer>
    </Container>
  );
};

export default Aside;
