import React, { useState, useEffect } from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import TableItem from './Table/Tableitem';

const propTypes = {
  data: PropTypes.array,
  id: PropTypes.number
};

function Repeat({ data, type, id }) {
  const [listTable, setListTable] = useState([]);
  console.log(1);
  useEffect(() => {
    setListTable(data.listTable);
  });

  if (type === '1') {
    return (
      <section className=" sec-tb " id={id}>
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
      <section className=" sec-tb " id={id}>
        <div className="container">
          <div className="entry-head text-center">
            <h2 className="ht ">{data.title}</h2>
          </div>

          <div className="max950">
            <div className="row list-item">
              {map(listTable, (item, index) => (
                <React.Fragment>
                  <div className="col-md-6" key={index}>
                    <div className="widget-default">
                      <h4 className="widget-title">{item.header}</h4>
                      <div className="widget-content entry-content">
                        <div
                          className="toggleAutoHeight"
                          data-more="+ Xem thêm"
                          data-less="- Thu gọn"
                          data-i=""
                        >
                          <div className="wtgh">
                            <TableItem data={item.description} maxheight={Number(data.height)} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (type && type === '3') {
    return (
      <section className="sec-tb" id={id}>
        <div className="container">
          <div className="entry-head text-center">
            <h2 className="ht ">{data.title}</h2>
          </div>
          <div className="row list-item">
            {map(listTable, (item, index) => (
              <React.Fragment>
                <div className="col-md-4" key={index}>
                  <div className="widget-default">
                    <h4 className="widget-title">{item.header}</h4>
                    <div className="widget-content entry-content">
                      <div
                        className="toggleAutoHeight"
                        data-more="+ Xem thêm"
                        data-less="- Thu gọn"
                        data-i=""
                      >
                        <div className="wtgh">
                          <TableItem data={item.description} maxheight={200} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    );
  }
  if (type && type === '4') {
    return (
      <section className="sec-tb" id={id}>
        <div className="container">
          <div className="entry-head text-center">
            <h2 className="ht  ">{data.title}</h2>
          </div>
          <div className="row grid-space-20 list-item ">
            {map(listTable, (item, index) => (
              <React.Fragment>
                <div className="col-md-6 col-sm-6 col-lg-3" key={index}>
                  <div className="widget-default">
                    <h4 className="widget-title">{item.header}</h4>
                    <div className="widget-content entry-content">
                      <div
                        className="toggleAutoHeight"
                        data-more="+ Xem thêm"
                        data-less="- Thu gọn"
                        data-i=""
                      >
                        <div className="wtgh">
                          <TableItem data={item.description} maxheight={100} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

Repeat.propTypes = propTypes;

export default Repeat;
