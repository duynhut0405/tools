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

  if (type === '5') {
    const col = 5;
    const [active, setAcive] = useState(true);
    return (
      <section className={`${padding} table-${type}`} id={id}>
        <div className="container">
          <div className="row list-item">
            <div className={`accodion-tab`}>
              <input
                id={`checkbox_${id}`}
                type="checkbox"
                checked={active}
                onClick={() => setAcive(!active)}
              />
              <label htmlFor={`checkbox_${id}`} className="accodion-title accodion-title-custom">
                <span className="title-plus-custom">{data.title}</span>
                <span className="triangle icon-plus-custom">
                  <i className="icon-plus"></i>
                </span>
              </label>

              <div className="accodion-content entry-content" style={{paddingTop: "20px"}}>
                
                <div className="row list-item grid-space-20">
                  {map(listTable, (item, index) => (
                    <React.Fragment>
                      <div className={`col-md-${col} `} key={index}>
                        <div className="widget-default" style={{backgroundColor: "#e0f0ff", WebkitBoxShadow: "none", boxShadow: "none"}}>
                          <div className="widget-content entry-content">
                            <div
                              className="toggleAutoHeight"
                              data-more="+ Xem thêm"
                              data-less="- Thu gọn"
                              data-i=""
                            >
                              <h3 style={{fontSize: "18px"}}>{item.header}</h3>
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
          </div>
        </div>
      </section>
    );
  }

  if (type === '6') {
    const col = 4;
    const [active, setAcive] = useState(true);
    return (
      <section className={`${padding} table-${type}`} id={id}>
        <div className="container">
          <div className="row list-item">
            <div className={`accodion-tab`}>
              <input
                id={`checkbox_${id}`}
                type="checkbox"
                checked={active}
                onClick={() => setAcive(!active)}
              />
              <label htmlFor={`checkbox_${id}`} className="accodion-title accodion-title-custom">
                <span className="title-plus-custom">{data.title}</span>
                <span className="triangle icon-plus-custom">
                  <i className="icon-plus"></i>
                </span>
              </label>

              <div className="accodion-content entry-content" style={{paddingTop: "20px"}}>
                
                <div className="row list-item grid-space-20">
                  {map(listTable, (item, index) => (
                    <React.Fragment>
                      <div className={`col-md-${col} `} key={index}>
                        <div className="widget-default" style={{backgroundColor: "#e0f0ff", WebkitBoxShadow: "none", boxShadow: "none"}}>
                          <div className="widget-content entry-content">
                            <div
                              className="toggleAutoHeight"
                              data-more="+ Xem thêm"
                              data-less="- Thu gọn"
                              data-i=""
                            >
                              <h3 style={{fontSize: "18px"}}>{item.header}</h3>
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
          </div>
        </div>
      </section>
    );
  }

  if (type === '7') {
    const col = 3;
    const [active, setAcive] = useState(true);
    return (
      <section className={`${padding} table-${type}`} id={id}>
        <div className="container">
          <div className="row list-item">
            <div className={`accodion-tab`}>
              <input
                id={`checkbox_${id}`}
                type="checkbox"
                checked={active}
                onClick={() => setAcive(!active)}
              />
              <label htmlFor={`checkbox_${id}`} className="accodion-title accodion-title-custom">
                <span className="title-plus-custom">{data.title}</span>
                <span className="triangle icon-plus-custom">
                  <i className="icon-plus"></i>
                </span>
              </label>

              <div className="accodion-content entry-content" style={{paddingTop: "20px"}}>
                <div className="row list-item grid-space-20">
                  {map(listTable, (item, index) => (
                    <React.Fragment>
                      <div className={`col-md-${col} `} key={index}>
                        <div className="widget-default" style={{backgroundColor: "#e0f0ff", WebkitBoxShadow: "none", boxShadow: "none"}}>
                          <div className="widget-content entry-content">
                            <div
                              className="toggleAutoHeight"
                              data-more="+ Xem thêm"
                              data-less="- Thu gọn"
                              data-i=""
                            >
                              <h3 style={{fontSize: "18px"}}>{item.header}</h3>
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
          </div>
        </div>
      </section>
    );
  }

  if (type === '8') {
    let col = data.length === 2 ? 6 : 4;
    if (data.length === 4) {
      col = 3;
    }
    const [active, setAcive] = useState(true);
    return (
      <section className={`${padding} table-${type}`} id={id}>
        <div className="container">
          <div className="row list-item">
            <div className={`accodion-tab`}>
              <input
                id={`checkbox_${id}`}
                type="checkbox"
                checked={active}
                onClick={() => setAcive(!active)}
              />
              <label htmlFor={`checkbox_${id}`} className="accodion-title accodion-title-custom">
                <span className="title-plus-custom">{data.title}</span>
                <span className="triangle icon-plus-custom">
                  <i className="icon-plus"></i>
                </span>
              </label>

              <div className="accodion-content entry-content" style={{paddingTop: "20px"}}>
                {active ? 
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
                  : null
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (type === '9') {
    const [active, setAcive] = useState(true);
    return (
      <section className={`${padding} table-${type}`} id={id}>
        <div className="container">
          <div className="row list-item">
            <div className={`accodion-tab`}>
              <input
                id={`checkbox_${id}`}
                type="checkbox"
                checked={active}
                onClick={() => setAcive(!active)}
              />
              <label htmlFor={`checkbox_${id}`} className="accodion-title accodion-title-custom">
                <span className="title-plus-custom">{data.title}</span>
                <span className="triangle icon-plus-custom">
                  <i className="icon-plus"></i>
                </span>
              </label>

              <div className="accodion-content entry-content" style={{paddingTop: "20px"}}>
                {active ? 
                  <div>
                    {map(listTable, (items, index) => {
                      return <div key={index}> {ReactHtmlParser(items.description)}</div>;
                    })}
                  </div> 
                  : null
                }
              </div>
            </div>
          </div>
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
