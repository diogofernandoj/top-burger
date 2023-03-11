import { MdClose } from "react-icons/md";

import { CartBox, CartContainer } from "./styles";

const Cart = ({ setShowCart }) => {
  return (
    <CartContainer id="cart-container" onClick={(e) => e.target.id == "cart-container" && setShowCart(false)}>
      <CartBox>
        <h2>Seu carrinho</h2>
        <button onClick={() => setShowCart(false)}>
          <MdClose />
        </button>
      </CartBox>
    </CartContainer>
  );
};

export default Cart;
