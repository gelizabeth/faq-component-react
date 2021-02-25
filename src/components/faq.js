import React from 'react'
import "../Scss/_faq.scss";

const FAQ = ({ faq, id, onClick }) => {
    const toggle = () => {
        onClick(id);
    }
    return (
        <div id={id} className='faq-item'>
            <div className={`faq-item__question ${faq.open ? 'faq-item__question_open' : ''}`} onClick={toggle}>
            
                {faq.question}
                <i className={`arrow ${faq.open ? 'arrow_down' : ''}`}></i>
            </div>
            <div className={`faq-item__answer ${faq.open ? 'faq-item__answer_open' : ''}`}>{faq.answer}</div>
        </div>
    )
}

export default FAQ;
