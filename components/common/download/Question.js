import React, { useState } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  isChecked: PropTypes.func
};

function Question({ question, answer, isChecked }) {
  const [isOpen, setIsOpen] = useState(isChecked);
  return (
    <div className="container">
      <div className="accodion accodion-1">
        <div className="accodion-tab" onClick={() => setIsOpen(!isOpen)}>
          <input type="checkbox" checked={isOpen} />
          <label className="accodion-title">
            <span>{question}</span>
            <span className="triangle">
              <i className="icon-plus"></i>
            </span>
          </label>
          <div className="accodion-content entry-content">
            <div className="inner">{answer}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Question.propTypes = propTypes;

export default Question;
