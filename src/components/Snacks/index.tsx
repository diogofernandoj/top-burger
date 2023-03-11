import { useDispatch } from "react-redux";

import { setSnackInfo } from "../../redux/snack/slice";

import "./styles";
import { Snack, SnacksContainer, Quantity, Details, Description } from "./styles";

type SnacksProps = {
  snacks: { id: string; name: string; price: number }[];
};

const Snacks = ({ snacks }: SnacksProps) => {
  const dispatch = useDispatch();

  return (
    <SnacksContainer>
      {snacks.map((snack) => (
        <Snack key={snack.id} onClick={() => dispatch(setSnackInfo(snack))}>
          <Quantity>2</Quantity>
          <Details>
            <h2>{snack.name}</h2>
            <span>R$ {snack.price.toFixed(2).replace(".", ",")}</span>
          </Details>
          <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, praesentium?</Description>
        </Snack>
      ))}
    </SnacksContainer>
  );
};

export default Snacks;
