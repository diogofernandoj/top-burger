import styled from "styled-components";

export const LinksContainer = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  a {
    font-size: 1.5rem;
    color: #777;
    transition: 0.3s ease;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;
