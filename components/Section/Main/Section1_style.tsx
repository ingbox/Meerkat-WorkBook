import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url('/images/xp.jpg');
  position: relative;


  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100vh;
    background: ${(props) => props.theme.colors.darkGrey};
    opacity: 0.5;
  }

`

export const CTA = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  font-weight: 900;
  color: white;
  word-break: break-all;
  padding: 0 50px;
  z-index: 10;
  overflow:hidden;


  @media (max-width: 650px) {
    width: 100%;
    align-items: center;
  }
`

export const Meerkat = styled.img`

/* transform-origin: 50% 50%; */

&#stick {
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 100;
}
&#non-stick {
  position: absolute;
  bottom: 220px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 100;
}
`