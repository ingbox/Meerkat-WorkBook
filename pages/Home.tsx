import { NextPage } from 'next';
import React from 'react';
import Image from 'next/image'
import { MainContainer, IntroContainer, ContentContainer, Wrapper, InnerContainer, TextContainer, NewsContainer, NewsWrapper, OutroContainer } from '../styles/Home/style'
import { MeerkatData } from '../data/Data';


const Home: NextPage = () => {
  return ( 
    <>
    <MainContainer>
      <InnerContainer>
        <TextContainer>
          <h1>우리의 자동차 생활이</h1>
          <h1>스마트해 집니다</h1>
        </TextContainer>
        <span></span>
      </InnerContainer>
    </MainContainer>
    <IntroContainer>
      <ContentContainer>
            {MeerkatData?.map((data) => (
              <Wrapper key = {data.id}>
                    <Image src= {data.imageURL} alt = {data.name} layout = 'fill' objectFit='cover' width={ 500 } height = { 900 } priority/>
              </Wrapper>
            ))}
      </ContentContainer>
    </IntroContainer>
    <NewsContainer>
      <h2>언론 속의 세븐미어캣</h2>
      <ContentContainer>
      {MeerkatData?.map((data) => (
              <NewsWrapper key = {data.id}>
                    <Image src= {data.imageURL} alt = {data.name} layout = 'fill' objectFit='cover' width={ 600 } height = { 900 } priority/>
              </NewsWrapper>
        ))}
        </ContentContainer>
    </NewsContainer>
    <OutroContainer>
      <h2>세븐미어캣과 함께할 수 있는 다양한 제안을 기다립니다.</h2>
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
    </OutroContainer>
    </>
  )
}

export default Home