import { Head } from "../../../components/Head";
import { Title } from "../../../components/Title";
import Snacks from "../../../components/Snacks";
import { burgers } from "../../../data/products";

const Burgers = () => {
  return (
    <>
      <Head title="Burgers" />
      <Title>Lanches</Title>
      <Snacks snacks={burgers} />
    </>
  );
};

export default Burgers;
