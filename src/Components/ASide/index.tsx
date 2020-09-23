import React from "react";
import { TiArrowUp, TiArrowDown, TiEject, TiThLarge } from 'react-icons/ti';
import { Container, Header, LogoImg, Title, MenuContainer, MenuItemLink } from "./styles";
import logo from "../../assets/logo.svg";

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={logo} alt="logo dashboard" />
        <Title> Meu dimdim </Title>
      </Header>
      <MenuContainer>
        <MenuItemLink href="/dashboard"> <TiThLarge /> Dashboard</MenuItemLink>
        <MenuItemLink href="/list/entry-balance"> <TiArrowUp /> Entradas</MenuItemLink>
        <MenuItemLink href="/list/exit-balance"> <TiArrowDown /> Saídas</MenuItemLink>
        <MenuItemLink href="#"> <TiEject /> Sair</MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
