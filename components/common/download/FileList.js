import React, { useState } from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
  year: PropTypes.string,
  fileIcon: PropTypes.bool,
  isChecked: PropTypes.bool,
  data: PropTypes.array
};

function FileList({ year, isChecked, data }) {
  const [checked, setChecked] = useState(isChecked);
  return (
    <div className="accodion accodion-2">
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
            <div className="row grid-space-60">
              <div className="col-md-6">
                <ul className="list-download ">
                  {map(data, (item, index) => {
                    if (index % 2 === 0) {
                      return (
                        <li>
                          <span className="title">
                            <i className="icon-t14"></i> {item.name}
                          </span>
                          <span className="down">
                            <a href={item.urlFile} download>
                              <i className="icon-arrow-6 ib"></i>
                            </a>
                          </span>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-download ">
                  {map(data, (item, index) => {
                    if (index % 2 !== 0) {
                      return (
                        <li>
                          <span className="title">
                            <i className="icon-t14"></i> {item.name}
                          </span>
                          <span className="down">
                            <a href={item.urlFile} download>
                              <i className="icon-arrow-6 ib"></i>
                            </a>
                          </span>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

FileList.propTypes = propTypes;

export default FileList;