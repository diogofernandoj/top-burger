import { MdClose } from "react-icons/md";

import { CartBox, CartContainer } from "./styles";

const Cart = () => {
  return (
    <CartContainer>
      <CartBox>
        <button>
          <MdClose />
        </button>
        <h2>Seu carrinho</h2>
      </CartBox>
    </CartContainer>
  );
};

export default Cart;
