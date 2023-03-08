import { MdFastfood } from "react-icons/md";

import { LogoContainer } from "./styles";

const Logo = () => {
  return (
    <LogoContainer>
      <MdFastfood size="2rem" />
      <p>
        Top<span>Burger</span>
      </p>
    </LogoContainer>
  );
};

export default Logo;
