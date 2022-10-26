import type { NextPage } from 'next'
import { Container , CTA, Meerkat } from './Section1_style'
import {useState, useEffect} from 'react';

const Section1: NextPage = () => {

  const [ fix, setFix ] = useState(true);
  const [ rotate, setRotate ] = useState(0);
  const [ scale, setScale ] = useState(1);

  // 모바일에서는 scroll 양이 다름...
  function setFixed(){
    if (window.scrollY <= 1000) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll", () => {
      setFixed();
      setRotate(window.scrollY);
      setScale((Math.cos((window.scrollY / 7000) * 180 / Math.PI) + 1) /2);
    })
  },[])

  return (
    <div>
      <Container>
        <CTA>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut beatae quaerat incidunt voluptate tempora praesentium veritatis dolore. Ipsum, consequuntur dicta eligendi voluptatum corporis neque fuga obcaecati dolore alias et, voluptatem vero accusamus qui
        </CTA>
      </Container>
      <Container>
        <CTA>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut beatae quaerat incidunt voluptate tempora praesentium veritatis dolore. Ipsum, consequuntur dicta eligendi voluptatum corporis neque fuga obcaecati dolore alias et, voluptatem vero accusamus qui
        </CTA>
        <Meerkat style = {{transform: 'rotateZ(' + rotate + 'deg) scale('+ scale +')' }}id={fix ? 'stick' : 'non-stick'} src='/images/meerkat.gif'/>
      </Container>
    </div>
  )
}

export default Section1