import React, { useState } from 'react';
import { map } from 'lodash';
import Proptypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const propTypes = {
  data: Proptypes.array
};

function TablePayment({ data, id }) {
  return (
    <section className="sec-tb">
      <div className="container">
        <div className="accodion accodion-2 accodion-1-3 ">
          {map(data, (items, index) => (
            <div className="accodion-tab ">
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
