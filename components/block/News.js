import React, { useState, useEffect } from 'react';
import { map, slice } from 'lodash';
import moment from 'moment';
import Proptypes from 'prop-types';
import { getNewByIdService } from '../../services/news';
import { getCategoryByIdService } from '../../services/category';
import { getLang } from '../../utils/cookie';
import t from '../../translation';
import { LinkNew, LinkCategory } from '../common/link';
import ShowMoreText from 'react-show-more-text';
import Carousel from 'react-multi-carousel';

const propTypes = {
  data: Proptypes.object.isRequired,
  getCategoryPage: Proptypes.func,
  type: Proptypes.string,
  id: Proptypes.number,
  optionWidth: Proptypes.string
};

function News({ data, type, id, optionWidth }) {
  const [page, setPage] = useState(3);
  const [active, setActive] = useState(false);
  const [listCategory, setListCategory] = useState([]);
  const [slugCategory, setSlugCategory] = useState('');
  const listNews = slice(listCategory, 0, 2);
  const listNewsTabs = slice(listCategory, 2, 5);
  const [refCarousel, setRefCarousel] = useState(null);
  const lang = getLang();

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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 2
    }
  };
  const getCategoryById = async () => {
    const res = await getCategoryByIdService(Number(data.category.value));
    if (res && res.status === 200) {
      setSlugCategory(res.data.slug);
    }
  };

  const getCategoryPage = async () => {
    const idItems = map(data.news, item => item.newsId);
    const res = await getNewByIdService(idItems, data.category.value, Number(data.limit));
    if (res && res.status === 200) {
      setListCategory(res.data);
    }
  };

  useEffect(() => {
    getCategoryPage();
    getCategoryById();
  }, []);

  const showPage = () => {
    setActive(false);
    setPage(page + 3);
    if (active) {
      setPage(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  if (type === '1') {
    return (
      <div className="post_block mb-5 pt-4 mt-5" id={id}>
        <div className="title">
          <h2>{data === null ? '' : data.title}</h2>
        </div>
        <div className="row">
          {map(listNews, (item, index) => (
            <div className="col-sm-4 col-md-6 col-lg-4" key={index}>
              <div className="post_content mb-3">
                <div style={{ height: '230px', width: '100%', overflow: 'hidden' }}>
                  <img
                    data-src={
                      item.baseImage === null
                        ? `/images/imgdefault.jpg`
                        : `${process.env.DOMAIN}${item.base_image}`
                    }
                    className="lazyload"
                    alt="icon"
                  />
                </div>
                <div className="content">
                  <div className="date mt-4">
                    <p>{moment(item.created_at).format('DD-MM-YYYY')}</p>
                  </div>
                  <p className="title">{item.title}</p>
                  <p className="show">
                    <LinkNew name={item.url} lang={lang}>
                      <a>{t('viewmore')}</a>
                    </LinkNew>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn">
          <button onClick={() => showPage()}>{active === false ? 'Xem thêm' : 'Thu gọn'}</button>
        </div>
      </div>
    );
  }
  if (type === '3') {
    return (
      <section className={`${padding} sec-h-4 news-${type}`} id={id}>
        <div className="container">
          {(data.title || data.title !== '') && (
            <div className="entry-head">
              <h2 className="ht efch-1 ef-img-l">{data.title}</h2>
              <p className="cl5">{data.description}</p>
              <LinkCategory lang={lang} name={slugCategory}>
                <a className="viewall">
                  {t('view')}
                  <i className="icon-arrow-1"></i>
                </a>
              </LinkCategory>
            </div>
          )}
          {/* 2tabs main */}
          <div className="row list-item">
            <div className="col-lg-8 ">
              <div className="list-5 row ">
                {map(listNews, (item, index) => (
                  <div className="col-md-6" key={index}>
                    <LinkNew lang={lang} name={item.url} A>
                      <a className={`item efch-${index} ef-img-l equal`}>
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
                          <div className="date">{moment(item.created_at).format('DD-MM-YYYY')}</div>
                          <h4 className="title line2">{item.title}</h4>
                          <div className="desc line2">{item.shortDescription}</div>
                        </div>
                      </a>
                    </LinkNew>
                  </div>
                ))}
              </div>
            </div>
            {/* 3tabs */}
            <div className="col-lg-4">
              <div className="list-6">
                {map(listNewsTabs, (item, index) => (
                  <LinkNew lang={lang} name={item.url} key={index}>
                    <a key={index} className="item item-inline-table">
                      <div className="img">
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
                        <h4 className="title line4">{item.title}</h4>
                      </div>
                    </a>
                  </LinkNew>
                ))}
              </div>
            </div>
          </div>
          {(data.title === undefined || data.title === '') && (
            <div className="text-center mt-4">
              <LinkCategory lang={lang} name={slugCategory}>
                <a className="btn lg">{t('view')}</a>
              </LinkCategory>
            </div>
          )}
        </div>
      </section>
    );
  }
  if (type === '4') {
    return (
      <section className={`${padding} sec-h-3 news-${type} `} id={id}>
        <div className="container">
          {(data.title || data.title !== '') && (
            <div className="entry-head">
              <h2 className="ht efch-1 ef-img-l">{data.title}</h2>
              <p className="cl5">{data.description}</p>
              <LinkCategory lang={lang} name={slugCategory}>
                <a className="viewall">
                  {t('view')}
                  <i className="icon-arrow-1"></i>
                </a>
              </LinkCategory>
            </div>
          )}
          <div className="wrap-carousel">
            <Carousel
              responsive={responsive}
              draggable
              minimumTouchDrag={80}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              keyBoardControl={true}
              arrows={false}
              renderButtonGroupOutside={true}
              className="list-5"
              ref={ref => {
                setRefCarousel(ref);
              }}
            >
              {map(listCategory, (item, index) => (
                <div className="slide-item" key={index}>
                  <LinkNew lang={lang} name={item.url}>
                    <a
                      className={`item efch-${index} ef-img-l `}
                      key={index}
                      //style={{ height: '300px', width: '262px' }}
                    >
                      <div className="img tRes_71">
                        <img
                          className="lazyload"
                          data-src={
                            item.base_image === null
                              ? `/images/imgdefault.jpg`
                              : `${process.env.DOMAIN}${item.base_image}`
                          }
                          style={{ height: '187px' }}
                          alt="images"
                        />
                      </div>
                      <div className="divtext">
                        <div className="date">{moment(item.created_at).format('DD-MM-YYYY')}</div>
                        <h4 className="title">
                          <ShowMoreText lines={1} more="" expanded={false} width={370}>
                            {item.title}
                          </ShowMoreText>
                        </h4>
                      </div>
                    </a>
                  </LinkNew>
                </div>
              ))}
            </Carousel>
            <div className="carousel-nav center">
              <div
                className="carousel-prev "
                onClick={() => {
                  refCarousel.previous();
                }}
              >
                <i className="icon-arrow-1 ix"></i>
              </div>
              <div
                className="carousel-next"
                onClick={() => {
                  refCarousel.next();
                }}
              >
                <i className="icon-arrow-1"></i>
              </div>
            </div>
          </div>
          {(data.title === undefined || data.title === '') && (
            <div className="text-center mt-4">
              <LinkCategory lang={lang} name={slugCategory}>
                <a className="btn lg">{t('view')}</a>
              </LinkCategory>
            </div>
          )}
        </div>
      </section>
    );
  }
  if (type === '5') {
    return (
      <section className={`${padding} news-${type}`} id={id}>
        <div className="container">
          {(data.title || data.title !== '') && (
            <div className="entry-head home">
              <h2 className="ht efch-1 ef-img-l">{data.title}</h2>
              <p className="cl5">{data.description}</p>
              <LinkCategory lang={lang} name={slugCategory}>
                <a className="viewall">
                  {t('view')}
                  <i className="icon-arrow-1"></i>
                </a>
              </LinkCategory>
            </div>
          )}
          <div className="list-5 row list-item">
            {map(listCategory, (item, index) => {
              return (
                <div
                  className={data.column === undefined ? `col-md-4` : `col-md-${data.column}`}
                  key={index}
                >
                  <LinkNew lang={lang} name={item.url}>
                    <a className="item efch-2 ef-img-l">
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
                        <div className="date">{moment(item.created_at).format('DD-MM-YYYY')}</div>
                        <h4 className="title line2">{item.title}</h4>
                        <div className="desc line2">{item.shortDescription}</div>
                      </div>
                    </a>
                  </LinkNew>
                </div>
              );
            })}
          </div>
          {(data.title === undefined || data.title === '') && (
            <div className="text-center mt-4">
              <LinkCategory lang={lang} name={slugCategory}>
                <a className="btn lg">{t('view')}</a>
              </LinkCategory>
            </div>
          )}
        </div>
      </section>
    );
  }
  if (type === '6') {
    return (
      <section className={`${padding} sec-blog-2 news-${type} `} id={id}>
        <div className="container">
          {(data.title || data.title !== '') && (
            <div className="entry-head">
              <h2 className="ht efch-1 ef-img-l">{data.title}</h2>
              <p className="cl5">{data.description}</p>
              <LinkCategory lang={lang} name={slugCategory}>
                <a className="viewall">
                  {t('view')}
                  <i className="icon-arrow-1"></i>
                </a>
              </LinkCategory>
            </div>
          )}
          <div className="row list-item">
            <div className="col-lg-4">
              <a href={data.url} className="item-banner  tRes">
                <img
                  className="lazyload"
                  data-src={
                    data.urlImage === null
                      ? `/images/imgdefault.jpg`
                      : `${process.env.DOMAIN}${data.urlImage}`
                  }
                  alt="images"
                />
              </a>
            </div>
            <div className="col-lg-8">
              <div className="list-1-1  mb-30 ">
                {map(listCategory, (item, index) => {
                  if (index === 0) {
                    return (
                      <LinkNew lang={lang} name={item.url}>
                        <a className="item  tRes_39">
                          <img
                            className="lazyload"
                            data-src={
                              item.base_image === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${item.base_image}`
                            }
                            alt="images"
                          />
                          <div className="divtext">
                            <h4 className="title line2">{item.title}</h4>
                          </div>
                        </a>
                      </LinkNew>
                    );
                  }
                  return null;
                })}
              </div>
              <div className="list-5 row list-item">
                {map(listCategory, (item, index) => {
                  if (index > 0 && index < 3) {
                    return (
                      <div className="col-md-6">
                        <LinkNew lang={lang} name={item.url}>
                          <a className={`item efch-${index} ef-img-l `}>
                            <div className="img tRes_51">
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
                              <h4 className="title line2">{item.title}</h4>
                            </div>
                          </a>
                        </LinkNew>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
          {(data.title === undefined || data.title === '') && (
            <div className="text-center mt-4">
              <LinkCategory lang={lang} name={slugCategory}>
                <a className="btn lg">{t('view')}</a>
              </LinkCategory>
            </div>
          )}
        </div>
      </section>
    );
  }
  if (type === '7') {
    return (
      <section className={`${padding} news-${type}`} id={id}>
        <div className="container">
          {(data.title || data.title !== '') && (
            <div className="entry-head">
              <h2 className="ht efch-1 ef-img-l">{data.title}</h2>
              <p className="cl5">{data.description}</p>
              <LinkCategory lang={lang} name={slugCategory}>
                <a className="viewall">
                  {t('view')}
                  <i className="icon-arrow-1"></i>
                </a>
              </LinkCategory>
            </div>
          )}
          <div className="list-5 row list-item">
            {map(listCategory, (item, index) => (
              <div className="col-md-4" key={index}>
                <LinkNew lang={lang} name={item.url}>
                  <a className={`item efch-${index} ef-img-l`}>
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
                      <div className="date">{moment(item.created_at).format('DD-MM-YYYY')}</div>
                      <h4 className="title line2">{item.title}</h4>
                      <div className="desc line2">{item.shortDescription}</div>
                    </div>
                  </a>
                </LinkNew>
              </div>
            ))}
          </div>
          {(data.title === undefined || data.title === '') && (
            <div className="text-center mt-4">
              <LinkCategory lang={lang} name={slugCategory}>
                <a className="btn lg">{t('Xem Tất Cả')}</a>
              </LinkCategory>
            </div>
          )}
        </div>
      </section>
    );
  }
  if (type === '8') {
    return (
      <section className={`${padding} news-${type} sec-h-4__`} id={id}>
        <div className="container">
          {(data.title || data.title !== '') && (
            <div className="entry-head">
              <h2 className="ht efch-1 ef-img-l">{data.title}</h2>
              <p className="cl5">{data.description}</p>
              <LinkCategory lang={lang} name={slugCategory}>
                <a className="viewall">
                  {t('view')}
                  <i className="icon-arrow-1"></i>
                </a>
              </LinkCategory>
            </div>
          )}
          <div className="list-5 list-5-1 row list-item">
            {map(listCategory, (item, index) => (
              <div className="col-md-4" key={index}>
                <LinkNew lang={lang} name={item.url}>
                  <a className={`item efch-${index} ef-img-l equal`}>
                    <div className="divtext">
                      <div className="date">{moment(item.created_at).format('DD-MM-YYYY')}</div>
                      <h4 className="title line2">{item.title}</h4>
                      <div className="desc line2">{item.shortDescription}</div>
                      <span className="more cl1" style={{ display: 'block', paddingTop: '30px' }}>
                        {t('look_more')}
                      </span>
                    </div>
                  </a>
                </LinkNew>
              </div>
            ))}
          </div>
          {(data.title === undefined || data.title === '') && (
            <div className="text-center mt-4">
              <LinkCategory lang={lang} name={slugCategory}>
                <a className="btn lg">{t('view')}</a>
              </LinkCategory>
            </div>
          )}
        </div>
      </section>
    );
  }
  if (type === '9') {
    return (
      <section className={`${padding} news-${type} sec-b sec-h-4`} id={id}>
        <div className="container">
          {(data.title || data.title !== '') && (
            <div className="entry-head">
              <h2 className="ht efch-1 ef-img-l">{data.title}</h2>
              <p className="cl5">{data.description}</p>
              <LinkCategory lang={lang} name={slugCategory}>
                <a className="viewall">
                  {t('view')}
                  <i className="icon-arrow-1"></i>
                </a>
              </LinkCategory>
            </div>
          )}
          <div className="row list-item">
            <div className="col-lg-6 list-1">
              {map(listCategory, (item, index) => {
                if (index === 0) {
                  return (
                    <React.Fragment key={index}>
                      <LinkNew lang={lang} name={item.url}>
                        <a className="item  tRes_56 video">
                          <img
                            className="lazyload"
                            data-src={
                              item.base_image === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${item.base_image}`
                            }
                            alt="images"
                          ></img>
                          <div className="divtext">
                            <div className="date">
                              {moment(item.created_at).format('DD-MM-YYYY')}
                            </div>
                            <h4 className="title line2">{item.title}</h4>
                          </div>
                        </a>
                      </LinkNew>
                    </React.Fragment>
                  );
                }
                return null;
              })}
            </div>
            <div className="col-lg-6">
              <div className="list-6-1">
                {map(listCategory, (item, index) => {
                  if (index > 0 && index < 3) {
                    return (
                      <React.Fragment>
                        <LinkNew lang={lang} name={item.url}>
                          <a className="item item-inline-table">
                            <React.Fragment>
                              <div className="img tRes_56 video cl">
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
                                <div className="date">
                                  {moment(item.created_at).format('DD-MM-YYYY')}
                                </div>
                                <h4 className="title line2">{item.title}</h4>
                                <div className="desc line3">{item.shortDescription}</div>
                              </div>
                            </React.Fragment>
                          </a>
                        </LinkNew>
                      </React.Fragment>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
          {(data.title === undefined || data.title === '') && (
            <div className="text-center mt-4">
              <LinkCategory lang={lang} name={slugCategory}>
                <a className="btn lg">{t('view')}</a>
              </LinkCategory>
            </div>
          )}
        </div>
      </section>
    );
  }
}
News.propTypes = propTypes;

export default News;
