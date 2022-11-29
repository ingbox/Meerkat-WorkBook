import styled from "styled-components";
import Slider from "react-slick";

export const MainContainer = styled.div`

  width: 100%;
  height: auto;
  background: ${(props) => props.theme.colors.silver};
  border: 2px solid ${(props) => props.theme.colors.meerkat};
  margin: 0 auto;
  padding: 30px 0 30px 28px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: auto;
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

export const Carousel = styled(Slider)`
  position: relative;
  left: 30%;

  .slick-list {
    overflow: hidden;
  }

  .slick-slide {
    margin-right: 14px;
  }

  @media (max-width: 768px) {
    position: static;
  }

`

export const Wrap = styled.div`
  position: relative;
  vertical-align: top;
  cursor: pointer;
  img {
    margin: auto;
    border-radius: 25px;
  }
`

export const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  float: left;
  margin: 0 0 0 60px;

  p {
    font-size: 23px;
    font-weight: 700;
  }

  span {
    font-size: 16px;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    width: 100%;
    float: none;
    margin: 0 0 50px 0;
  }
`