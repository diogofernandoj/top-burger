import { Head } from "../../../components/Head";
import { Title } from "../../../components/Title";
import Snacks from "../../../components/Snacks";

import { desserts } from "../../../data/products";

const Desserts = () => {
  return (
    <>
      <Head title="Desserts" />
      <Title>Sobremesa</Title>
      <Snacks snacks={desserts} />
    </>
  );
};

export default Desserts;
