import { Head } from "../../../components/Head";
import Snacks from "../../../components/Snacks";

import { drinks } from "../../../data/products";

const Drinks = () => {
  return (
    <>
      <Head title="Drinks" />
      <Snacks snacks={drinks} />
    </>
  );
};

export default Drinks;
