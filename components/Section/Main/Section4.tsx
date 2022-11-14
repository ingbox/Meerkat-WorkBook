import type { NextPage } from 'next'
import {useState, useEffect, useRef} from 'react';
import { Container, NewsContainer, InnerContainer, Wrapper } from './Section4_style'
import { NewsData } from './Data';
import Image from 'next/image'


const Section4: NextPage = () => {

  return (
    <Container>
      <InnerContainer>
        <NewsContainer>
          {NewsData?.map((data) => (
            <Wrapper key = {data.id}>
                  <Image src= {data.imageURL} alt= {data.name} layout = 'fill'/>
            </Wrapper>
          ))}
        </NewsContainer>
      </InnerContainer>
    </Container>
  )
}


export default Section4