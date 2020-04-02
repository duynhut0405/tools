import React from 'react';
import Proptypes from 'prop-types';
import { map } from 'lodash';

import ReactHtmlParser from 'react-html-parser';

const propTypes = {
  data: Proptypes.object.isRequired,
  indexTab: Proptypes.number.isRequired
};
function CustomTabItem({ data, indexTab }) {
  return (
    <div className="accodion accodion-2 accodion-1-4">
      {map(data.listItemTab, (items, index) => (
        <div className="accodion-tab ">
          <input type="checkbox" id={`chck_${indexTab}_${index + 1}`} />
          <label className="accodion-title h2" htmlFor={`chck_${indexTab}_${index + 1}`}>
            <span>{`${index + 1}. ${items.title}`}</span>
            <span className="triangle">
              <i className="icon-plus"></i>
            </span>
          </label>
          <div className="accodion-content entry-content">{ReactHtmlParser(items.content)}</div>
        </div>
      ))}
    </div>
  );
}
CustomTabItem.propTypes = propTypes;

export default CustomTabItem;
