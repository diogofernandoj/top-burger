import { Head } from "../../../components/Head";
import Snacks from "../../../components/Snacks";
import { desserts } from "../../../data/products";

const Desserts = () => {
  return (
    <>
      <Head title="Desserts" />
      <Snacks snacks={desserts} />
    </>
  );
};

export default Desserts;
