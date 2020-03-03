import React, { useState, useEffect } from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const propTypes = {
  data: PropTypes.array
};

function Repeat({ data, type }) {
  const [listTable, setListTable] = useState([]);

  useEffect(() => {
    setListTable(data.listTable);
  });

  if (type === '1') {
    return (
      <section className=" sec-tb ">
        <div className="container">
          <div className="table-responsive table table-full">
            {map(listTable, (items, index) => {
              return ReactHtmlParser(items.description);
            })}
          </div>
        </div>
      </section>
    );
  }
  if (type && type === '2') {
    return (
      <section className=" sec-tb ">
        <div className="container">
          <div className="max950">
            <div className="row list-item">
              {map(listTable, (items, index) => (
                <div key={index} className="col-md-6">
                  <div className="widget-default table ">{ReactHtmlParser(items.description)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (type && type === '3') {
    return (
      <section className=" sec-tb ">
        <div className="container">
          <div className="max950">
            <div className="row list-item">
              {map(listTable, (items, index) => (
                <div key={index} className="col-md-4">
                  <div className="widget-default table ">{ReactHtmlParser(items.description)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (type && type === '4') {
    return (
      <section className=" sec-tb ">
        <div className="container">
          <div className="max950">
            <div className="row list-item">
              <div className="row grid-space-20 list-item ">
                {map(listTable, (items, index) => (
                  <div key={index} className="col-md-6 col-sm-6 col-lg-3">
                    <div className="widget-default table ">
                      {ReactHtmlParser(items.description)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Repeat.propTypes = propTypes;

export default Repeat;
