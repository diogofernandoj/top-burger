import styled from "styled-components";

export const Aside = styled.aside`
  width: 120px;
  background-color: #cc092f;
  display: flex;
  justify-content: center;
  box-shadow: 0 0.8rem 1.2rem #0007;
  position: fixed;
  inset: 0 auto 0 0;
  z-index: 2;

  ul {
    list-style: none;
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    li {
      a {
        color: #fff;
        font-size: 3rem;
        cursor: pointer;
        position: relative;
        transition: 0.3s ease;

        &.active {
          color: #ff0;
          &::after {
            content: "";
            position: absolute;
            width: 6px;
            height: calc(100% + 10px);
            background-color: #ff0;
            left: -2.22rem;
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
      padding-top: 0;
      flex-direction: row;

      li {
        margin-top: 1rem;
        a {
          &.active {
            color: #ff0;
            &::after {
              display: none;
            }
          }
        }
      }
    }
  }
`;
