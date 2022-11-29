import type { NextPage } from 'next'
import {useState, useEffect} from 'react';
import { Container, CarouselContainer, Carousel, Wrap, CateContainer, Wrapper } from './Section2_style'
import { CategoryData } from './Data';
import CategoryContent from './CategoryContent';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section2: NextPage = () => {

  const [num, setNum] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false)

  function randomNumberInRange(min: number, max: number) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  }

  const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }

  useEffect(() => {
      setNum(randomNumberInRange(1, 100));
      window.addEventListener("load", handleResize);
      window.addEventListener("resize", handleResize);
  }, []);
  
  function getUrl(i: number, isMobile: boolean) {
    if(isMobile){
      return "https://picsum.photos/id/" + (num + i) + "/1440/800"
    }
    else {
      return "https://picsum.photos/id/" + (num + i) + "/1440/250"
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    prevArrow: false,
    nextArrow: false
  };

  return (
    <Container>
      <h2>New</h2>
      <CarouselContainer>
        <Carousel {...settings}>
          <Wrap>
            <img src= {getUrl(0, isMobile)} alt='scale'/>
          </Wrap>
          <Wrap>
            <img src={getUrl(1, isMobile)} alt='scale'/>
          </Wrap>
          <Wrap>
            <img src={getUrl(2, isMobile)} alt='scale'/>
          </Wrap>
        </Carousel>
      </CarouselContainer>
      <h2>Categories</h2>
      <CateContainer>
        {CategoryData?.map((cate) => (
          <Wrapper key = {cate.id}>
            <CategoryContent video = {cate.video} defaultImage = {cate.imageURL} name = {cate.name}/>
          </Wrapper>
        ))}
      </CateContainer>

    </Container>
  )
}

export default Section2