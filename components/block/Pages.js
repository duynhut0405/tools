import React, { useState, useEffect } from 'react';
import { map } from 'lodash';
import Proptypes from 'prop-types';
import { getPagesByIdService } from '../../services/page';
import { useTranslation } from 'react-i18next';
const propTypes = {
  data: Proptypes.object.isRequired,
  type: Proptypes.string,
  id: Proptypes.number
};

function Pages({ data, type, id }) {
  // const [page] = useState(3);
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
  const { t } = useTranslation();
  // const listNews = slice(listPage, 0, page);
  if (type && type === '1') {
    return (
      <div className="container sec-tb block-page" id={id}>
        <div className="entry-head text-center">
          {data.title && <h2 className="ht">{data.title}</h2>}
        </div>
        <div className="list-5 row list-item">
          {map(listPage, item => (
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
                  <div className="desc line4">{item.meta_description}..</div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="pages">
          <ul className="page-numbers">
            <a className="btn lg" href="#">
              {t('view')}
            </a>
          </ul>
        </div>
      </div>
    );
  }
  if (type && type === '2') {
    return (
      <div className="container" id={id}>
        <section className="sec-tb  block-page block-type-2">
          <h2 className="ht styleht">{data.title}</h2>
          <div className="list-7 list-item row">
            {map(listPage, item => (
              <div className="col-md-6" key={item.newsId}>
                <a href={`/page/${item.slug}`} className="item item-inline-table style-colummb">
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
                    <div className="desc line4">{item.meta_description}..</div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          {/* <div className="pages">
            <ul className="page-numbers">
              <a className="btn lg" href="#">
              {t('view.viewall')}
              </a>
            </ul>
          </div> */}
        </section>
      </div>
    );
  }

  if (type && type === '3') {
    return (
      <section className="sec-tb" id={id}>
        <div className="container">
          <h2 className="ht text-center">{data.title}</h2>
          <div className="list-7 list-item row">
            {map(listPage, (values, index) => (
              <div key={index} className="col-md-6">
                <a href={`/page/${values.slug}`} className="item item-inline-table">
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
                </a>
              </div>
            ))}
          </div>
          <div className="tags">
            {map(data.listTag, (values, index) => (
              <a key={index} className="tag" href={`/page/${values.url}`}>
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
      <section className="sec-tb bg-gray" id={id}>
        <div className="container">
          <div className="max750"></div>
          <h2 className="ht text-center">{data.title}</h2>
          <ul className="cols-2 link2">
            {map(listPage, (values, index) => (
              <li key={index}>
                <a href={`/page/${values.url}`}>{values.name}</a>
              </li>
            ))}
          </ul>
          <div className="tags">
            {map(data.listTag, (values, index) => (
              <a key={index} className="tag" href={values.url}>
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
