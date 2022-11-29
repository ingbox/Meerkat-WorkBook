import { Container, LogoContainer, NavContainer, PlatContainer, InnerContainer, TextContainer, IconContainer, PolicyContainer } from './Footer_style'
import { SiYoutube, SiNaver } from 'react-icons/si'
import Link from "next/link";

const Footer = () => {
  return (
    <Container>
      <LogoContainer>
        <span>7meerkat&nbsp;&nbsp;&nbsp;</span>
        <span>| Moving Life Partner</span>
      </LogoContainer>
      <NavContainer>
        <InnerContainer>
          <Link href={'/Mobility'}>
            <a target="_blank" rel="noopener noreferrer">
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
        </InnerContainer>
        <TextContainer>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minima mollitia earum vitae pariatur illo, dolore quibusdam, blanditiis voluptas rerum voluptatibus odio laboriosam magni nulla ex assumenda quaerat temporibus reprehenderit! Consequuntur velit alias esse, qui iusto blanditiis modi excepturi commodi.</span>
        </TextContainer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </NavContainer>
      <PlatContainer>
      <IconContainer>
        <SiYoutube className="logo" />
        <SiNaver className="logo"/>
      </IconContainer>
      <PolicyContainer>
        <a href="https://7meerkat.com/mobility" target="_blank" rel="noopener noreferrer">
            <span>개인정보보호정책</span>
        </a>
        <a href="https://7meerkat.com/mobility" target="_blank" rel="noopener noreferrer">
            <span>세븐미어캣 타임라인</span>
        </a>
        <a href="https://7meerkat.com/mobility" target="_blank" rel="noopener noreferrer">
            <span>이용약관</span>
        </a>
        {/* <a href="https://7meerkat.com/mobility" target="_blank">
            <span>몰라</span>
        </a> */}
      </PolicyContainer>
      </PlatContainer>
    </Container>
  )
}

export default Footer