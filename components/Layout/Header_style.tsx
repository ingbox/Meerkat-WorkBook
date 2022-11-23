import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${(props) => props.theme.colors.header};
  height: 45px;
  padding: 0 75px;
  z-index: 999;
  overflow: hidden;

  &.trans {
    background: hsl(0 0% 100% / 0.1);
    /* backdrop-filter: blur(1rem); */
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

export const Logo = styled.img`
  float: left;
  width: 100px;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  
  float: right;

  span {
    font-size: 18px;
    letter-spacing: 0px;
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
        transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform-origin: left center;
      }
    }

    a {
      display: inline-block;
      padding: 10px 20px 0 0;
      cursor: pointer;
      color: ${(props) => props.theme.colors.white};

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

export const HamContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
  height: 30px;
  cursor: pointer;
`

export const WebContainer = styled.div`
  display: none;
  position: absolute;
  top: 5px;
  right: 20px;
  height: 30px;
  cursor: pointer;

  & object {
    display: block;
    height: 30px;
    transition: all 0.3s ease-in-out;

    &.non-active{
    opacity: 0;
  }

  &.active {
    opacity: 1;
  }
  }

  @media (max-width: 768px) {
      display: block;
  }
`

export const Hambuger = styled.div`
  display: none;
  width: 35px;
  height: 3px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.3s ease-in-out;

  &:after {
      content: "";
      position: absolute;
      width: 35px;
      height: 3px;
      background: ${(props) => props.theme.colors.white};
      border-radius: 5px;
      transition: all 0.3s ease-in-out;
      transform: translateY(20px);
  }

  &:before {
      content: "";
      position: absolute;
      width: 35px;
      height: 3px;
      background: ${(props) => props.theme.colors.white};
      border-radius: 5px;
      transition: all 0.3s ease-in-out;
      transform: translateY(10px);
  }

  &.non-active{
    opacity: 1;
  }

  &.active {
    opacity: 0;
  }

  @media (max-width: 768px) {
        display: block;
    }
`

export const Sidebar = styled.div`
    display: none;
    position: fixed;
    top: 45px;
    width: 50vw;
    min-width: 300px;
    height: 100vh;
    background: ${(props) => props.theme.colors.sidebar};
    flex-direction: column;
    font-weight: 700;
    transition: all 0.3s ease-in-out;

    & a {
      margin-inline-end: 0.75em;
      padding: 30px 30px;
      opacity: 1;

      & span {
        color: ${(props) => props.theme.colors.white};
      }
    }


    & object {
      position: absolute;
      right: 10px;
      bottom: 70px;
      width: 30%;
      min-width: 120px;
    }

    &.active {
      right: 0;
    }

    &.non-active {
      right: -60vw;

      @media (max-width: 600px) {
        right: -400px;
      }
    }

@media (max-width: 768px) {
      display: flex;
  }

`