import styled from "styled-components";

export const CartContainer = styled.div`
  position: fixed;
  z-index: 2;
  inset: 0;
  background-color: #bbb6;

  display: none;
  justify-content: end;
`;

export const CartBox = styled.div`
  height: 100%;
  width: 100%;
  max-width: 550px;
  background-color: #eee;

  h2 {
    color: #222;
  }
`;

export const CartItems = styled.table``;
