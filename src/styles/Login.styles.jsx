import styled from "styled-components";

export const Logo = styled.img`
  display: block;
  margin: 0 auto 1.5rem;  /* centraliza horizontalmente e dá margem embaixo */
  width: 170px;            /* ajuste o tamanho da logo */
  height: auto;
  margin-left: 0;         /* alinha à esquerda */
  margin-right: auto;     /* garante que não centralize */
`;


export const Container = styled.div`
  width: 756.5px;
  height: 498px;
  display: flex;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


export const LoginBox = styled.div`
  flex: 1;
  padding: 40px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start; /* alinha conteúdo à esquerda */
  text-align: left; /* garante que o texto fique alinhado à esquerda */
`;

export const ImageBox = styled.div`
  flex: 1;
  padding: 40px;
  background: white url(../src/img/fundo.png) no-repeat center center;
  background-size: 355.5px 478px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 172px /* centraliza verticalmente */
    left: 20px; /* centraliza horizontalmente */
    bottom: -23.5px;
    transform: translate(-20%, -10%); /* move um pouco para a esquerda e para baixo */
    width: 357px; 
    height: 316px;
    background: url(../src/img/imagem.png) no-repeat center center;
    background-size: contain;
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
  color: #CC6237;
  line-height: 25px;
`;

export const Subtitle = styled.p`
  font-size: 13px;
  color: #2A4D8E80;
  margin-bottom: 2rem;
  text-align: left;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 6px;
  color: #CC6237;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 12px 14px;
  font-size: 15px;
  width: 299px;
  height: 50px;
  border: none;
  border-radius: 100px;
  margin-bottom: 20px;
  transition: border-color 0.3s;
  background-color: #F6F6F6;
  

  &:focus {
    border-color: #CC6237;
    outline: none;
  }

 

  &::placeholder {
    color: #657593;  /* Cor do placeholder */
    }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: #CC6237;
  color: white;
  font-weight: 500;
  height: 40px;
  width: 100%;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s;
  text-align: center;

  &:hover {
    background-color: rgb(148, 63, 29);
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;  /* para input ocupar todo o espaço disponível */
`;

export const ShowPasswordButton = styled.button`
  position: absolute;
  right: 10px;
  top: 40%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  
`;

