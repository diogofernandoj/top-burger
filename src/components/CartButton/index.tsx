import { MdOutlineShoppingCart } from "react-icons/md";

import "./styles";
import { CartButtonContainer } from "./styles";

export const CartButton = ({ setShowCart }) => {
  return (
    <CartButtonContainer onClick={() => setShowCart(true)}>
      <MdOutlineShoppingCart />
    </CartButtonContainer>
  );
};
