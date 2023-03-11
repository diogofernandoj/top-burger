import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { unsetSnackInfo } from "../../redux/snack/slice";

import { Container, SnackContainer, SnackContent, Extras, ExtrasOptions, AddToOrder } from "./styles";

const Snack = () => {
  const dispacth = useDispatch();

  const snack = useSelector((state) => state.snack.snackInfo);

  const handleSnackClick = (elementId: string) => {
    if (elementId == "snack-container") {
      dispacth(unsetSnackInfo());
    }
  };

  return (
    <Container id="snack-container" onClick={(e) => handleSnackClick(e.target.id)}>
      <SnackContainer>
        <SnackContent>
          <h2>
            {snack.name} ({snack.category})
          </h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nobis?</p>
          {snack.category == "Lanche" || snack.category == "Pizza" ? (
            <Extras>
              <h3>Adicionais:</h3>
              <ExtrasOptions>
                <div>
                  <input type="checkbox" name="" id="" />
                  Bacon
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  Catupiry
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  Cheddar
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  Cream Cheese
                </div>
              </ExtrasOptions>
            </Extras>
          ) : (
            ""
          )}
          <textarea placeholder="Observações" />
          <AddToOrder>
            <div>
              <span>Preço:</span> <span>R$ {snack.price.toFixed(2).replace(".", ",")}</span>
            </div>
            <button>Adicionar ao pedido</button>
          </AddToOrder>
        </SnackContent>
      </SnackContainer>
    </Container>
  );
};

export default Snack;
