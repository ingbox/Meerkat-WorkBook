import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  height: auto;
  background: ${(props) => props.theme.colors.footer};
  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 20px;
    height: auto;
    gap: 0;
  }
`
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  width: 30%;
  height: 100%;
  color: ${(props) => props.theme.colors.white};

  span:first-child {
    font-size: 18px;
    font-weight: 600;
  }
  span:nth-child(2){
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
  }
  @media (max-width: 768px) {
    display: inline;
    height: auto;
  }
`

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 16px;
  width: 45%;
  height: 100%;
  
  p {
    color: ${(props) => props.theme.colors.white};
    font-size: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    p {
      display: none;
    }
  }

`

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  a {
    position: relative;
    font-size: 13px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.white};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
    gap: 15px;
 
    a::after {
      content: '';
      position: absolute;
      border: 0.5px solid ${(props) => props.theme.colors.white};
      width: calc(100% - 20px);
      height: 0;
      left: 0;
      top: -10px;
      transform: scaleY(0.2);
      }
  }
`

export const TextContainer = styled.div`
  span {
    color: ${(props) => props.theme.colors.white};
    font-size: 11px;
  }

  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`

export const PlatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 16px;
  width: 20%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    padding-bottom: 20px;
  }
`

export const IconContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  height: auto;
  @media (max-width: 768px) {
    width: auto;
  }

  .logo {
    color: #3b434e;
  }

  .logo:first-child:hover {
    cursor: pointer;
    color: red;
  }
  .logo:nth-child(2):hover {
    cursor: pointer;
    color: green;
  }
`

export const PolicyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  white-space: nowrap;
  
  a {
    color: ${(props) => props.theme.colors.white};
    font-size: 12px;
  }

  @media (max-width: 768px) {
    width: auto;
    flex-direction: row;
    gap: 20px;
    padding-right: 20px;
  }
`
