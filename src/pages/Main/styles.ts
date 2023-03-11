import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray900};
  color: ${({ theme }) => theme.colors.gray200};
  display: flex;
`;

export const Content = styled.div`
  width: 100%;

  margin-bottom: 2rem;
  padding: 1rem 1rem 1rem 14rem;

  @media screen and (max-width: 720px) {
    padding-left: 1rem;
    padding-bottom: 4rem;
  }
`;
