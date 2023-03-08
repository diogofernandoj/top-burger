import { Head } from "../../../components/Head";
import { Title } from "../../../components/Title";
import Snacks from "../../../components/Snacks";

import { pizzas } from "../../../data/products";

const Pizzas = () => {
  return (
    <>
      <Head title="Pizzas" />
      <Title>Pizzas</Title>
      <Snacks snacks={pizzas} />
    </>
  );
};

export default Pizzas;
