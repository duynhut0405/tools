import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Proptypes from 'prop-types';

const propTypes = {
  question: Proptypes.string,
  answer: Proptypes.string
};

function QuestionItems({ question, answer }) {
  const [active, setAcive] = useState(false);

  return (
    <div className="accodion accodion-1">
        <div className="accodion-tab question_wapper mb-3">
        <div className={!active ? 'question_wapperTitle' : 'question_wapperTitle active'} className="accodion-title">
        <div className="title_content container" onClick={() => setAcive(!active)}>
          <div className="rectangle">{!active ? <div className="icon-plus-2"/> : <div className="icon-minus-2"/>}</div>
          <div className="accodion-content entry-content">
            <div class="inner">
              <p>{question}</p>
            </div>
          </div> 
        </div>
      </div>
      {active && <div className="answer container">{ReactHtmlParser(answer)}</div>}
    </div>
    </div>
  );
}
QuestionItems.propTypes = propTypes;

export default QuestionItems;
