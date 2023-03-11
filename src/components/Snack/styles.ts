import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2;

  background: #7776;
`;

export const SnackContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  padding-bottom: 6rem;

  position: absolute;
  inset: auto 0 0 0;
`;

export const SnackContent = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 700px;

  h2 {
    margin: 1rem;
  }
  p {
    margin: 1rem;
    color: #eee;
    font-weight: 500;
  }
  h3 {
    margin: 1rem 0 0 1rem;
  }
  > textarea {
    margin: 1rem;
    padding: 1rem;
    width: 90%;
    height: 150px;
    border: none;
    border-radius: 1rem;
    background-color: #fff;
    color: #000;
  }
`;

export const Extras = styled.div``;

export const ExtrasOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
`;

export const AddToOrder = styled.div`
  background-color: ${({ theme }) => theme.colors.darkRed};
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  z-index: 3;
  bottom: 0;

  height: 4.5rem;
  width: 100%;
  max-width: 700px;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;

    span:first-child {
      color: #eee;
    }
    span:last-child {
      font-weight: 700;
      color: #fff;
      font-size: 1.4rem;
    }
  }

  button {
    border: none;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.red};
    font-weight: 700;
    border-radius: 1rem;
    padding: 0.4rem 1rem;
  }
`;
