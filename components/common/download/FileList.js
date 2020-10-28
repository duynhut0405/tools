import React, { useState } from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getLang } from '../../../utils/cookie';

const propTypes = {
  year: PropTypes.string,
  fileIcon: PropTypes.bool,
  isChecked: PropTypes.bool,
  data: PropTypes.array,
  iconPlus: PropTypes.bool
};

function FileList({ year, isChecked, iconPlus, data }) {
  const [checked, setChecked] = useState(isChecked);
  const lang = getLang();
  return (
    <div className="accodion accodion-2">
      <div className="accodion-tab ">
        <input type="checkbox" id="chck_2" checked={checked} />
        <label className="accodion-title h2" onClick={() => setChecked(!checked)}>
          <span> {year} </span>
          {iconPlus && (
            <span className="triangle">
              <i className="icon-plus"></i>
            </span>
          )}
        </label>
        <div className="accodion-content">
          <div className="inner">
            <div className="row grid-space-60">
              <div className="col-md-12">
                <ul className="list-download ">
                  {map(data, (item, index) => {
                    if (lang != 'en') {
                      return (
                        <li>
                          <a
                            href={`${process.env.DOMAIN.substring(
                              0,
                              process.env.DOMAIN.length - 1
                            )}/uploads${item.urlFile}`}
                            download
                          >
                            <span className="date" style={{width: "10%",paddingRight: "5px", paddingLeft:"10px", fontSize:"14px"}}>{moment(item.createdAt).format('DD/MM/YYYY')}</span>
                            <span className="title">
                              <i className="icon-t14"></i> {item.name}
                            </span>
                            <span className="down">
                              <i className="icon-arrow-6 ib"></i>
                            </span>
                          </a>
                        </li>
                      );
                    } else {
                      return (
                        <li>
                          <a
                            href={ item.imageVideo != undefined & item.imageVideo != '' ? `${process.env.DOMAIN}uploads${item.imageVideo}` : `${process.env.DOMAIN.substring(
                              0,
                              process.env.DOMAIN.length - 1
                            )}/uploads${item.urlFile}`}
                            download
                          >
                            <span className="date" style={{width: "10%",paddingRight: "5px", paddingLeft:"10px", fontSize:"14px"}}>{moment(item.createdAt).format('DD/MM/YYYY')}</span>
                            <span className="title">
                              <i className="icon-t14"></i> {item.name}
                            </span>
                            <span className="down">
                              <i className="icon-arrow-6 ib"></i>
                            </span>
                          </a>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
              {/* <div className="col-md-12">
                <ul className="list-download ">
                  {map(data, (item, index) => {
                    if (index % 2 !== 0) {
                      return (
                        <li>
                          <a
                            href={`${process.env.DOMAIN.substring(
                              0,
                              process.env.DOMAIN.length - 1
                            )}/uploads${item.urlFile}`}
                            download
                          >
                            <span className="title">
                              <i className="icon-t14"></i> {item.name}
                            </span>
                            <span className="down">
                              <i className="icon-arrow-6 ib"></i>
                            </span>
                          </a>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

FileList.propTypes = propTypes;

export default FileList;
