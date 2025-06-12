import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f4f4f4;
  
  @media (max-width: 768px) {
  flex-direction: column;
}
`;

export const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #ffffff;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 16px 12px;
    gap: 12px;
  }

  @media (max-width: 400px) {
  padding: 12px 8px;
  gap: 8px;

  .menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
`;

export const LogoIcon = styled.div`
  width: 100%;
`;

export const Menu = styled.nav`
  flex-grow: 1;
  margin-top: 40px;
`;

export const MenuTitle = styled.div`
  color: #a3a3a3;
  font-weight: bold;
  margin-left: 12px;
  font-size: 11px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  color: black;

  svg {
    width: 22px;
    height: 22px;
    margin-right: 13px;
    fill: currentColor;
    transition: fill 0.2s ease;
  }

  svg path {
    fill: currentColor !important;
  }

  &:hover {
    background-color: #cc6237;
    color: white;

    svg {
      fill: currentColor !important;
    }

    svg path {
      fill: currentColor !important;
    }
  }
`;

export const Divider = styled.hr`
  border: 0;
  height: 1px;
  background-color: #a3a3a3;
  margin: 42px 14px;

   @media (max-width: 431px) {
    margin: 2px 0;
    width: 70%; 
  }
   @media (max-width: 769px) {
    margin: 2px 0;
    width: 50%; 
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 27px;
  
  @media (max-width: 365px) {
    margin: 2px 0;
    width: 100%;  
    }

  @media (max-width: 431px) {
    margin: 2px 0;
    width: 40%; 
  }
`;

export const UserInfo = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  color: black;

  strong {
    font-size: 14px;
  }

  span {
    font-size: 11px;
    color: gray;
  }

  @media (max-width: 365px) {
    width: 80%;  
    }
