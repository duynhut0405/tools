import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Proptypes from 'prop-types';

const propTypes = {
  question: Proptypes.string,
  answer: Proptypes.string,
  index: Proptypes.number
};

function QuestionItems({ question, answer, index }) {
  const [active, setAcive] = useState(false);

  useEffect(() => {
    if (index === 0) {
      setAcive(true);
    }
  }, []);

  return (
    <div className="accodion-tab accodion-1-1 ">
      <input
        id={`checkbox_${index}`}
        type="checkbox"
        checked={active}
        onClick={() => setAcive(!active)}
      />
      <label htmlFor={`checkbox_${index}`} className="accodion-title">
        <span>{question}</span>
        <span className="triangle">
          <i className="icon-plus"></i>
        </span>
      </label>
      <div className="accodion-content entry-content">
        <div className="inner">{ReactHtmlParser(answer)}</div>
      </div>
    </div>
  );
}

QuestionItems.propTypes = propTypes;

export default QuestionItems;
