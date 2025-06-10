import styled from "styled-components";

// Logo: já está ok
export const Logo = styled.img`
  display: block;
  margin: 0 auto 1.5rem;
  width: 170px;
  height: auto;
  margin-left: 0;
  margin-right: auto;
`;

// CONTAINER: agora responsivo
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

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    height: auto;
    max-width: 400px;
  }
`;

// LOGIN BOX: ajustado para ocupar toda a largura em telas pequenas
export const LoginBox = styled.div`
  flex: 1;
  padding: 40px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

// IMAGE BOX: imagem não some e se ajusta
export const ImageBox = styled.div`
  flex: 1;
  padding: 40px;
  background: white url(${props => props.fundo}) no-repeat center center;
  background-size: 355.5px 478px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 204px;
    left: 39px;
    width: 357px;
    height: 316px;
    background: url(${props => props.imagem}) no-repeat center center;
    background-size: contain;
    transform: translate(-20%, -10%);
  }

  @media (max-width: 768px) {
    background-size: 100% auto;
    padding: 30px;
    height: 300px;
    min-height: 280px;

    &::after {
      top: 30px;
      left: 55px;
      width: 280px;
      height: 250px;
      transform: translate(0, 0);
    }
  }

  @media (max-width: 400px) {
    padding: 20px;
    height: 250px;

    &::after {
      top: 90px;
      left: 49px;
      width: 240px;
      height: 210px;
    }
  }
`;

// TIPOGRAFIA
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

// FORMULÁRIO
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  background-color: #F6F6F6;

  &:focus {
    border-color: #CC6237;
    outline: none;
  }

  &::placeholder {
    color: #657593;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
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
  

  &:hover {
    background-color: rgb(148, 63, 29);
  }
  @media (max-width: 400px) {
    width: 100%;
    margin: 0 auto;
  }
`;  

export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ShowPasswordButton = styled.button`
  position: absolute;
  right: 16px;
  top: 40%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;

  img {
  width: 20px;
  height: 20px;
  }
`;