`;

export const ActionButtons = styled.div`
  margin-top: 15px;

  button {
    display: flex;
    align-items: center;
    padding: 10px;
    margin-left: 23px;
    background: none;
    border: none;
    border-radius: 5px;
    color: black;
    cursor: pointer;
    width: 160px;

    &:nth-child(1) {
      width: 160px;
    }

    &:nth-child(2) {
      width: 113px;
    }

    svg {
      margin-right: 8px;
      margin-left: 15px;
      transition: fill 0.2s ease;
    }

    &:hover {
      background-color: #cc6237;
      color: white;

      svg,
      svg path {
        fill: currentColor !important;
      }
    }

     @media (max-width: 431px) {
    flex-direction: row;
    justify-content: center;
     

     &:nth-child(1) {
      margin-right: 30px;
    }

    &:nth-child(2) {
      margin-left: 40px;
    }
  }
     @media (max-width: 789px) {
    flex-direction: row;
    justify-content: center;
     
     &:nth-child(1) {
      margin-right: 30px;
    }

    &:nth-child(2) {
      margin-left: 40px;
    }
  }
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Apresentacao = styled.div`
  background-color: #f4f4f4;
  padding: 8px;

  @media (max-width: 768px) {
  font-size: 14px;
  text-align: center;
}
`;

export const Header = styled.div`
  background-color: #f4f4f4;
  color: #cc6237;
  padding: 8px;
  font-weight: bold;

  @media (max-width: 768px) {
  font-size: 14px;
  text-align: center;
}
`;

export const Eventos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #09428f2b;
  max-width: 1300px;
  height: 320px;
  text-align: center;
  position: relative;

  strong {
    font-size: 18px;
    color: black;
  }

  span {
    font-size: 14px;
    color: gray;
  }

  @media (max-width: 400px) {
    height: 390px;
  }
  @media (max-width: 600px) {
    height: 380px;
  }
`;

export const InputWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 10px;

   @media (max-width: 376px) { // modelo
    position: absolute;
    top: 20px;
    right: 1px;
    display: flex;
    gap: 10px;
  }
   @media (max-width: 365px) { 
    position: absolute;
    top: 20px;
    right: -10px;
    display: flex;
    gap: 10px;
  }

  @media (max-width: 400px) {
    justify-content: right;
    margin-right: -8px;
   
  }
  @media (max-width: 600px) {
    justify-content: center;
    padding-bottom: 50px;
    margin-right: -2px;
   
  }

  @media (max-width: 344px) {
  justify-content: left;
  align-items: center;
  flex-wrap: nowrap;
  gap: 4px;
  padding-bottom: 40px;
  margin-left: 10px;
 left: 1px;
  

  button {
    padding: 4px 10px;
    font-size: 12px;
    white-space: nowrap;
  }
}
`;

export const BotaoInserir = styled.button`
  padding: 8px 12px;
  background-color: #cc6237;
  color: white;
  border: none;
  border-radius: 33px;
  cursor: pointer;
  font-size: 15px;
  display: flex;
  align-items: center;

  svg {
    width: 18px;
    height: 18px;
    margin-right: 8px;
  }

  &:hover {
    background-color: rgb(168, 64, 23);
}
     @media (max-width: 400px) {
    width: 40%;
   
  }
     @media (max-width: 600px) {
    width: 40%; 
  }
`;

export const InputComIcone = styled.div`
  display: flex;
  background-color: orange;
  padding: 8px;
  border: none;
  border-radius: 33px;
  background-color: #f6f6f6;
  background: url("../img/buscar-eventos-icon.svg") no-repeat 8px left;

  @media (max-width: 400px) {
    width: 48%;
    
}
  @media (max-width: 600px) {
    width: 48%;
    
}
`;

export const IconeBusca = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background-color: #f6f6f6;
`;

export const InputTexto = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 16px;
  background: transparent;
`;

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 20px;
  border-radius: 8px;
  background: #ffffff;
  padding: 20px;

  @media (max-width: 600px) {
    margin-bottom: 50px;
  }
`;

export const TabelaEventos = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 2px;
  min-width: 600px; // n sei se ajudou ou atrapalhou

  thead {
    background: #ffffff;
    text-align: left;
  }

  th {
    // primeira linha
    font-family: "Poppins", sans-serif;
    padding: 1px 12px;
    padding-right: 2px;
    font-weight: 100;
    color: #cc623780;
    font-size: 14px;
    width: 25%;
  }

  tbody tr {
    color: #657593;
    text-align: left;
    width: 10%;
  }

  td {
    padding: 12px 16px;
    font-size: 13px;
    border-bottom: 1px solid #cc62371a;
  }

  tbody tr td:first-child {
    color: #657593;
    text-align: left;
    width: 10%;
  }

  tbody tr td:nth-child(2) {
    color: #657593;
    padding-left: 22px;
    width: 10%;
  }

  tbody tr td:nth-child(3) {
    font-weight: bold;
    color: ${({ status }) => (status === "Ativo" ? "green" : "red")};
    width: 10%;
  }

  tbody tr td:last-child {
    color: #657593;
    text-align: left;
    width: 10%;
  }

  tr.linha-um td {
    padding: 4px;
  }

  @media (max-width: 400px) {
    padding-bottom: 30px;
  }
`;

export const ButtonOpcoes = styled.button`
  background: transparent;
  border: 1px none #cc6237;
  color: #cc6237;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(204, 98, 55, 0.3);
  }
`;

export const BottomButtonsContainer = styled.div`
  position: absolute;
  bottom: 13px;
  right: 20px;
  display: flex;
  gap: 12px;

  button {
    border: none;
    padding: 10px 16px;
    border-radius: 33px;
    cursor: pointer;
    transition: 0.3s ease;
    color: white;
  }

  button:nth-child(1) {
    background: #f5f5f5;
    color: black;

    &:hover {
      background: #cc6237;
      color: #f5f5f5;
    }
  }

  button:nth-child(2) {
    background: #cc6237;

    &:hover {
      background: #f5f5f5;
      color: black;
    }
  }

  button:nth-child(3) {
    background: #f5f5f5;
    color: black;

    &:hover {
      background: #cc6237;
      color: #f5f5f5;
    }
  }

  button:nth-child(4) {
    background: #f5f5f5;
    color: black;
    &:hover {
      background: #cc6237;
      color: #f5f5f5;
    }
  }

  button:nth-child(5) {
    background: #cc6237;

    &:hover {
      background: #f5f5f5;
      color: black;
    }
  }

  @media (max-width: 360px) {
  width: 100%;
  height: auto;
  left: -1px;
  margin-bottom: 2px;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  align-items: center;
}
  @media (max-width: 768px) {
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
 
}
  @media (max-width: 344px) {
  position: relative;
  width: 100%;
  left: 0;
  right: 0;
  margin: 8px auto 0;
  flex-wrap: nowrap;
  gap: 4px;
  justify-content: center;
  align-items: center;
  padding: 0 6px;

  button {
    padding: 6px 10px;
    font-size: 12px;
    white-space: nowrap; 
  }
}
`;
