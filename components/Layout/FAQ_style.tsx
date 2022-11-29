import styled from "styled-components";

export const FAQ = styled.div`
  background-color:  ${(props) => props.theme.colors.white};
  margin: 15px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &.open {

  }
  
  &.close {

  }
`

export const FAQuestion = styled.div`
  font-size: 20px;
  /* padding-right: 80px; */
  transition: all 0.1s ease;
  font-size: 18px;
  font-weight: 500;
`

export const FAQAnswer = styled.div`

  font-size: 15px;
  &.open {
    max-height: 1000px;
    opacity: 1;
    padding: 10px 17px;
  }

  &.close {
    opacity: 0;
    max-height: 0;
    overflow-y: hidden;
    transition: all 0s ease;
  }
`