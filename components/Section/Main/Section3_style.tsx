import styled from "styled-components";
import Slider from "react-slick";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  @media (max-width: 1024px) {
    height: auto;
  }
`

export const IntroContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`


export const TextContainer = styled.div`
  padding: 0 10%;
  width: 50%;

  & h2 {
    color: #555;
  }

  & span{
    color: #555;
    word-break: break-all;
  }

  @media (max-width: 1024px) {
    min-width: 100vw;
  }

`

export const InnerContainer = styled.div`
  display: flex;
  width: 50%;
  position: relative;
  overflow-x: hidden;

  &:after {
      content: "";
      top: 0;
      left: 600px;
      width: 40%;
      height: 100%;
      position: absolute;
      /* backdrop-filter: blur(2px); */
      background: linear-gradient(to right,
      rgba(235, 238, 242, 0) 0%,
      rgba(235, 238, 242, 0.4) 15%,
      rgba(235, 238, 242 , 0.7) 37.5%,
      rgba(235, 238, 242 , 0.95) 50%,
      rgba(235, 238, 242 , 1) 75%,
      rgba(235, 238, 242 , 1) 100%);
    }

    @media (max-width: 1024px) {
    min-width: 100vw;
  }
`

export const Carousel = styled(Slider)`
  width: 1010px;
  height: 100%;
  perspective: 150px;

  .slick-list {
    overflow: visible;
    position: relative;
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: white;
    }
  }

  li.slick-active button:before {
    color: white;
  }
  button {
    z-index: 1;
  }

  @media (max-width: 1024px) {
    width: 00vw;
    margin: 0;
  }
`
export const Wrap = styled.div`
  cursor: pointer;
  img {
    border-radius: 25px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }


`

export const NextButton = styled.button`
  position: absolute;
  top: calc(50% - 3rem);
  width: 0;
  height: 0;
  border: none;
  left: calc(500px);
  font-size: 5rem;
  font-weight: 100;
  color: white;
  background: transparent;
  cursor: pointer;
`