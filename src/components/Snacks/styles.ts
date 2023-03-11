import styled from "styled-components";

export const SnacksContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 700px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const Snack = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.black};

  padding: 1rem;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;

  position: relative;

  h2 {
    margin-bottom: 1rem;
    text-align: center;
  }

  span {
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

export const Quantity = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: -0.75rem;
  left: -0.75rem;

  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.gray500};
  font-size: 0.9rem;
`;
