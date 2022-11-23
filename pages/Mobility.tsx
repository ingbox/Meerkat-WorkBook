import { NextPage } from 'next';
import React from 'react';
import { useState } from 'react';
import { MainContainer, TabContainer, TabMenu, IntroContainer, TextContainer } from '../styles/Mobility/style';

const Mobility: NextPage = () => {

  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: '모빌리티 소개'},
    { name: '집터'},
    { name: '일터'},
    { name: '놀이터'}
  ]

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
          모빌리티 소개 1
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
              <li className={index === currentTab ? "submenu focused" : "submenu" }
              onClick={() => selectMenuHandler(index)}>{el.name}</li>
        ))}
      </TabMenu>
    </TabContainer>
    <RenderContent/>
    </div>
  )
}





export default Mobility