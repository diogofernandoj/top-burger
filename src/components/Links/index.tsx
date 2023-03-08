import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";

import { LinksContainer } from "./styles";

const Links = () => {
  return (
    <LinksContainer>
      <a href="https://www.linkedin.com/in/diogofernandoj/" target="blank">
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/diogofernandoj/" target="blank">
        <TbBrandGithub />
      </a>
    </LinksContainer>
  );
};

export default Links;
