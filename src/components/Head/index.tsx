type HeadProps = {
  title: string;
};

export const Head = ({ title }: HeadProps) => {
  document.title = `TopBurger | ${title}`;
  return null;
};
