import React from 'react';
import questions from '../../assets/questions.png'
const Questions = () => {
    return (
        <div id="faq">
          <p className="sectionHeader" class='faq'>Questions</p>
          <img id="questionImage" src={questions}/>
          How does it work?
        </div>
    );
};

export default Questions;