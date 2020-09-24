import React, { useState } from "react";

import logoImg from "../../assets/logo.svg";
import { useAuth } from "../../Hooks/auth";
import Button from "./Button";
import Input from "./Input";
import { Container, Logo, Form, FormTitle } from "./styles";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { signIn } = useAuth();

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="logo Meu dimdim" />
        <h2>Meu dimdim</h2>
      </Logo>

      <Form onSubmit={() => signIn(email, password)}>
        <FormTitle>Entrar</FormTitle>
        <Input type="email" placeholder="E-mail" required onChange={(e)=> setEmail(e.target.value)} />
        <Input type="password" placeholder="Senha" required onChange={(e)=> setPassword(e.target.value)}/>
        <Button type="submit"> Acessar </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
