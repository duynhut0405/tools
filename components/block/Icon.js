import React from 'react';
import { map } from 'lodash';
import Proptypes from 'prop-types';

const propTypes = {
  data: Proptypes.array
};

function Icon({ data }) {
  return (
    <div className="mutile_icon">
      {data !== null && <p className="title">{data[0].title || ''}</p>}
      <div className="row">
        {map(data, (items, index) => {
          return (
            <div className={`col-sm-${data[0].type} mb-5`} key={index}>
              <div className="icon_items">
                <div className="icon">
                  <a href={items.url}>
                    <img src={items.image} alt="icon" className="mb-3" />
                  </a>
                </div>
                <div className="icon_title">
                  <a href={items.url}>
                    <p>{items.note_1}</p>
                  </a>
                </div>
                <div className="icon_content">
                  <p className="text_content">{items.note_2}</p>
                  <p className="content_sub">{items.note_3}</p>
                </div>
                <div className="icon_button">
                  <a href={items.url}>{items.text_action}</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Icon.propTypes = propTypes;

export default Icon;
