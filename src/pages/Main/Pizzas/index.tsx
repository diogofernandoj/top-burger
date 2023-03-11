import { Head } from "../../../components/Head";
import Snacks from "../../../components/Snacks";

import { pizzas } from "../../../data/products";

const Pizzas = () => {
  return (
    <>
      <Head title="Pizzas" />
      <Snacks snacks={pizzas} />
    </>
  );
};

export default Pizzas;
