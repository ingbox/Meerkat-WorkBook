import styled from "styled-components";
import Slider from "react-slick";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.colors.darkGrey};
  padding-top: 15px;

  & h2 {
    color: ${(props) => props.theme.colors.white};
    margin-left: 25px;
  }
  overflow: hidden;
`

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: calc(100vh - 70px); */
  padding: 0 calc(3.5vw - 5px);
  position: relative;
  overflow-x: hidden;
`

export const Wrap = styled.div`
  cursor: pointer;
  img {
    margin: auto;
    border: 4px solid transparent;
    width: 100%;
    /* height: 200px; */
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`

export const Carousel = styled(Slider)`
  width: 100%;
  perspective: 150px;

  .slick-list {
    overflow: visible;
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
  .slick-dots {
    bottom: 25px;
    text-align: center;
  }
`

export const CateContainer = styled.div`
  display: grid;
  padding: 0px 25px 0 25px;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 25px;
  border-radius: 10px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

export const Wrapper = styled.div`

  border: 3px solid rgba(249, 249, 249, 0.1);
  background-color: rgba(249, 249, 249, 0.1);
  img {
    background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
    border-radius: 10px;
  }
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    transform: scale(1.05);
    /* border-color: rgba(249, 249, 249, 0.) */
  }
`