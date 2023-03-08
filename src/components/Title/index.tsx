import "./styles";
import { TitleH1 } from "./styles";

type TitleProps = {
  children: string;
};

export const Title = ({ children }: TitleProps) => {
  return <TitleH1>{children.toUpperCase()}</TitleH1>;
};
