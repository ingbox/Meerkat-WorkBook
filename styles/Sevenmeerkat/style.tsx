import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 45px;
  width: 100%;
  height: 70vh;
  background: ${(props) => props.theme.colors.news};
  gap: 10px;

  p {
    font-size: 23px;
    font-weight: 600;
    margin: 0;
  }

  span {
    font-size: 15px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    align-items: center;
  }
`;

export const MapContainer = styled.div`
  width: 50%;
  height: auto;
  border-radius: 20px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    border-radius: 0;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  width: 100%;
  height: auto;
  background: ${(props) => props.theme.colors.header};
  gap: 40px;

  span {
    font-size: 30px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.white};
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 40vh;
    align-items: center;
    
    span {
      font-size: 20px;
    }
  }
`;

export const TabMenu = styled.div`
  display: flex;
  gap: 30px;

  li {
    list-style: none;
    color:  ${(props) => props.theme.colors.white};
    padding: 5px 10px;
    border: 2px solid ${(props) => props.theme.colors.white};
    border-radius: 20px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
  }

  li.focused {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.header};
  }

  @media (max-width: 768px) {

    gap: 10px;
    li {
      font-size: 13px;
    }
  }
`

export const IntroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background: ${(props) => props.theme.colors.footer};
  `

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding-top: 50px;
  color: ${(props) => props.theme.colors.white};
  white-space: nowrap;

  p {
    font-size: 30px;
    font-weight: 500;
  }

  span {
    font-size: 13px;
    text-align: center;
    background: ${(props) => props.theme.colors.highlight};
    border-radius: 20px;
    margin-bottom: 10px;
    padding: 0 10px;
    /* line-height: px; */
  }

  @media (max-width: 768px) {
    
    p {
      font-size: 19px;
    }

    span {
      font-size: 5px;
    }
  }
`

export const InnerContainer = styled.svg`
  width: 100%;
  height: 600px;

  text {
    font-size: 30px;
  }
`

export const SecondTextContainer = styled.div`
  position: absolute;
  left: 200px;
  top: 300px;
  color: ${(props) => props.theme.colors.white};
  white-space: nowrap;

  p {
    margin: 5px;
    font-size: 30px;
  }

  @media (max-width: 768px) {
   left: 50%;
   transform: translateX(-50%);
  }

`

export const ThirdTextContainer = styled.div`
   position: absolute;
   display: flex;
   left: 215px;
   top: 500px;
   gap: 100px;

   p {
    color:  ${(props) => props.theme.colors.white};
   }

   @media (max-width: 768px) {
   left: 50%;
   transform: translateX(-50%);
  }
`