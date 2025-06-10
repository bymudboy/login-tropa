import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f4f4f4;
`;

export const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #ffffff;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
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
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 27px;
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
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Apresentacao = styled.div`
  background-color: #f4f4f4;
  padding: 8px;
`;

export const Header = styled.div`
  background-color: #f4f4f4;
  color: #cc6237;
  padding: 8px;
  font-weight: bold;
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
`;

export const InputWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
`;

// export const InputContainer = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
// `;

// export const Input = styled.input`
//   background-color: orange;
//   padding: 8px;
//   border: none;
//   border-radius: 33px;
//   background-color: #F6F6F6;
//   background: url('../img/buscar-eventos-icon.svg') no-repeat 8px left;
// `;

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
`;

export const InputComIcone = styled.div`
  display: flex;
  background-color: orange;
  padding: 8px;
  border: none;
  border-radius: 33px;
  background-color: #f6f6f6;
  background: url("../img/buscar-eventos-icon.svg") no-repeat 8px left;
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
  // box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const TabelaEventos = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 2px;

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
`;
