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
    <div className="accodion-tab ">
      <input type="checkbox" checked={active} />
      <label className="accodion-title" onClick={() => setAcive(!active)}>
        <span>{question}</span>
        <span className="triangle">
          <i className="icon-plus"></i>
        </span>
      </label>
      <div className="accodion-content entry-content">
        <div className="inner">
          <section className=" sec-tb ">
            <div className="container">
              <div className="table-responsive table table-full">{ReactHtmlParser(answer)}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

QuestionItems.propTypes = propTypes;

export default QuestionItems;
