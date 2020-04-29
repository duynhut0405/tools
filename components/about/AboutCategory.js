import React from 'react';
import moment from 'moment';
import { map } from 'lodash';
import { useTranslation } from 'react-i18next';
import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import Link from 'next/link';

const propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
  categories: PropTypes.array
};

function AboutCategory({ data, categories }) {
  //   const [page, setPage] = useState(1);
  const { t } = useTranslation();

  return (
    <>
      <main id="main" className="sec-tb">
        <div className="container">
          {/* <h1 className="text-center">{t('page_about.title')}</h1> */}
          {/* <h1 className="text-center">{title}</h1> */}
          <div className=" sec-b filter-category text-center">
            <select
              className="select"
              onChange={event => {
                window.location.href = `/news/category/${event.target.value}`;
              }}
            >
              <option>{t('Select...')}</option>
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
                  <Link href="/news/[...slug]" as={`/news/${item.url}`}>
                    <a className="item efch-2 ef-img-l equal">
                      <div className="img tRes_71">
                        <img
                          className="lazyload"
                          data-src={`${process.env.DOMAIN}${item.base_image}`}
                          alt="images"
                        />
                      </div>
                      <div className="divtext">
                        <div className="date">{moment(item.created_at).format('DD/MM/YYYY')}</div>
                        <h4 className="title line2">{item.title}</h4>
                        <div className="desc line2">{item.shortDescription}</div>
                      </div>
                    </a>
                  </Link>
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

export default withTranslation('common')(AboutCategory);
