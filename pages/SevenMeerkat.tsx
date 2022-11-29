import { NextPage } from 'next';
import React from 'react';
import { useState } from 'react';
import { MainContainer, IntroContainer, InnerContainer, MapContainer, TabContainer, TabMenu, TextContainer, SecondTextContainer, ThirdTextContainer } from '../styles/Sevenmeerkat/style';
import { Map, MapMarker } from 'react-kakao-maps-sdk'

interface propsType {
  index: number;
}

const RenderContent = (props: propsType) => {

  if(props.index === 0 ) {
  return (
    <>
      <IntroContainer>
        <TextContainer>
            <p>Moving Life Partner</p>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
            <span>facilis ab suscipit, adipisci aperiam incidunt dicta facere</span>
            <span>consequuntur. Libero pariatur aliquid omnis voluptates natus.</span>
        </TextContainer>
        <InnerContainer>
          <circle cx="90%" cy="70%" r="400" fill="#324352"></circle>
            {/* <text x ="200" y="100" fill="#fff">
            세븐미어캣은 더 좋은 일상을
            <tspan x="200" y="140">
            만들어주는 IT기업입니다.
            </tspan>
            </text> */}
       
        </InnerContainer>
        <SecondTextContainer>
            <p>
            세븐미어캣은 더 좋은 일상을
            </p>
            <p>
            만들어주는 IT기업입니다.
            </p>
        </SecondTextContainer>
        <ThirdTextContainer>
          <p>A</p>
          <p>B</p>
          <p>C</p>
        </ThirdTextContainer>
      </IntroContainer>
      <MainContainer>
        기업소개
      </MainContainer>
    </>
  )
  }
  else if (props.index === 1)
  {
    return (
      <>
        <MainContainer>
        </MainContainer>
      </>
    )
  }
  else if (props.index === 2)
  {
    return (
      <>
        <MainContainer>
          문의하기
        </MainContainer>
        <MainContainer>
        <p>오시는 길</p>
        <span>경기 시흥시 배곧2로 82</span>
        <MapContainer>
        <Map
          center={{ lat: 37.3662249004022, lng: 126.72488527178935 }}
          style={{ width: "100%", height: "360px" }}
          >
          <MapMarker position={{ lat: 37.3662249004022, lng: 126.72488527178935 }}>
          </MapMarker>
        </Map>
        </MapContainer>
       </MainContainer>
      </>
    )
  }
}

const Sevenmeerkat: NextPage = () => {

  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: '기업소개'},
    { name: '언론속의 세븐미어캣'},
    { name: 'Contact us'}
  ]

  const selectMenuHandler = (index: number) => {
    clickTab(index);
  };

  return (
    <div>
    <TabContainer>
      <span>
      채용
      </span>
      <TabMenu>
        {menuArr.map((el,index) => (
              <li className={index === currentTab ? "submenu focused" : "submenu" }
              key = {index}
              onClick={() => selectMenuHandler(index)}>{el.name}</li>
        ))}
      </TabMenu>
    </TabContainer>
    <RenderContent index={currentTab}/>
    </div>
  )
}

export default Sevenmeerkat