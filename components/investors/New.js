import React, { useEffect } from 'react';
import { map } from 'lodash';
import moment from 'moment';
import { InvestorsActions } from '../../store/actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  data: PropTypes.array,
  getNews: PropTypes.func
};

function News({ data, getNews }) {
  useEffect(() => {
    getNews(60052);
  }, [getNews]);

  return (
    <section className="sec-tb">
      <div className="container">
        <div className="list-5 row list-item">
          {map(data, (item, index) => {
            if (index < 2) {
              return (
                <div className="col-md-4" key={index}>
                  <a href={`/news/${item.url}`} className="item efch-2 ef-img-l ">
                    <div className="img tRes_71">
                      <img
                        className=" loaded loaded"
                        data-lazy-type="image"
                        data-lazy-src={item.base_image}
                        src={item.base_image}
                      />
                    </div>
                    <div className="divtext">
                      <div className="date">{moment(item.created_at).format('DD-MM-YYYY')}</div>
                      <h4 className="title line2">{item.title}</h4>
                      <div className="desc line2">{item.shortDescription}</div>
                    </div>
                  </a>
                </div>
              );
            }
            return null;
          })}
          <div className="col-md-4">
            <div className="widget-ndt">
              <div>
                <a href="./">
                  <img height="50" src="/static/images/logo-blue.svg" alt="" />
                </a>
              </div>

              <div className="numbs">
                <span className="t1">
                  <i className="icon-t13"></i> 20,900
                </span>
                <span className="t2">
                  +100 <br />
                  +0.2%
                </span>
              </div>

              <p className="desc">Ngày cập nhật 27/02/2020</p>

              <ul className="list">
                <li>
                  <span className="t1">Sàn</span>{' '}
                  <span className="t2">
                    HOSE <span className="t3">(MBB)</span>{' '}
                  </span>
                </li>
                <li>
                  <span className="t1">KLGD</span>{' '}
                  <span className="t2">
                    722.680 <span className="t3">(CP)</span>{' '}
                  </span>
                </li>
                <li>
                  <span className="t1">GTGD</span>{' '}
                  <span className="t2">
                    33.862,00 <span className="t3">(Triệu VND)</span>{' '}
                  </span>
                </li>
                <li>
                  <span className="t1">Vốn hoá</span>{' '}
                  <span className="t2">
                    189.437,05 <span className="t3">(Tỷ VND)</span>{' '}
                  </span>
                </li>
                <li>
                  <span className="t1">KLCP</span>{' '}
                  <span className="t2">
                    4.022.018.040 <span className="t3">(CP)</span>{' '}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="list-5 row list-item">
          {map(data, (item, index) => {
            if (index >= 2) {
              return (
                <div className="col-md-3" key={index}>
                  <a href={`/news/${item.url}`} className="item efch-3 ef-img-l ">
                    <div className="divtext">
                      <div className="date">{moment(item.created_at).format('DD-MM-YYYY')}</div>
                      <h4 className="title line2">{item.title}</h4>
                      <div className="desc line3">{item.shortDescription}</div>
                    </div>
                  </a>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = state => {
  return {
    data: state.investorsReducer.listNewInvestor
  };
};

const mapDispatchToProps = {
  getNews: InvestorsActions.getNewInvestorAction
};

News.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(News);
