import { MdAddCircleOutline } from "react-icons/md";

import "./styles";
import { Details, Info, Quantity, Snack, SnacksContainer } from "./styles";

type SnacksProps = {
  snacks: { id: string; name: string; price: number; imageUrl: string }[];
};

const Snacks = ({ snacks }: SnacksProps) => {
  return (
    <SnacksContainer>
      {snacks.map((snack) => (
        <Snack key={snack.id}>
          <Quantity>2</Quantity>
          <Details>
            <h2>{snack.name}</h2>
            <img src={snack.imageUrl} alt={snack.name} />
          </Details>
          <Info>
            <span>R$ {snack.price.toFixed(2).replace(".", ",")}</span>
            <button>
              <MdAddCircleOutline size="2.2rem" />
            </button>
          </Info>
        </Snack>
      ))}
    </SnacksContainer>
  );
};

export default Snacks;
