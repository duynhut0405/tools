import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Proptypes from 'prop-types';

const propTypes = {
  question: Proptypes.string,
  answer: Proptypes.string,
  index: Proptypes.number,
  id: Proptypes.number
};

function QuestionItems({ question, answer, index, id }) {
  const [active, setAcive] = useState(false);

  useEffect(() => {
    if (id === 0) {
      setAcive(true);
    }
  }, []);

  return (
    <div className="accodion-tab">
      <input
        id={`checkbox_${index}`}
        type="checkbox"
        checked={active}
        onClick={() => setAcive(!active)}
      />
      <label htmlFor={`checkbox_${index}`} className="entry-head text-center block-question-index" style={{ marginBottom: "20px"}}>
        <h2 className="ht ">{question || ''}</h2>
        <span className="triangle">
          <i className="icon-plus"></i>
        </span>
      </label>
      <div className="accodion-content entry-content">
      <div className="inner-full" style={{padding:"30px", backgroundColor: "#F2F2F2", borderRadius: "8px"}}>{ReactHtmlParser(answer)}</div>
      </div>
    </div>

  );
}

QuestionItems.propTypes = propTypes;

export default QuestionItems;
