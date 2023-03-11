import styled from "styled-components";

export const CartButtonContainer = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  font-size: 2rem;
  border-radius: 1rem;

  position: fixed;
  z-index: 2;
  bottom: 1rem;
  right: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 720px) {
    bottom: 6rem;
  }
`;
