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

  useEffect(() => {
    setListTable(data.listTable);
  });

  if (type === '1') {
    return (
      <section className=" sec-tb " id={id}>
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
  }else {
    const count=0;
    const col = 12/type;
    return (
      <section className=" sec-tb " id={id}>
        <div className="container">
          <div className="entry-head text-center">
            <h2 className="ht ">{data.title}</h2>
          </div>
          
          <div className="max950_">
            <div className="row list-item grid-space-20">

              {map(listTable, (item, index) => (
                <React.Fragment>
                  <div className={`col-md-${col} ${map.length}`} key={index}>
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


}

Repeat.propTypes = propTypes;

export default Repeat;
