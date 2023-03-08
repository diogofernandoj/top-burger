import styled from "styled-components";

export const SnacksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
`;

export const Snack = styled.div`
  height: 340px;
  width: 290px;

  background-color: #000;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

export const Quantity = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: -0.75rem;
  left: -0.75rem;

  font-weight: 700;
  background-color: #cc092f;
  color: #fff;
  padding: 1rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    margin-bottom: 1rem;
    text-align: center;
  }

  img {
    width: 100%;
    height: 170px;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  margin: 2rem 0;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-weight: 500;
    font-size: 1.2rem;
  }

  button {
    height: 2rem;
    width: 2rem;
    border: none;
    background: none;
    color: #cc092f;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }
`;
