import { Head } from "../../../components/Head";
import { Title } from "../../../components/Title";
import Snacks from "../../../components/Snacks";

import { drinks } from "../../../data/products";

const Drinks = () => {
  return (
    <>
      <Head title="Drinks" />
      <Title>Bebidas</Title>
      <Snacks snacks={drinks} />
    </>
  );
};

export default Drinks;
