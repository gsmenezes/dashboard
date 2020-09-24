import React, { useMemo, useState } from "react";
import { Container, Profile, Welcome, UserName } from "./styles";
import emojis from "../../Utils/emojis";
import ButtonTheme from "../ButtonTheme";
import { useTheme } from "../../Hooks/theme";

const MainHeader: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const [blueTheme, setBlueTheme] = useState(() =>
    theme.title === "Blue" ? true : false
  );

  const handleChangeTheme = () => {
    setBlueTheme(!blueTheme);
    toggleTheme();
  }

  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Container>
      <ButtonTheme labelLeft="Light" labelRight="Blue" checked={blueTheme} onChange={handleChangeTheme} />
      <Profile>
        <Welcome> Olá, {emoji} </Welcome>
        <UserName> Gi Menezes </UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
