import React, { useState } from 'react';
import { map } from 'lodash';
import Proptypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const propTypes = {
  data: Proptypes.array
};

function TablePayment({ data }) {
  const [active, setActive] = useState(false);
  return (
    <section className="sec-tb">
      <div className="container">
        <div className="accodion accodion-2">
          <div className="accodion-tab ">
            <input type="radio" checked={active} />
            <label className="accodion-title h2" onClick={() => setActive(!active)}>
              <span> {data[0].title}</span>
              <span className="triangle">
                <i className="icon-plus"></i>
              </span>
            </label>
            <div className="accodion-content entry-content">
              <div className="inner">
                {ReactHtmlParser(data[0].description)}
                <h3 className="cl7">{data[0].note_2}</h3>
                <div className="table-responsive">
                  <table className="table-full table-card table-cen">
                    <tbody>
                      <tr>
                        <th>Nhãn hàng</th>
                        <th>Kỳ hạn</th>
                        <th>Địa chỉ áp dụng</th>
                        <th>Sản phẩm áp dụng</th>
                      </tr>
                      <React.Fragment>
                        {map(data, (items, index) => (
                          <tr>
                            <td>
                              <img
                                className=" loaded loaded"
                                data-lazy-type="image"
                                src={items.image}
                              />
                              <p className="b mg-0">{items.note_3}</p>
                              <a href="#" className="cl1">
                                {items.url}
                              </a>
                            </td>
                            <td>
                              <span className="b">{items.date}</span>
                            </td>
                            <td>{items.location}</td>
                            <td>{items.applicable_products}</td>
                          </tr>
                        ))}
                      </React.Fragment>
                    </tbody>
                  </table>
                </div>
                {/* <div className="pages">
                  <ul className="page-numbers">
                    <li>
                      <a className="prev page-numbers" href="#">
                        <i className="icon-arrow-2 ix"></i>
                      </a>
                    </li>
                    <li>
                      <span aria-current="page" className="page-numbers current">
                        1
                      </span>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        2
                      </a>
                    </li>
                    <li>
                      <span className="page-numbers">...</span>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        8
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        9
                      </a>
                    </li>
                    <li>
                      <a className="next page-numbers" href="#">
                        <i className="icon-arrow-2"></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
TablePayment.propTypes = propTypes;

export default TablePayment;
