import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const propTypes = {
  data: PropTypes.any,
  optionWidth: PropTypes.string,
  id: PropTypes.number
};

function TablePayment({ data, id, optionWidth }) {
  console.log('data:', data)
  let padding = '';
  if (optionWidth === '2') {
    padding = 'sec-tb';
  } else if (optionWidth === '3') {
    padding = 'sec-t';
  } else if (optionWidth === '4') {
    padding = 'sec-b';
  } else {
    padding = 'sec-';
  }
  return (
    <section className={`${padding}`}>
      <div className="container">
        <div className="accodion accodion-2 accodion-1-3 ">
          {map(data.listCard, (items, index) => (
            <div key={index} className="accodion-tab ">
              <input type="checkbox" id={`chck_${id}_${index}`} />
              <label className="accodion-title h2" htmlFor={`chck_${id}_${index}`}>
                <span>{items.title}</span>
                <span className="triangle">
                  <i className="icon-plus"></i>
                </span>
              </label>
              <div className="accodion-content entry-content">{ReactHtmlParser(items.content)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
TablePayment.propTypes = propTypes;

export default TablePayment;
