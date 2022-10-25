import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
  overflow: hidden;
  z-index: 999;
  color: ${(props) => props.theme.colors.white}
`;

export const Logo = styled.img`
  width: 100px;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  flex: 1;
  gap: 15px;
  margin-left: 25px;
  align-items: center;

  span {
    font-size: 20px;
    letter-spacing: 1.42px;
    position: relative;
    text-decoration: none;

      &:after {
        content: "";
        height: 2px;
        background: ${(props) => props.theme.colors.white};
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 1;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform-origin: left center;
      }
    }

    a {
      display: flex;
      align-items: center;
      padding: 0 12px;
      cursor: pointer;

      &:hover {
        span:after {
          transform: scaleX(1);
          opacity: 1;
        }
      }
    }
  
  @media (max-width: 768px) {
      display: none;
  }
`;

