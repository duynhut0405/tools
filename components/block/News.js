import React, { useState, useEffect } from 'react';
import { map, slice } from 'lodash';
import moment from 'moment';
import Proptypes from 'prop-types';
import { getNewByIdService } from '../../services/news';
import { getCategoryByIdService } from '../../services/category';
import { useTranslation } from 'react-i18next';
import { withTranslation } from '../../i18n';
import ShowMoreText from 'react-show-more-text';
import Carousel from 'react-multi-carousel';
import { getLang } from '../../utils/localStorage';

const propTypes = {
  data: Proptypes.object.isRequired,
  getCategoryPage: Proptypes.func,
  type: Proptypes.string,
  id: Proptypes.number
};

function News({ data, type, id }) {
  const [page, setPage] = useState(3);
  const [active, setActive] = useState(false);
  const [listCategory, setListCategory] = useState([]);
  const [slugCategory, setSlugCategory] = useState('');
  const listNews = slice(listCategory, 0, 2);
  const listNewsTabs = slice(listCategory, 2, 5);
  const [refCarousel, setRefCarousel] = useState(null);

  const { t , i18n } = useTranslation();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1
    }
  };

  const getCategoryById = async () => {
    const res = await getCategoryByIdService(Number(data.category));
    if (res && res.status === 200) {
      setSlugCategory(res.data.slug);
    }
  };

  const getCategoryPage = async () => {
    const idItems = map(data.news, item => item.newsId);
    const res = await getNewByIdService(idItems);
    if (res && res.status === 200) {
      setListCategory(res.data);
    }
  };
  useEffect(() => {
    i18n.changeLanguage(getLang());
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
                  <img src={item.base_image} alt="icon" />
                </div>
                <div className="content">
                  <div className="date mt-4">
                    <p>{moment(item.created_at).format('DD-MM-YYYY')}</p>
                  </div>
                  <p className="title">{item.title}</p>
                  <p className="show">
                    <a href={`/news/${item.url}`}>{t('viewmore')}</a>
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
      <section className="sec-tb sec-h-4" id={id}>
        <div className="container">
          <div className="entry-head">
            <h2 className="ht efch-1 ef-img-l">{data.title}</h2>
            <p className="cl5">{data.description}</p>
            <a className="viewall" href={`news/category/${slugCategory}`}>
              {t('view')}
              <i className="icon-arrow-1"></i>
            </a>
          </div>
          {/* 2tabs main */}
          <div className="row list-item">
            <div className="col-lg-8 ">
              <div className="list-5 row ">
                {map(listNews, (item, index) => (
                  <div className="col-md-6" key={index}>
                    <a href={`/news/${item.url}`} className={`item efch-${index} ef-img-l equal`}>
                      <div className="img tRes_71">
                        <img className="lazy-hidden" data-lazy-type="image" src={item.base_image} />
                      </div>
                      <div className="divtext">
                        <div className="date">{moment(item.created_at).format('DD-MM-YYYY')}</div>
                        <h4 className="title line2">{item.title}</h4>
                        <div className="desc line2">{item.shortDescription}</div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            {/* 3tabs */}
            <div className="col-lg-4">
              <div className="list-6">
                {map(listNewsTabs, (item, index) => (
                  <a key={index} href={`/news/${item.url}`} className="item item-inline-table">
                    <div className="img">
                      <img className="lazy-hidden" data-lazy-type="image" src={item.base_image} />
                    </div>
                    <div className="divtext">
                      <h4 className="title line4">{item.title}</h4>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (type === '4') {
    return (
      <section className="sec-tb sec-h-3 " id={id}>
        <div className="container">
          <div className="entry-head">
            <h2 className="ht efch-1 ef-img-t">{data.title}</h2>
            <a className="viewall" href={`news/category/${slugCategory}`}>
              {t('view')} <i className="icon-arrow-1"></i>
            </a>
          </div>
          <div className="owl-carousel equalHeight s-nav nav-2 list-5 owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div className="owl-stage">
                <Carousel
                  responsive={responsive}
                  draggable
                  minimumTouchDrag={80}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  keyBoardControl={true}
                  arrows={false}
                  renderButtonGroupOutside={true}
                  ref={ref => {
                    setRefCarousel(ref);
                  }}
                >
                  {map(listCategory, (item, index) => (
                    <div className="owl-item" key={index}>
                      <a
                        href={`/news/${item.url}`}
                        className={`item efch-${index} ef-img-l equal`}
                        key={index}
                        style={{ height: '300px', width: '262px' }}
                      >
                        <div className="img tRes_71">
                          <img
                            className="lazy-hidden"
                            data-lazy-type="image"
                            src={item.base_image}
                            style={{ height: '187px' }}
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
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>

            <div className="owl-nav">
              <div
                className="owl-prev disabled"
                onClick={() => {
                  refCarousel.previous();
                }}
              >
                <i className="icon-arrow-1 ix"></i>
              </div>
              <div
                className="owl-next"
                onClick={() => {
                  refCarousel.next();
                }}
              >
                <i className="icon-arrow-1"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (type === '5') {
    return (
      <section className="sec-b" id={id}>
        <div className="container">
          <h2 className="">{data.title}</h2>
          <p>{data.description}</p>
          <div className="list-5 row list-item">
            {map(listCategory, (item, index) => {
              // if (index < 3) {
              return (
                <div
                  className={data.column === undefined ? `col-md-4` : `col-md-${data.column}`}
                  key={index}
                >
                  <a href={`/news/${item.url}`} className="item efch-2 ef-img-l ">
                    <div className="img tRes_71">
                      <img
                        className=" loaded loaded"
                        data-lazy-type="image"
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
              // }
            })}
          </div>
          {/* <div className="list-5 row list-item">
            {map(listCategory, (item, index) => {
              if (index >= 3) {
                return (
                  <div className="col-md-3" key={index}>
                    <a href={`/news/${item.url}`} className="item efch-2 ef-img-l ">
                      <div className="img tRes_71">
                        <img
                          className=" loaded loaded"
                          data-lazy-type="image"
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
            })}
          </div> */}
        </div>
      </section>
    );
  }
  if (type === '6') {
    return (
      <section className="sec-b sec-blog-2" id={id}>
        <div className="container">
          <h2 className="">{data.title}</h2>
          <div className="row list-item">
            <div className="col-lg-4">
              <a href={data.url} className="item-banner  tRes ">
                <img className=" loaded loaded" data-lazy-type="image" src={data.image} />
              </a>
            </div>
            <div className="col-lg-8">
              <div className="list-1-1  mb-30 ">
                {map(listCategory, (item, index) => {
                  if (index === 0) {
                    return (
                      <a href={`/news/${item.url}`} className="item  tRes_39 ">
                        <img
                          className=" loaded loaded"
                          data-lazy-type="image"
                          src={item.base_image}
                        />
                        <div className="divtext">
                          <h4 className="title line2">{item.title}</h4>
                        </div>
                      </a>
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
                        <a href={`/news/${item.url}`} className={`item efch-${index} ef-img-l `}>
                          <div className="img tRes_51">
                            <img
                              className=" loaded loaded"
                              data-lazy-type="image"
                              src={item.base_image}
                            />
                          </div>
                          <div className="divtext">
                            <h4 className="title line2">{item.title}</h4>
                          </div>
                        </a>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (type === '7') {
    return (
      <section className="sec-b" id={id}>
        <div className="container">
          <div className="list-5 row list-item">
            {map(listCategory, (item, index) => (
              <div className="col-md-4" key={index}>
                <a href={`/news/${item.url}`} className={`item efch-${index} ef-img-l`}>
                  <div className="img tRes_71">
                    <img className=" loaded loaded" data-lazy-type="image" src={item.base_image} />
                  </div>
                  <div className="divtext">
                    <div className="date">{moment(item.created_at).format('DD-MM-YYYY')}</div>
                    <h4 className="title line2">{item.title}</h4>
                    <div className="desc line2">{item.shortDescription}</div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  if (type === '8') {
    return (
      <section className="sec-b sec-h-4__" id={id}>
        <div className="container">
          <h2 className="font">{data.title}</h2>
          <p className="cl5">{data.description}</p>
          <div className="list-5 list-5-1 row list-item">
            {map(listCategory, (item, index) => (
              <div className="col-md-4" key={index}>
                <a href={`/news/${item.url}`} className={`item efch-${index} ef-img-l equal`}>
                  <div className="divtext">
                    <div className="date">{moment(item.created_at).format('DD-MM-YYYY')}</div>
                    <h4 className="title line2">{item.title}</h4>
                    <div className="desc line2">{item.shortDescription}</div>
                    <span className="more cl1" style={{ display: 'block', paddingTop: '30px' }}>
                      {t('look_more')}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  if (type === '9') {
    return (
      <section className="sec-b sec-h-4">
        <div className="container">
          <div className="entry-head">
            <h2 className="ht efch-1 ef-img-l">{data.title}</h2>
          </div>
          <div className="row list-item">
            <div className="col-lg-6 list-1">
              {map(listCategory, (item, index) => {
                if (index === 0) {
                  return (
                    <React.Fragment>
                      <a href={`/news/${item.url}`} className="item  tRes_56 video">
                        {item.author_name === '' || item.author_name === null ? (
                          <div>
                            <img
                              className=" loaded loaded"
                              data-lazy-type="image"
                              data-lazy-src="https://via.placeholder.com/262x187"
                              src={item.base_image}
                            ></img>
                            <div className="divtext">
                              <div className="date">
                                {moment(item.created_at).format('DD-MM-YYYY')}
                              </div>
                              <h4 className="title line2">{item.title}</h4>
                            </div>
                          </div>
                        ) : (
                          <iframe src={item.author_name}></iframe>
                        )}
                      </a>
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
                        <a href={`/news/${item.url}`} className="item item-inline-table">
                          {item.author_name === null ? (
                            <React.Fragment>
                              <div className="img tRes_56 video cl">
                                <img
                                  className=" loaded loaded"
                                  data-lazy-type="image"
                                  src={item.base_image}
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
                          ) : (
                            <React.Fragment>
                              <div className="img tRes_56 video cl">
                                <iframe src={item.author_name}></iframe>
                              </div>
                              <div className="divtext">
                                <div className="date">
                                  {moment(item.created_at).format('DD-MM-YYYY')}
                                </div>
                                <h4 className="title line2">{item.title}</h4>
                                <div className="desc line3">{item.shortDescription}</div>
                              </div>
                            </React.Fragment>
                          )}
                        </a>
                      </React.Fragment>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
News.propTypes = propTypes;

News.getInitialProps = async () => ({
  namespacesRequired: ['common', 'common']
});

export default withTranslation('common')(News);
