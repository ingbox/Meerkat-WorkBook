import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 45px;
  width: 100%;
  height: 70vh;
  background: ${(props) => props.theme.colors.silver};
  border: 2px solid ${(props) => props.theme.colors.meerkat};
  
  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    align-items: center;
  }
`;

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
  background: ${(props) => props.theme.colors.footer};
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: auto;
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
    
    width: 100px;
    p {
      font-size: 19px;
    }

    span {
      font-size: 5px;
    }
  }
`

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 45px;
  width: 100%;
  height: 40vh;
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

export const QnAContainer = styled.form`
  display: grid;
  grid-template-columns: [labels] auto [controls] 1fr;
  grid-auto-flow: row;
  grid-gap: .8em;

  input[type=text] {
    border: 0;
  }
  
  button {
    border: 0;
    padding: 10px 0;
    border-radius: 25px;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.header};
    font-weight: 500;
    grid-column: span 2;
  }

`

export const QuesContainer = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 15px;
  height: auto;
  
`