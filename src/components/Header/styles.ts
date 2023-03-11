import styled from "styled-components";

export const Aside = styled.aside`
  padding: 1rem;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.red};
  display: flex;
  justify-content: center;
  box-shadow: 0 0.8rem 1.2rem #0007;
  position: fixed;
  inset: 0 auto 0 0;
  z-index: 1;

  ul {
    height: max-content;
    width: 100%;
    list-style: none;
    padding-top: 3rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    li {
      padding: 0 0.5rem;
      a {
        color: ${({ theme }) => theme.colors.white};
        font-size: 1.1rem;
        cursor: pointer;
        position: relative;
        transition: 0.3s ease;

        display: flex;
        align-items: center;
        gap: 0.4rem;

        &.active {
          color: ${({ theme }) => theme.colors.yellow};
          &::after {
            content: "";
            position: absolute;
            width: 5px;
            height: calc(100% + 20px);
            background-color: ${({ theme }) => theme.colors.yellow};
            left: -1.5rem;
            top: 40%;
            transform: translateY(-50%);
            border-radius: 0 5px 5px 0;
            animation: activeBar 0.3s;
          }

          @keyframes activeBar {
            from {
              height: 0;
            }
            to {
              height: 100%;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 720px) {
    height: 5rem;
    width: 100%;
    right: 0;
    top: auto;
    box-shadow: -0.6rem 0 1rem #0007;

    ul {
      height: 100%;
      padding-top: 0;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      li {
        margin-top: 1rem;
        a {
          font-size: 0.9rem;
          flex-direction: column;

          &.active {
            color: ${({ theme }) => theme.colors.yellow};
            &::after {
              display: none;
            }
          }
        }
      }
    }
  }
`;
