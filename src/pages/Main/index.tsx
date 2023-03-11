import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Cart from "../../components/Cart";
import { CartButton } from "../../components/CartButton";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import Snack from "../../components/Snack";

import "./styles";
import { Container, Content } from "./styles";

const Main = () => {
  const [showCart, setShowCart] = useState<boolean>(false);

  const showSnack = useSelector((state) => state.snack.snackInfo);

  return (
    <Container>
      <Header />

      <Content>
        <Logo />

        <CartButton setShowCart={setShowCart} />
        {!!showCart && <Cart setShowCart={setShowCart} />}
        <Outlet />
        {!!showSnack && <Snack />}
      </Content>
    </Container>
  );
};

export default Main;
