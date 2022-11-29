import { NextPage } from 'next';
import React from 'react';
import Image from 'next/image'
import { useState } from 'react';
import { MainContainer, MainTextContainer, TabContainer, TabMenu, IntroContainer, TextContainer, Carousel, Wrap } from '../styles/Mobility/style';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Mobility: NextPage = () => {

  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: '모빌리티 소개'},
    { name: '집터'},
    { name: '일터'},
    { name: '놀이터'}
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true
  };


  const RenderContent = () => {

    if(currentTab === 0 ) {
    return (
      <>
        <IntroContainer>
          <TextContainer>
            <p>Last Stop, Last Care</p>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
            <span>facilis ab suscipit, adipisci aperiam incidunt dicta facere</span>
            <span>consequuntur. Libero pariatur aliquid omnis voluptates natus.</span>
          </TextContainer>
        </IntroContainer>
        <MainContainer>
            <MainTextContainer>
              <p>인공지능 스마트 주차관제 시스템</p>
              <span>인공지능이 탑재된 주차관제 시스템을 기반으로</span>
              <span>이동생활의 편의를 느껴보세요.</span>
            </MainTextContainer>
            <Carousel {...settings}>
              <Wrap>
                <Image src= 'https://picsum.photos/id/1/250/250' width={ 250 } height = { 250 } priority/>
              </Wrap>
              <Wrap>
                <Image src= 'https://picsum.photos/id/2/250/250' width={ 250 } height = { 250 } priority/>
              </Wrap>
              <Wrap>
                <Image src= 'https://picsum.photos/id/3/250/250' width={ 250 } height = { 250 } priority/>
              </Wrap>
            </Carousel>
        </MainContainer>
        <MainContainer>
          모빌리티 소개 2
        </MainContainer>
      </>
    )
    }
    else if (currentTab === 1)
    {
      return (
        <>
          <MainContainer>
            집터 1
          </MainContainer>
          <MainContainer>
            집터 2
          </MainContainer>
        </>
      )
    }
    else if (currentTab === 2)
    {
      return (
        <>
          <MainContainer>
            일터 1
          </MainContainer>
          <MainContainer>
            일터 2
          </MainContainer>
        </>
      )
    }
    else if (currentTab === 3)
    {
      return (
        <>
          <MainContainer>
            놀이터 1
          </MainContainer>
          <MainContainer>
            놀이터 2
          </MainContainer>
        </>
      )
    }
  }

  const selectMenuHandler = (index: number) => {
    clickTab(index);
  };

  return (
    <div>
    <TabContainer>
      <span>
      모빌리티
      </span>
      <TabMenu>
        {menuArr.map((el,index) => (
              <li key = {index} className={index === currentTab ? "submenu focused" : "submenu" }
              onClick={() => selectMenuHandler(index)}>{el.name}</li>
        ))}
      </TabMenu>
    </TabContainer>
    <RenderContent/>
    </div>
  )
}





export default Mobility