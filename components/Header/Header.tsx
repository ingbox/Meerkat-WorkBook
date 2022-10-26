import type { NextPage } from 'next'
import { Nav, Logo,  NavMenu, Hambuger, HamContainer, WebContainer, Sidebar } from './style'
import {useState, useEffect} from 'react';

const Header: NextPage = () => {

  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    })
  },[])

  return (
    <Nav className = { scroll ? "trans" : "non-trans" }>
      <Logo src="/images/logo.png" alt="" />
        <NavMenu className = { scroll ? "trans" : "non-trans" }>
          <a href="https://7meerkat.com/cs" target="_blank">
            <span>모빌리티</span>
          </a>
          <a href="https://7meerkat.com/story" target="_blank">
            <span>라이프</span>
          </a>
          <a href="https://7meerkat.com/life" target="_blank">
            <span>세븐미어캣</span>
          </a>
          <a href="https://7meerkat.com/connect-person" target="_blank">
            <span>스토리</span>
          </a>
          <a href="https://7meerkat.com/mobility" target="_blank">
            <span>고객센터</span>
          </a>
        </NavMenu>
        <Sidebar className= { active ? "active" : "non-active"}>
          <a href="https://7meerkat.com/cs" target="_blank">
            <span>모빌리티</span>
          </a>
          <a href="https://7meerkat.com/story" target="_blank">
            <span>라이프</span>
          </a>
          <a href="https://7meerkat.com/life" target="_blank">
            <span>세븐미어캣</span>
          </a>
          <a href="https://7meerkat.com/connect-person" target="_blank">
            <span>스토리</span>
          </a>
          <a href="https://7meerkat.com/mobility" target="_blank">
            <span>고객센터</span>
          </a>
            <object data="images/happy_halloween.svg" type="image/svg+xml"/>
        </Sidebar>
      <WebContainer>
        <object className= { active ? "active" : "non-active"} data="images/spider-web.svg" type="image/svg+xml"/>
      </WebContainer>
      <HamContainer onClick={() => setActive(!active)}>
        <Hambuger className= { active ? "active" : "non-active"}/>
      </HamContainer>
    </Nav>
  )
}

export default Header