import React, { useMemo } from "react";
import { Container, Profile, Welcome, UserName } from "./styles";
import emojis from "../../utils/emojis";
import ButtonTheme from "../ButtonTheme";

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Container>
     <ButtonTheme />
      <Profile>
        <Welcome> Olá, {emoji} </Welcome>
        <UserName> Gi Menezes </UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
