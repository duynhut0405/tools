import React, { useState, useEffect } from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import TableItem from './Table/Tableitem';

const propTypes = {
  data: PropTypes.array,
  id: PropTypes.number,
  type: PropTypes.string,
  optionWidth: PropTypes.string
};

function Repeat({ data, type, id, optionWidth }) {
  const [listTable, setListTable] = useState([]);
  let padding = '';
  if (optionWidth === '2') {
    padding = 'sec-tb';
  } else if (optionWidth === '3') {
    padding = 'sec-t';
  } else if (optionWidth === '4') {
    padding = 'sec-b';
  } else {
    padding = 'sec-';
  }

  useEffect(() => {
    setListTable(data.listTable);
  });

  if (type === '1') {
    return (
      <section className={`${padding} table-${type}`} id={id}>
        <div className="container">
          <div className="entry-head text-center">
            <h2 className="ht ">{data.title}</h2>
          </div>
          {map(listTable, (items, index) => {
            return <div key={index}> {ReactHtmlParser(items.description)}</div>;
          })}
        </div>
      </section>
    );
  }

  const col = 12 / type;

  return (
    <section className={`${padding} table-${type}`} id={id}>
      <div className="container">
        <div className="entry-head text-center">
          <h2 className="ht ">{data.title}</h2>
        </div>

        <div className={type === '2' ? 'max950' : ''}>
          <div className="row list-item grid-space-20">
            {map(listTable, (item, index) => (
              <React.Fragment>
                <div className={`col-md-${col} `} key={index}>
                  <div className="widget-default">
                    <h4 className="widget-title">{item.header}</h4>
                    <div className="widget-content entry-content">
                      <div
                        className="toggleAutoHeight"
                        data-more="+ Xem thêm"
                        data-less="- Thu gọn"
                        data-i=""
                      >

                          <TableItem data={item.description} maxheight={Number(data.height)} />

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

Repeat.propTypes = propTypes;

export default Repeat;
