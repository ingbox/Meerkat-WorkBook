import React from 'react'
import { FAQ, FAQuestion, FAQAnswer} from './FAQ_style'
import { questionListType } from "../../types/FAQType";

type FAQProps = {
  faq: questionListType,
  index: number,
  toggleFAQ: (index: number) => void;
}

const FAQS = ({faq, index, toggleFAQ} : FAQProps) => {
  return (
    <FAQ className={faq.open ? "open" : "close"} key={index} onClick={() => toggleFAQ(index)}>
      <FAQuestion>
        {faq.question}
      </FAQuestion>
      <FAQAnswer className={faq.open ? "open" : "close"}>
        {faq.answer}
      </FAQAnswer>
    </FAQ>
  )

}

export default FAQS