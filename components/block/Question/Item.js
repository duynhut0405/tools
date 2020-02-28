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
      <div className="accodion-tab ">
        <input type="checkbox" id="chck_1_"/>
        <label className="accodion-title" for="chck_1_">
          <span>{question}</span>
          <span className="triangle" >
            <i className="icon-plus"></i>
          </span>
        </label>
        <div className="accodion-content entry-content" >
          <div className="inner">
            {ReactHtmlParser(answer)}
          </div>
        </div>
      </div>
    </div>

  );
}
QuestionItems.propTypes = propTypes;

export default QuestionItems;
