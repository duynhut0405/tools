import React, { useState } from 'react';
import moment from 'moment';
import { map } from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array,
  year: PropTypes.number,
  isChecked: PropTypes.func
};

function Question({ data, year, isChecked }) {
  const [isOpen, setIsOpen] = useState(isChecked);
  return (
    <div className="accodion accodion-1">
      <div className="accodion-tab ">
        <input type="checkbox" checked={isOpen} />
        <label className="accodion-title" onClick={() => setIsOpen(!isOpen)}>
          <span>{year}</span>
          <span className="triangle">
            <i className="icon-plus"></i>
          </span>
        </label>
        <div className="accodion-content entry-content">
          <div className="inner">
            <ul className="list-download">
              {map(data, items => {
                return (
                  <li>
                    <span className="title">
                      <i className="icon-t14"></i> {items.name}
                    </span>
                    <span className="data">{moment(items.createdAt).format('DD-MM-YYYY')}</span>
                    <span className="down">
                      <a href={items.urlFile} download>
                        <i className="icon-arrow-6 ib"></i>
                      </a>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

Question.propTypes = propTypes;

export default Question;
