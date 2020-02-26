import React, { useState, useEffect } from 'react';
import { map, slice } from 'lodash';
import Proptypes from 'prop-types';
import { getPagesByIdService } from '../../services/page';

const propTypes = {
  data: Proptypes.object.isRequired,
  getPageBlock: Proptypes.func,
  type: Proptypes.func
};

function Pages({ data, type }) {
  const [page, setPage] = useState(3);
  const [active, setActive] = useState(false);
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
  console.log(listPage);
  const listNews = slice(listPage, 0, page);
  //   slice(data.news, 0, page)
  // useEffect(() => {
  //   if (listNews.length === listPages.length) {
  //     setActive(true);
  //   }
  // }, [page]);

  const showPage = () => {
    setActive(false);
    setPage(page + 3);
    if (active) {
      setPage(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (type && type === '1') {
    return (
      <div className="list-5 row list-item">
        <h2 className="ht">{data.title}</h2>

        {map(listNews, item => (
          <div className="col-md-4" key={item.newsId}>
            <div className="img tRes_71">
              <img className="lazy-hidden" data-lazy-type="image" src={item.baseImage} alt="icon" />
            </div>
            <div className="divtext">
              <h4 className="title">{item.name}</h4>
              <div className="desc line4">{item.meta_description}</div>
            </div>
          </div>
        ))}

        <div className="btn">
          <button onClick={() => showPage()}>{active === false ? 'Xem thêm' : 'Thu gọn'}</button>
        </div>
      </div>
    );
  }
  return (
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
      <div className="btn">
        <button onClick={() => showPage()}>{active === false ? 'Xem thêm' : 'Thu gọn'}</button>
      </div>
    </section>
  );
}
Pages.propTypes = propTypes;

export default Pages;