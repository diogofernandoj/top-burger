import { Head } from "../../../components/Head";
import Snacks from "../../../components/Snacks";
import { burgers } from "../../../data/products";

const Burgers = () => {
  return (
    <>
      <Head title="Burgers" />
      <Snacks snacks={burgers} />
    </>
  );
};

export default Burgers;
