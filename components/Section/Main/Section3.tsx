import type { NextPage } from 'next'
import {useState, useEffect, useRef} from 'react';
import { Container, IntroContainer, TextContainer, InnerContainer, Carousel, Wrap, NextButton} from './Section3_style'

const Section3: NextPage = () => {

  const ref = useRef(null);

  const NextArrow = () => {
    return (
      <NextButton onClick = {() => ref?.current?.slickNext()}>&gt;</NextButton>
    )
  }

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    prevArrow: false,
    nextArrow: <NextArrow/>,
    
  };


  return (
    <Container>
      <IntroContainer style = {{background: "#ebeef2"}}>
        <TextContainer>
          <h2>인공지능 주차관제 소개글</h2>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum vel facere sequi officia animi mollitia hic deleniti officiis, sit itaque doloremque iure nobis dolores voluptates asperiores maxime tempore ad ipsa non tempora commodi quo ut. Autem consequuntur saepe eos quibusdam.</span>
        </TextContainer>
        <InnerContainer>
          <Carousel ref= {ref} {...settings}>
            <Wrap>
              <img src= "https://picsum.photos/400/300" alt='scale'/>
            </Wrap>
            <Wrap>
              <img src= "https://picsum.photos/400/300" alt='scale'/>
            </Wrap>
            <Wrap>
              <img src= "https://picsum.photos/400/300" alt='scale'/>
            </Wrap>
          </Carousel>
        </InnerContainer>
      </IntroContainer>
      <IntroContainer style = {{background: "#ced3db"}}>
        bonjour
      </IntroContainer>
    </Container>
  )
}


export default Section3