import React from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array
};

function File({ data }) {
  return (
    <div className="row grid-space-60">
      <div className="col-md-6">
        <ul className="list-download ">
          {map(data, (item, index) => {
            if (index % 2 === 0) {
              return (
                <li key={index}>
                  <span className="title">
                    <i className="icon-t14"></i> {item.name}
                  </span>
                  <span className="down">
                    <a
                      href={`${process.env.DOMAIN.substring(
                        0,
                        process.env.DOMAIN.length - 1
                      )}/uploads${item.urlFile}`}
                      download
                    >
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
                <li key={index}>
                  <span className="title">
                    <i className="icon-t14"></i> {item.name}
                  </span>
                  <span className="down">
                    <a
                      href={`${process.env.DOMAIN.substring(
                        0,
                        process.env.DOMAIN.length - 1
                      )}/uploads${item.urlFile}`}
                      download
                    >
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
  );
}

File.propTypes = propTypes;

export default File;
