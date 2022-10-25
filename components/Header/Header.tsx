import type { NextPage } from 'next'
import { Nav, Logo,  NavMenu } from './style'

const Header: NextPage = () => {
  return (
    <Nav>
      <Logo src="/images/logo.png" alt="" />
      <NavMenu>
        <a>
          <span>모빌리티</span>
        </a>
        <a>
          <span>라이프</span>
        </a>
        <a>
          <span>세븐미어캣</span>
        </a>
        <a>
          <span>스토리</span>
        </a>
        <a>
          <span>고객센터</span>
        </a>
      </NavMenu>
    </Nav>
  )
}

export default Header