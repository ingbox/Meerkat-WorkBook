import type { GetStaticProps, NextPage } from 'next'
import {useState, useEffect} from 'react';
import Head from 'next/head'
import Header from '../components/Header/Header'
import Section1 from '../components/Section/Main/Section1'
import Section2 from '../components/Section/Main/Section2'
import Section3 from '../components/Section/Main/Section3'
import Section4 from '../components/Section/Main/Section4'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
      <Header/>
    </div>
  )
}


// getServersideProps 랑 getStaticProps는 SSR이므로 script content server에서 모두 랜더링된다음에 보내지기 때문에 느린 느낌 덜
// export const getStaticProps: GetStaticProps = async() => {
//   const apiUrl = "https://openapi.naver.com/v1/search/blog?query=세븐미어캣&display=5&sort=date"
//   const res = await fetch(apiUrl, {
//       method: 'GET',
//       headers: {
//           'Content-Type': 'application/json',
//           'X-Naver-Client-Id': process.env.NAVER_APP_CLIENT_ID,
//           'X-Naver-Client-Secret': process.env.NAVER_APP_CLIENT_SECRET
//       }
//   });
// console.log(res);
// const data = await res.json();
// console.log(data);
// console.log(data);

// const resp = await axios.get('https://blog.naver.com/7meerkat');
// const $ = cheerio.load(resp.data);
// const element = $('.p_post_top');
// console.log(element);
//   return {
//     props: {
//       data: "data"
//     }
//   };
// }


export default Home
