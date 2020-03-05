import React, { useState } from 'react';
import { map } from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';

const propTypes = {
  year: PropTypes.number,
  fileIcon: PropTypes.bool,
  isChecked: PropTypes.bool,
  data: PropTypes.array
};

function DowloadFile({ year, isChecked, fileIcon, data }) {
  const [checked, setChecked] = useState(isChecked);
  return (
    <div className="accodion-tab ">
      <input type="checkbox" id="chck_2" checked={checked} />
      <label className="accodion-title h2" onClick={() => setChecked(!checked)}>
        <span> {year} </span>
        <span className="triangle">
          <i className="icon-plus"></i>
        </span>
      </label>
      <div className="accodion-content">
        <div className="inner">
          <ul className="list-download">
            {map(data, item => {
              return (
                <li key={item.id}>
                  <span className="title">
                    <i className={fileIcon ? 'icon-t14' : 'icon-date-2'}></i>
                    {item.name}
                  </span>
                  <span className="data">{moment(item.createdAt).format('DD-MM-YYYY')}</span>
                  <span className="down">
                    <a href={item.urlFile}>
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
  );
}

DowloadFile.propTypes = propTypes;

export default DowloadFile;
