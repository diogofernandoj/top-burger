import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #111;
  color: #e7e7e7;
  display: flex;
`;

export const Content = styled.div`
  margin-bottom: 2rem;
  padding-left: 8rem;

  @media screen and (max-width: 720px) {
    padding-left: 1rem;
    padding-bottom: 7rem;
  }
`;
