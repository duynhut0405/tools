import React, { useState, useEffect } from 'react';
import { map, slice } from 'lodash';
import Proptypes from 'prop-types';
import { getPagesByIdService } from '../../services/page';

const propTypes = {
  data: Proptypes.object.isRequired,
  type: Proptypes.func
};

function Pages({ data, type }) {
  const [page] = useState(3);
  const [listPage, setListPage] = useState([]);
  const getPageBlock = async () => {
    const ids = map(data.pages, values => values.value);
    const res = await getPagesByIdService(ids);
    if (res && res.status === 200) {
      setListPage(res.data);
    }
  };

  useEffect(() => {
    getPageBlock();
  }, []);

  const listNews = slice(listPage, 0, page);

  if (type && type === '1') {
    return (
      <div className="container sec-tb">
        <div className="entry-head text-center">
          <h2 className="ht">{data.title}</h2>
        </div>
        <div className="list-5 row list-item">
          {map(listNews, item => (
            <div className="col-md-4" key={item.newsId}>
              <a href={`/page/${item.slug}`} className="item ">
                <div className="img tRes_71">
                  <img
                    className="lazy-hidden"
                    data-lazy-type="image"
                    src={item.baseImage}
                    alt="icon"
                  />
                </div>
                <div className="divtext">
                  <h4 className="title">{item.name}</h4>
                  <div className="desc line4">{item.meta_description}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="pages">
          <ul className="page-numbers">
            <a className="btn lg" href="#">
              Xem tất cả
            </a>
          </ul>
        </div>
      </div>
    );
  }
  if (type && type === '2') {
    return (
      <div className="container">
        <section className="sec-tb">
          <h2 className="ht">{data.title}</h2>
          <div className="list-7  list-item row">
            {map(listNews, item => (
              <div className="col-md-6" key={item.newsId}>
                <a href="#" className="item item-inline-table">
                  <div className="post_content mb-3">
                    <div className="img">
                      <img
                        className="lazy-hidden"
                        data-lazy-type="image"
                        src={item.baseImage}
                        alt="icon"
                      />
                    </div>
                    <div className="divtext">
                      <h4 className="title line2">{item.name}</h4>
                      <div className="desc line4">{item.meta_description}</div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="pages">
            <ul className="page-numbers">
              <a className="btn lg" href="#">
                Xem tất cả
              </a>
            </ul>
          </div>
        </section>
      </div>
    );
  }
  if (type && type === '3') {
    return (
      <section className="sec-tb">
        <div className="container">
          <h2 className="ht text-center">{data.title}</h2>
          <div className="list-7  list-item row">
            {map(listNews, (values, index) => (
              <div key={index} className="col-md-6">
                <a href="#" className="item item-inline-table">
                  <div className="post_content mb-3">
                    <div className="img">
                      <img
                        className="lazy-hidden"
                        data-lazy-type="image"
                        src={values.baseImage}
                        alt="icon"
                      />
                    </div>
                    <div className="divtext">
                      <h4 className="title line2">{values.name}</h4>
                      <div className="desc line4">{values.meta_description}</div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="tags">
            {map(data.listTag, (values, index) => (
              <a key={index} className="tag" href="#">
                {values.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
  if (type && type === '4') {
    return (
      <section className="sec-tb bg-gray">
        <div className="container">
          <div className="max750"></div>
          <h2 className="ht text-center">{data.title}</h2>
          <ul className="cols-2 link2">
            {map(listNews, (values, index) => (
              <li key={index}>
                <a href="#">{values.name}</a>
              </li>
            ))}
          </ul>
          <div className="tags">
            {map(data.listTag, (values, index) => (
              <a key={index} className="tag" href="#">
                {values.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
Pages.propTypes = propTypes;

export default Pages;
