import React from "react";
import { TiArrowUp, TiArrowDown, TiEject, TiThLarge } from 'react-icons/ti';
import { useAuth } from "../../Hooks/auth";
import logo from "../../assets/logo.svg";
import { Container, Header, LogoImg, Title, MenuContainer, MenuItemLink, MenuItemButton } from "./styles";

const Aside: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Header>
        <LogoImg src={logo} alt="logo Meu dimdim" />
        <Title> Meu dimdim </Title>
      </Header>
      <MenuContainer>
        <MenuItemLink href="/"> <TiThLarge /> Dashboard</MenuItemLink>
        <MenuItemLink href="/list/entry-balance"> <TiArrowUp /> Entradas</MenuItemLink>
        <MenuItemLink href="/list/exit-balance"> <TiArrowDown /> Saídas</MenuItemLink>
        <MenuItemButton onClick={signOut} > <TiEject /> Sair</MenuItemButton>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
