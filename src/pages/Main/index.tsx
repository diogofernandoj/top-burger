import { Outlet } from "react-router-dom";
import Cart from "../../components/Cart";

import Header from "../../components/Header";
import Links from "../../components/Links";
import Logo from "../../components/Logo";

import "./styles";
import { Container, Content } from "./styles";

const Main = () => {
  return (
    <Container>
      <Header />

      <Content>
        <Logo />
        <Links />

        <Cart />

        <Outlet />
      </Content>
    </Container>
  );
};

export default Main;
