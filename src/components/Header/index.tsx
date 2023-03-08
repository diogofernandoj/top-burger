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
            <FaHamburger />
          </NavLink>
        </li>
        <li>
          <NavLink to="/pizzas">
            <FaPizzaSlice />
          </NavLink>
        </li>
        <li>
          <NavLink to="/drinks">
            <FaGlassMartiniAlt />
          </NavLink>
        </li>
        <li>
          <NavLink to="/desserts">
            <FaIceCream />
          </NavLink>
        </li>
      </ul>
    </Aside>
  );
};

export default Header;
