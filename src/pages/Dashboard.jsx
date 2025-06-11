import {
  Container,
  Header,
  Content,
  SidebarContainer,
  Menu,
  MenuItem,
  Divider,
  Profile,
  UserInfo,
  ActionButtons,
  MenuTitle,
  Apresentacao,
  Eventos,
  BotaoInserir,
  InputWrapper,
  InputComIcone,
  IconeBusca,
  InputTexto,
  TabelaEventos,
  TableContainer,
  ButtonOpcoes,
  BottomButtonsContainer,
} from "../styles/Dashboard.styles";

import {
  DashboardIcon,
  EventosIcon,
  EquipesIcon,
  InscricoesIcon,
  AlterarDadosIcon,
  SairIcon,
  AdmIcon,
  LogoIcon,
  InserirIcon,
} from "../components/Icons";

import lupaIcon from "../img/buscar-eventos-icon.svg";
import greenDot from "../img/greendot.png";
import redDot from "../img/reddot.png";
import tresPontosIcon from "../img/trespontos-icon.png";

const eventos = [
  {
    nome: "Clube do Laço Coração Pantaneiro",
    totalEquipes: 10,
    status: "Ativo",
    data: "09 a 11 de Junho",
  },
  {
    nome: "Clube do Laço Coração Pantaneiro",
    totalEquipes: 10,
    status: "Ativo",
    data: "09 a 11 de Junho",
  },
];

const Dashboard = () => {
  return (
    <Container>
      <SidebarContainer>
        <LogoIcon />

        <Menu className="menu">
          <MenuTitle>MENU</MenuTitle>
          <MenuItem>
            <DashboardIcon />
            Dashboard
          </MenuItem>
          <MenuItem>
            <EventosIcon />
            Eventos
          </MenuItem>
          <MenuItem>
            <EquipesIcon />
            Equipes
          </MenuItem>
          <MenuItem>
            <InscricoesIcon />
            Inscrições
          </MenuItem>
        </Menu>

        <Divider />

          <Profile className="profile">
            <AdmIcon />
            <UserInfo>
              <strong>Kaique Steck</strong>
              <span>Administrador</span>
            </UserInfo>
          </Profile>
        

        <ActionButtons>
          <button>
            <AlterarDadosIcon /> Alterar dados
          </button>
          <button>
            <SairIcon /> Sair
          </button>
        </ActionButtons>
      </SidebarContainer>

      <Content>
        <Apresentacao>
          Bem-vindo de volta, <strong>Kaique Steck</strong>
        </Apresentacao>
        <Header>Todos Eventos</Header>
        <Eventos>
          <InputWrapper>
            <InputComIcone>
              <IconeBusca src={lupaIcon} alt="Buscar" />
              <InputTexto type="text" placeholder="Buscar eventos" />
            </InputComIcone>
            <BotaoInserir>
              <InserirIcon /> Inserir novo
            </BotaoInserir>
          </InputWrapper>

          <TableContainer>
            <TabelaEventos>
              <thead>
                <tr>
                  <th>Nome do evento</th>
                  <th>Total de equipes</th>
                  <th>Status</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                <tr className="linha-um">
                  <td colSpan="5"></td>
                </tr>
                {eventos.map((evento, index) => (
                  <tr key={index}>
                    <td>{evento.nome}</td>
                    <td>{evento.totalEquipes}</td>
                    <td
                      style={{
                        color:
                          evento.status === "Ativo" ? "#657593" : "#657593",
                        fontWeight: "normal",
                      }}
                    >
                      <img
                        src={evento.status === "Ativo" ? greenDot : redDot}
                        alt="status"
                        style={{
                          width: "10px",
                          height: "10px",
                          marginRight: "8px",
                          marginLeft: "-8px",
                        }}
                      />
                      {evento.status}
                    </td>
                    <td>{evento.data}</td>
                    <td>
                      <ButtonOpcoes>
                        <img src={tresPontosIcon} alt="Opções" />
                      </ButtonOpcoes>
                    </td>
                  </tr>
                ))}
              </tbody>
            </TabelaEventos>
            <BottomButtonsContainer>
              <button>Anterior</button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>Próxima</button>
            </BottomButtonsContainer>
          </TableContainer>
        </Eventos>
      </Content>
    </Container>
  );
};

export default Dashboard;
