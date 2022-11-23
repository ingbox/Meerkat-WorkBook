import { Nav, Logo,  NavMenu, Hambuger, HamContainer, WebContainer, Sidebar } from './Header_style'
import Link from "next/link";
import {useState, useEffect} from 'react';

const Header = () => {

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
          <Link href={'/Mobility'}>
            <a>
                <span>모빌리티</span>
            </a>
          </Link>
          <Link href={'/Home'}>
            <a>
              <span>라이프</span>
            </a>
          </Link>
          <Link href={'/Partner'}>
            <a>
              <span>파트너</span>
            </a>
          </Link>
          <Link href={'/SevenMeerkat'}>
            <a>
              <span>세븐미어캣</span>
            </a>
          </Link>
          <Link href={'/Recuit'}>
            <a>
              <span>채용</span>
            </a>
          </Link>
          <Link href={'/ClientService'}>
            <a>
              <span>고객센터</span>
            </a>
          </Link>
        </NavMenu>
        <Sidebar className= { active ? "active" : "non-active"}>
          <Link href={'/Mobility'}>
            <a>
              <span>모빌리티</span>
            </a>
          </Link>
          <Link href={'/Home'}>
            <a>
              <span>라이프</span>
            </a>
          </Link>
          <Link href={'/Partner'}>
            <a>
              <span>파트너</span>
            </a>
          </Link>
          <Link href={'/SevenMeerkat'}>
            <a>
              <span>세븐미어캣</span>
            </a>
          </Link>
          <Link href={'/Recuit'}>
            <a>
              <span>채용</span>
            </a>
          </Link>
          <Link href={'/ClientService'}>
            <a>
              <span>고객센터</span>
            </a>
          </Link>
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