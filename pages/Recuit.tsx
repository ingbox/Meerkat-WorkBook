import { NextPage } from 'next';
import React from 'react';
import { MainContainer, TabContainer, TabMenu, QnAContainer, QuesContainer, IntroContainer, TextContainer } from '../styles/Recuit/style';
import { useState } from 'react';
import FAQS from '../components/Layout/FAQS'
import { questionListType } from "../types/FAQType";

interface propsType {
  index: number;
}

const RenderContent = (props: propsType) => {

  const [values, setValues] = useState({
    title: "",
    contents: "",
  })

  const questionList: questionListType[] = [
    {
      question: "Q. [일반문의] 세븐미어캣 주차시스템을 도입하면, 어떤 서비스를 받을 수 있나요?",
      answer: "서비스",
      open: false
    },
    {
      question: "Q. [일반문의] 세븐미어캣 주차시스템을 도입하면, 어떤 서비스를 받을 수 없나요?",
      answer: "서비스2",
      open: false
    }
  ]

  const [faqs, setfaqs] = useState(questionList);

  const toggleFAQ = (index: number) => { 
    setfaqs(faqs.map((faq, i) => {
      if(i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }
      return faq;
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(JSON.stringify(values, null, 2))
  }


  if(props.index === 0 ) {
  return (
    <>
      <MainContainer>
        <QuesContainer>
        {
            faqs.map((faq, index) => (
             <FAQS key = {index} faq={faq} index={index} toggleFAQ= {toggleFAQ}></FAQS>
            ))
          }
        </QuesContainer>
      </MainContainer>
      <MainContainer>
        FAQ
      </MainContainer>
    </>
  )
  }
  else if (props.index === 1)
  {
    return (
      <>
        <MainContainer>
        <QnAContainer onSubmit={handleSubmit}>
          <label>제목 *</label>
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
          />
           <label>내용 *</label>
          <input
            type="text"
            name="contents"
            value={values.contents}
            onChange={handleChange}
          />
          <button type="submit">등록하기</button>
        </QnAContainer>
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
          문의하기
        </MainContainer>
      </>
    )
  }
}


const Recuit: NextPage = () => {

  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: 'FAQ'},
    { name: 'QnA'},
    { name: '문의하기'}
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

export default Recuit