import { NavLink } from "react-router-dom";
import { FaHamburger, FaPizzaSlice, FaGlassMartiniAlt, FaIceCream } from "react-icons/fa";

import "./styles";
import { Aside } from "./styles";

const Header = () => {
  return (
    <Aside>
      <ul>
        <li>
          <NavLink to="/">
            <FaHamburger size="1.5rem" />
            <span>Lanches</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/pizzas">
            <FaPizzaSlice size="1.5rem" />
            <span>Pizzas</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/drinks">
            <FaGlassMartiniAlt size="1.5rem" />
            <span>Bebidas</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/desserts">
            <FaIceCream size="1.5rem" />
            <span>Sobremesas</span>
          </NavLink>
        </li>
      </ul>
    </Aside>
  );
};

export default Header;
