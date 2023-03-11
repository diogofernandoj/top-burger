import styled from "styled-components";

export const CartContainer = styled.div`
  position: fixed;
  z-index: 2;
  inset: 0;
  background-color: #bbb6;

  display: flex;
  justify-content: end;
`;

export const CartBox = styled.div`
  height: 100%;
  width: 100%;
  max-width: 500px;
  background-color: #eee;

  position: relative;

  h2 {
    color: #222;
    margin: 1rem 0 1rem 1rem;
  }

  button {
    border: none;
    background: none;
    color: #777;
    font-size: 1.5rem;
    position: absolute;
    top: 1rem;
    right: 1rem;

    &:hover {
      color: #f00;
    }
  }
`;

export const CartItems = styled.table``;
