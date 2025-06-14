import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  LoginBox,
  ImageBox,
  Logo,
  Title,
  Subtitle,
  Form,
  Label,
  Input,
  PasswordWrapper,
  ShowPasswordButton,
  Button,
} from "../styles/Login.styles";
import logoImg from "../img/logo.png";
import eyeIcon from "../img/eye.png";
import fundoImg from '../img/fundo.png';
import imagemImg from '../img/imagem.png';



export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      setIsLoggedIn(true); 
      navigate("/dashboard"); 
    }
  };

  return (
    <Container>
      <LoginBox>
        <Logo src={logoImg} alt="Logo" />
        <Title>Bem-vindo de volta</Title>
        <Subtitle>Entre com sua conta para acessar o painel.</Subtitle>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            value={email}
            placeholder="seunome@seuservidor.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Label htmlFor="password">Senha</Label>
          <PasswordWrapper>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Digite aqui"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <ShowPasswordButton
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img src={eyeIcon} alt="Mostrar senha" />
            </ShowPasswordButton>
          </PasswordWrapper>

          <Button type="submit">Enviar</Button>
        </Form>
      </LoginBox>

      <ImageBox fundo={fundoImg} imagem={imagemImg} />

    </Container>
  );
}
