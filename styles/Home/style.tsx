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

export const InnerContainer = styled.div`
  display: flex;
  width: calc(100% - 100px);
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  height: auto;
  color: ${(props) => props.theme.colors.white};
  margin-left: 100px;

  h1 {
    line-height: 50px;
  }

  span {

  }

  span:before {
    position: absolute;
    content: '＞';
    font-size: 15px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.header};
    top: 8px;
    right: 170px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.white};
    /* width: 25px;
    height: 25px; */
    padding: 5px 5px;
  }

  :after {
  position: absolute;
  left: 420px;
  top: 21px;
  content: '';
  border-bottom: 3px solid ${(props) => props.theme.colors.white};
  width: calc(100% - 600px);
  height: 0px;
  }

  :before {
    position: absolute;
    content: '모빌리티';
    color: solid ${(props) => props.theme.colors.white};
    top: 50px;
    left: calc(100% - 240px);
    font-weight: 700;
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    transform: none;
    margin-left: 0;

    :after {
      top: 150px;
      left: calc(50% - 150px);
      width: 300px;
      border-bottom: 3px solid ${(props) => props.theme.colors.white};
    }
    :before {
      font-size: 15px;
      top: 180px;
      left: calc(50% + 95px)
    }

    span:before {
      top: 137px;
      right: calc(50% - 162px);
    }
  }
`;

export const TextContainer = styled.div`
  min-width: 354px;
  @media (max-width: 768px) {
    min-width: 310px;
  }
`

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;

  background: ${(props) => props.theme.colors.intro};

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const ContentContainer = styled.div`
  display: grid;
  max-width: 1100px;
  gap: 50px;
  place-items: center;

  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-radius: 10px;

  @media (max-width: 768px) {
    min-width: 0;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`

export const Wrapper = styled.div`
  bottom: 40px;
  position: relative;
  background-color: rgba(249, 249, 249, 0.1);
  width: 215px;
  height: 300px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    /* border-color: rgba(249, 249, 249, 0.) */
  }
`
export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background: ${(props) => props.theme.colors.news};
  padding-bottom: 50px;
  gap: 50px;
  overflow-x: hidden;

  h2 {
    margin-top: 50px;
  }

  @media (max-width: 768px) {
    height: auto;
    
  }
`

export const NewsWrapper = styled.div`
  position: relative;
  background-color: rgba(249, 249, 249, 0.1);
  width: 215px;
  height: 300px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    /* border-color: rgba(249, 249, 249, 0.) */
  }
`

export const OutroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  width: 100%;
  height: 20vh;
  background: ${(props) => props.theme.colors.outro};
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 768px) {
    height: auto;
    padding: 30px 80px;
    h2 {
      /* word-break: keep-all; */
      font-size: 13px;
    }
    h4 {
      font-size: 10px;
    }
  }
`