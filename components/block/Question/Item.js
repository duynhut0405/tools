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
    <div className="question_wapper mb-3">
      <div className={!active ? 'question_wapperTitle' : 'question_wapperTitle active'}>
        <div className="title_content container" onClick={() => setAcive(!active)}>
          <div className="icon">
            <div className="rectangle">{!active ? `+` : `-`}</div>
          </div>
          <div className="text">
            <p>{question}</p>
          </div>
        </div>
      </div>
      {active && <div className="answer container">{ReactHtmlParser(answer)}</div>}
    </div>
  );
}
QuestionItems.propTypes = propTypes;

export default QuestionItems;
