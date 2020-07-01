import React from 'react';
import moment from 'moment';
import map from 'lodash/map';
import t from '../../translation';
import PropTypes from 'prop-types';
import { getLang } from '../../utils/cookie';
import { LinkNew } from '../common/link';

const propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
  categories: PropTypes.array
};

function AboutCategory({ data, categories }) {
  const lang = getLang();

  return (
    <>
      <main id="main" className="sec-tb">
        <div className="container">
          <div className=" sec-b filter-category text-center">
            <select
              className="select"
              onChange={event => {
                window.location.href =
                  lang === 'vi'
                    ? `/news/category/${event.target.value}`
                    : `/en/news/category/${event.target.value}`;
              }}
            >
              <option>{t('select')}</option>
              {map(categories, (value, index) => (
                <option key={index} value={value.slug}>
                  {value.name}
                </option>
              ))}
            </select>
          </div>
          <div className="list-5 row list-item">
            {map(data.news, item => {
              return (
                <div className="col-md-4" key={item.newsId}>
                  <LinkNew lang={lang} name={item.url}>
                    <a className="item efch-2 ef-img-l equal">
                      <div className="img tRes_71">
                        <img
                          className="lazyload"
                          data-src={
                            item.base_image === null
                              ? `/images/imgdefault.jpg`
                              : `${process.env.DOMAIN}${item.base_image}`
                          }
                          alt="images"
                        />
                      </div>
                      <div className="divtext">
                        <div className="date">{moment(item.created_at).format('DD/MM/YYYY')}</div>
                        <h4 className="title line2">{item.title}</h4>
                        <div className="desc line2">{item.shortDescription}</div>
                      </div>
                    </a>
                  </LinkNew>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

AboutCategory.propTypes = propTypes;

export default AboutCategory;
