import styled from "styled-components";

export const LogoContainer = styled.div`
  margin: 1.5rem auto;
  width: 160px;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};

  display: flex;

  span {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;
