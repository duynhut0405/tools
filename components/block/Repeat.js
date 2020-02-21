import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array
};

function Repeat({ data }) {
  return (
    <div className="eidtor_wapper">
      <p className="title">{data[0].title}</p>
      {map(data, (items, index) => {
        return (
          <div className="eidtor_content mb-5" key={index}>
            {ReactHtmlParser(items.description)}
          </div>
        );
      })}
    </div>
  );
}

Repeat.propTypes = propTypes;

export default Repeat;
