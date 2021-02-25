import React, { useState } from 'react';
import FAQ from './faq';
import '../Scss/_faqList.scss';

const FaqList = ({ faqs }) => {
  const [faqItems, setfaqs] = useState(faqs);
  const toggleFAQ = index => {

    setfaqs(faqItems.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else faq.open = false;
      return faq;
    }));
  }
  return (
    <div className='faq'>
      <h1>FAQ </h1>
      <div className="faq__list">
      {faqItems.map((faq, i) => { return <FAQ faq={faq} id={i} key={i} onClick={toggleFAQ}></FAQ> })}
      </div>
      
    </div>
  )
}

export default FaqList;
