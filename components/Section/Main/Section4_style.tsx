import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  @media (max-width: 1024px) {
    height: auto;
  }
`

export const NewsContainer = styled.div`
  display: grid;
  padding: 50px;
  height: 600px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 50px;
  border-radius: 10px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 100px;
    height: 1200px;
    gap: 50px;
  }
`

export const Wrapper = styled.div`
  position: relative;
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
  }
`

export const InnerContainer = styled.div`
  position: absolute;
  transform: translateY(-50%);
  width: 100%;
  height: auto;
`