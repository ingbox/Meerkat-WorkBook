import styled from "styled-components";

export const MainContainer = styled.div`
  padding-top: 45px;
  width: 100%;
  height: 70vh;
  background: ${(props) => props.theme.colors.header};
  
  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    align-items: center;
  }
`;
