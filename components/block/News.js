import React, { useState, useEffect } from 'react';
import map from 'lodash/map';
import slice from 'lodash/slice';
import uniqBy from 'lodash/unionBy';
import uniq from 'lodash/uniq';
import moment from 'moment';
import Proptypes from 'prop-types';
import { getNewByIdService, getListNewsTagPageService } from '../../services/news';
import { getCategoryByIdService } from '../../services/category';
import { getLang } from '../../utils/cookie';
import t from '../../translation';
import { LinkNew, LinkCategory, LinkInput } from '../common/link';
import ShowMoreText from 'react-show-more-text';
import Carousel from 'react-multi-carousel';
import UseWindowResize from '../common/Resize';

const propTypes = {
  data: Proptypes.object.isRequired,
  getCategoryPage: Proptypes.func,
  type: Proptypes.string,
  id: Proptypes.number,
  optionWidth: Proptypes.string,
  pageId: Proptypes.number,
  dataBlock: Proptypes.object
};

function News({ data, type, id, optionWidth, pageId, dataBlock }) {
  const [page, setPage] = useState(3);
  const [active, setActive] = useState(false);
  const [listCategory, setListCategory] = useState([]);
  const [slugCategory, setSlugCategory] = useState('');
  const listNews = slice(uniqBy(listCategory, 'newsId'), 0, 2);
  const listNews5 = slice(uniqBy(listCategory, 'newsId'), 0, 1);
  const listNews4 = slice(uniqBy(listCategory, 'newsId'), 0, 1);
  const listNewsTabs4 = slice(uniqBy(listCategory, 'newsId'), 1, 4);
  const listNews6 = slice(uniqBy(listCategory, 'newsId'), 0, 1);
  const listNewsTabs6 = slice(uniqBy(listCategory, 'newsId'), 1, 5);
  const listNewsTabsLast6 = slice(uniqBy(listCategory, 'newsId'), 5, 6);
  const listNewsTabs = slice(uniqBy(listCategory, 'newsId'), 2, 5);
  const listNewsTabs5 = slice(uniqBy(listCategory, 'newsId'), 1, 5);
  const [refCarousel, setRefCarousel] = useState(null);
  let array = [];
    if (data.blockTitle1 !== null) {
      array.push(data.blockTitle1);
    }
    if (data.blockTitle2 !== null) {
      array.push(data.blockTitle2);
    }
    if (data.blockTitle3 !== null) {
      array.push(data.blockTitle3);
    }
    if (data.blockTitle4 !== null) {
      array.push(data.blockTitle4);
    }
    if (data.blockTitle5 !== null) {
      array.push(data.blockTitle5);
    }
    if (data.blockTitle6 !== null) {
      array.push(data.blockTitle6);
    }
  const titleBlockArray = array;

  const lang = getLang();
  const size = UseWindowResize();

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
    const dataSend = {
      idPage: { id: pageId },
      nameBlock: dataBlock.title
    };
    let idItemNews = [];
    const res1 = await getListNewsTagPageService(dataSend);
    if (res1 && res1.status === 200) {
      idItemNews = map(res1.data, item => item.newsId);
    }

    const idItems = map(data.news, item => item.value);
    const totalIdItems = uniq(idItems).concat(uniq(idItemNews));
    const limit = data.limit === '' || data.limit === null ? 4 : Number(data.limit);
    const res = await getNewByIdService(
      uniq(totalIdItems),
      data.category.value ? data.category.value : -1,
      limit
    );
    if (res && res.status === 200) {
      setListCategory(formState => [...formState, ...res.data]);
    }
  };

  useEffect(() => {
    setListCategory([]);
    getCategoryPage();
    getCategoryById();
  }, [data.news && pageId]);

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
          <button onClick={() => showPage()}>
            {active === false ? `${t('viewmore')}` : `${t('collapse')}`}
          </button>
        </div>
      </div>
    );
  }
  if (type === '3') {
    return (
      <section className={`${padding} sec-h-4 news-${type}`} id={id}>
        <div className="container">
          {(data.title || data.title !== '') && (
            <div className="entry-head title-padding">
              <h2 className="ht efch-1 ef-img-l">{data.title}</h2>
              <p className="cl5">{data.description}</p>
              {(data.inputUrl === undefined || data.inputUrl === '') && (
                <LinkCategory lang={lang} name={slugCategory}>
                  <a className="viewall">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkCategory>
              )}
              {data.inputUrl && (
                <LinkInput lang={lang} name={data.inputUrl}>
                  <a className="viewall">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkInput>
              )}
            </div>
          )}
          {/* 2tabs main */}
          <div className="row list-item">
            <div className="col-lg-8 ">
              <div className="list-5 row ">
                {map(listNews, (item, index) => (
                  <div className="col-md-6" key={index}>
                    <LinkNew lang={lang} name={item.url}>
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
  if (type === '13') {
    return (
      <section className={`${padding} sec-h-4 news-${type}`} id={id}>
        <div className="container">
          {(data.title || data.title !== '') && (
            <div className="entry-head text-center" style={{marginBottom: "0"}}>
              <h2 className="title-custom">{data.title}</h2>
              <p className="cl5">{data.description}</p>
              {(data.inputUrl === undefined || data.inputUrl === '') && (
                <LinkCategory lang={lang} name={slugCategory}>
                  <a className="viewall-custom">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkCategory>
              )}
              {data.inputUrl && (
                <LinkInput lang={lang} name={data.inputUrl}>
                  <a className="viewall-custom">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkInput>
              )}
            </div>
          )}

          <div class="convert-grid-to-scroll">
            <div class="list-5 row">
            {map(listCategory, (item, index) => (
                  <div className="col-md-3" key={index} style={{maxHeight:"358.05px"}}>
                    <LinkNew lang={lang} name={item.url}>
                      <a className={`item efch-0 ef-img-l`} style={{height: "100%",
                      boxShadow: "none",
                      borderRadius: "8px",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E2DFDF",
                      overflow: "hidden"}}>
                          <div className="img tRes_85">
                            <img
                              className="lazyload"
                              data-src={
                                item.base_image === null
                                  ? `/images/imgdefault.jpg`
                                  : `${process.env.DOMAIN}${item.base_image}`
                              }
                              style={{borderTopLeftRadius: "8px", borderTopRightRadius: "8px"}}
                              alt="images"
                            />
                          </div>
                        <div className="divtext">
                          {/* <div className="date" style={{color: "#A6A6A6", marginBottom: "5px", fontSize: "14px", marginBottom: "5px"}}>{moment(item.created_at).format('DD/MM/YYYY')}</div> */}
                          <h5 className="title title-custom-1 on-hover-blue">{item.title}</h5>
                        </div>
                      </a>
                    </LinkNew>
                  </div>
                ))}
            </div>
          </div>

          {/* {size.width < 768 && (
            <div className="list-5 list-item">
              {map(uniqBy(listCategory, 'newsId'), (item, index) => (
                <LinkNew lang={lang} name={item.url} key={index}>
                  <a className={`item efch-${index} ef-img-l `}>
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
              ))}
            </div>
          )} */}

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
  if (type === '18') {
    return (
      <section className={`${padding} sec-h-4 news-${type}`} id={id}>
        <div className="container">
          {(data.title || data.title !== '') && (
            <div className="entry-head text-center" style={{marginBottom: "0"}}>
              <h2 className="title-custom">{data.title}</h2>
              <p className="cl5">{data.description}</p>
              {(data.inputUrl === undefined || data.inputUrl === '') && (
                <LinkCategory lang={lang} name={slugCategory}>
                  <a className="viewall-custom">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkCategory>
              )}
              {data.inputUrl && (
                <LinkInput lang={lang} name={data.inputUrl}>
                  <a className="viewall-custom">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkInput>
              )}
            </div>
          )}

          <div class="convert-grid-to-scroll">
            <div class="list-5 row">
            {map(listCategory, (item, index) => (
                  <div className="col-md-4" key={index} style={{}}>
                    <LinkNew lang={lang} name={item.url}>
                      <a className={`item efch-0 ef-img-l`} style={{height: "100%",
                      boxShadow: "none",
                      borderRadius: "8px",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E2DFDF",
                      overflow: "hidden"}}>
                          <div className="img tRes_71">
                            <img
                              className="lazyload"
                              data-src={
                                item.base_image === null
                                  ? `/images/imgdefault.jpg`
                                  : `${process.env.DOMAIN}${item.base_image}`
                              }
                              style={{borderTopLeftRadius: "8px", borderTopRightRadius: "8px"}}
                              alt="images"
                            />
                          </div>
                        <div className="divtext">
                          {/* <div className="date" style={{color: "#A6A6A6", marginBottom: "5px", fontSize: "14px", marginBottom: "5px"}}>{moment(item.created_at).format('DD/MM/YYYY')}</div> */}
                          <h5 className="title title-custom-1 on-hover-blue">{item.title}</h5>
                        </div>
                      </a>
                    </LinkNew>
                  </div>
                ))}
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
  if (type === '15') {
    return (
      <section className={`${padding} sec-h-4 news-${type}`} id={id}>
        <div className="container">
          {(data.title || data.title !== '') && (
            <div className="entry-head text-center" style={{marginBottom: "0"}}>
              <h2 className="title-custom">{data.title}</h2>
              <p className="cl5">{data.description}</p>
              {(data.inputUrl === undefined || data.inputUrl === '') && (
                <LinkCategory lang={lang} name={slugCategory}>
                  <a className="viewall-custom">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkCategory>
              )}
              {data.inputUrl && (
                <LinkInput lang={lang} name={data.inputUrl}>
                  <a className="viewall-custom">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkInput>
              )}
            </div>
          )}

          <div class="convert-grid-to-scroll">
            <div class="list-5 row">
            {map(listCategory, (item, index) => (
                  <div className="col-md-4" key={index} style={{maxHeight:"358.05px"}}>
                    <LinkNew lang={lang} name={item.url}>
                      <a className={`item efch-0 ef-img-l`} style={{height: "100%",
                      boxShadow: "none",
                      borderRadius: "8px",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E2DFDF",
                      overflow: "hidden"}}>
                        <div className="divtext" style={{padding: "30px", height: "165px"}}>
                          {/* <div className="date" style={{color: "#A6A6A6", marginBottom: "5px", fontSize: "14px", marginBottom: "5px"}}>{moment(item.created_at).format('DD/MM/YYYY')}</div> */}
                          <h5 className="title title-custom-1 on-hover-blue">{item.title}</h5>
                        </div>
                      </a>
                    </LinkNew>
                  </div>
                ))}
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
  if (type === '14') {
    return (
      <section className={`${padding} sec-h-4 news-${type}`} id={id} style={{marginBottom:"-7px"}}>
        <div className="container">
          {(data.title || data.title !== '') && (
            <div className="entry-head text-center" style={{marginBottom: "0"}}>
              <h2 className="title-custom">{data.title}</h2>
              <p className="cl5">{data.description}</p>
              {(data.inputUrl === undefined || data.inputUrl === '') && (
                <LinkCategory lang={lang} name={slugCategory}>
                  <a className="viewall-custom">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkCategory>
              )}
              {data.inputUrl && (
                <LinkInput lang={lang} name={data.inputUrl}>
                  <a className="viewall-custom">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkInput>
              )}
            </div>
          )}

          <div className="wrap-carousel">
            <Carousel
              responsive={responsive}
              draggable
              minimumTouchDrag={80}
              ssr={true} // means to render carousel on server-side.
              keyBoardControl={true}
              arrows={false}
              renderButtonGroupOutside={true}
              className="list-5 convert-slide-to-scroll"
              ref={ref => {
                setRefCarousel(ref);
              }}
            >
            {map(listCategory, (item, index) => (
                  <div className="slide-item" key={index} style={{maxHeight:"358.05px"}}>
                    <LinkNew lang={lang} name={item.url}>
                      <a className={`item efch-0 ef-img-l`} style={{height: "100%",
                      boxShadow: "none",
                      borderRadius: "8px",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E2DFDF",
                      overflow: "hidden"}}>
                        <div className="divtext" style={{padding: "30px", height: "165px"}}>
                          {/* <div className="date" style={{color: "#A6A6A6", marginBottom: "5px", fontSize: "14px", marginBottom: "5px"}}>{moment(item.created_at).format('DD/MM/YYYY')}</div> */}
                          <h5 className="title title-custom-1 on-hover-blue">{item.title}</h5>
                        </div>
                      </a>
                    </LinkNew>
                  </div>
                ))}
            </Carousel>
              {size.width >= 768 && (
                <div className="carousel-nav center carousel-nav-custom">
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
              )}
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
            <div className="entry-head title-padding">
              <h2 className="ht efch-1 ef-img-l">{data.title}</h2>
              <p className="cl5">{data.description}</p>
              {(data.inputUrl === undefined || data.inputUrl === '') && (
                <LinkCategory lang={lang} name={slugCategory}>
                  <a className="viewall">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkCategory>
              )}
              {data.inputUrl && (
                <LinkInput lang={lang} name={data.inputUrl}>
                  <a className="viewall">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkInput>
              )}
            </div>
          )}

          <div className="wrap-carousel">
            <Carousel
              responsive={responsive}
              draggable
              minimumTouchDrag={80}
              ssr={true} // means to render carousel on server-side.
              keyBoardControl={true}
              arrows={false}
              renderButtonGroupOutside={true}
              className="list-5 convert-slide-to-scroll"
              ref={ref => {
                setRefCarousel(ref);
              }}
            >
              {map(uniqBy(listCategory, 'newsId'), (item, index) => (
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
            {size.width >= 768 && (
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
            )}
          </div>

          {/* {size.width < 768 && (
            <div className="list-5 list-item">
              {map(uniqBy(listCategory, 'newsId'), (item, index) => (
                <LinkNew lang={lang} name={item.url} key={index}>
                  <a className={`item efch-${index} ef-img-l `}>
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
              ))}
            </div>
          )} */}

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
            <div className="entry-head home title-padding">
              <h2 className="ht efch-1 ef-img-l">{data.title}</h2>
              <p className="cl5">{data.description}</p>
              {(data.inputUrl === undefined || data.inputUrl === '') && (
                <LinkCategory lang={lang} name={slugCategory}>
                  <a className="viewall">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkCategory>
              )}
              {data.inputUrl && (
                <LinkInput lang={lang} name={data.inputUrl}>
                  <a className="viewall">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkInput>
              )}
            </div>
          )}
          <div className="list-5 row list-item">
            {map(uniqBy(listCategory, 'newsId'), (item, index) => {
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
            <div className="entry-head title-padding">
              <h2 className="ht efch-1 ef-img-l">{data.title}</h2>
              <p className="cl5">{data.description}</p>
              {(data.inputUrl === undefined || data.inputUrl === '') && (
                <LinkCategory lang={lang} name={slugCategory}>
                  <a className="viewall">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkCategory>
              )}
              {data.inputUrl && (
                <LinkInput lang={lang} name={data.inputUrl}>
                  <a className="viewall">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkInput>
              )}
            </div>
          )}
          <div className="row list-item">
            <div className="col-lg-4 show-768">
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
                {map(uniqBy(listCategory, 'newsId'), (item, index) => {
                  if (index === 0) {
                    return (
                      <LinkNew lang={lang} name={item.url} key={index}>
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
                            <h4 className="title on-hover-blue" style={{paddingLeft: "20px", paddingBottom: "20px"}}>{item.title}</h4>
                          </div>
                        </a>
                      </LinkNew>
                    );
                  }
                  return null;
                })}
              </div>
              <div className="list-5 row list-item">
                {map(uniqBy(listCategory, 'newsId'), (item, index) => {
                  if (index > 0 && index < 3) {
                    return (
                      <div className="col-md-6" key={index}>
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
                              <h5 className="title title-custom-1 on-hover-blue">{item.title}</h5>
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
          {/* {(data.title === undefined || data.title === '') && (
            <div className="text-center mt-4">
              <LinkCategory lang={lang} name={slugCategory}>
                <a className="btn lg">{t('view')}</a>
              </LinkCategory>
            </div>
          )} */}
        </div>
      </section>
    );
  }
  if (type === '7') {
    return (
      <section className={`${padding} news-${type}`} id={id}>
        <div className="container">
          {(data.title || data.title !== '') && (
            <div className="entry-head title-padding">
              <h2 className="ht efch-1 ef-img-l">{data.title}</h2>
              <p className="cl5">{data.description}</p>
              {(data.inputUrl === undefined || data.inputUrl === '') && (
                <LinkCategory lang={lang} name={slugCategory}>
                  <a className="viewall-custom">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkCategory>
              )}
              {data.inputUrl && (
                <LinkInput lang={lang} name={data.inputUrl}>
                  <a className="viewall-custom">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkInput>
              )}
            </div>
          )}
          <div className="convert-grid-to-scroll">
            <div className="list-5 row list-item">
              {map(uniqBy(listCategory, 'newsId'), (item, index) => (
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
                        {/* <div className="date">{moment(item.created_at).format('DD-MM-YYYY')}</div> */}
                        <h4 className="title line2">{item.title}</h4>
                        <div className="desc line2">{item.shortDescription}</div>
                      </div>
                    </a>
                  </LinkNew>
                </div>
              ))}
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
  if (type === '8') {
    return (
      <section className={`${padding} news-${type} sec-h-4__`} id={id}>
        <div className="container">
          {(data.title || data.title !== '') && (
            <div className="entry-head title-padding">
              <h2 className="ht efch-1 ef-img-l">{data.title}</h2>
              <p className="cl5">{data.description}</p>
              {(data.inputUrl === undefined || data.inputUrl === '') && (
                <LinkCategory lang={lang} name={slugCategory}>
                  <a className="viewall">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkCategory>
              )}
              {data.inputUrl && (
                <LinkInput lang={lang} name={data.inputUrl}>
                  <a className="viewall">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkInput>
              )}
            </div>
          )}
          <div className="list-5 list-5-1 row list-item">
            {map(uniqBy(listCategory, 'newsId'), (item, index) => (
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
            <div className="entry-head title-padding">
              <h2 className="ht efch-1 ef-img-l">{data.title}</h2>
              <p className="cl5">{data.description}</p>
              {(data.inputUrl === undefined || data.inputUrl === '') && (
                <LinkCategory lang={lang} name={slugCategory}>
                  <a className="viewall-custom">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkCategory>
              )}
              {data.inputUrl && (
                <LinkInput lang={lang} name={data.inputUrl}>
                  <a className="viewall-custom">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkInput>
              )}
            </div>
          )}
          <div className="row list-item">
            <div className="col-lg-6 list-1">
              {map(uniqBy(listCategory, 'newsId'), (item, index) => {
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
                            {/* <div className="date">
                              {moment(item.created_at).format('DD-MM-YYYY')}
                            </div> */}
                            <h4 className="title line2 on-hover-blue">{item.title}</h4>
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
                {map(uniqBy(listCategory, 'newsId'), (item, index) => {
                  if (index > 0 && index < 3) {
                    return (
                      <React.Fragment key={index}>
                        <LinkNew lang={lang} name={item.url}>
                          <a className="item item-inline-table">
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
                            <div className="divtext" style={{padding: "20px 25px"}}>
                              {/* <div className="date">
                                {moment(item.created_at).format('DD-MM-YYYY')}
                              </div> */}
                              <h4 className="title line2">{item.title}</h4>
                              <div className="desc line3">{item.shortDescription}</div>
                            </div>
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
  if (type === '10') {
    return (
      <section className={`${padding} sec-h-4 news-${type}`} id={id}>
        <div className="container">
          {(data.title || data.title !== '') && (
            <div className="entry-head text-center" style={{marginBottom:"15px"}}>
              <h2 className="title-custom ">{data.title}</h2>
              <p className="cl5">{data.description}</p>
              {(data.inputUrl === undefined || data.inputUrl === '') && (
                <LinkCategory lang={lang} name={slugCategory}>
                  <a className="viewall-custom">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkCategory>
              )}
              {data.inputUrl && (
                <LinkInput lang={lang} name={data.inputUrl}>
                  <a className="viewall-custom">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkInput>
              )}
            </div>
          )}
          {/* 2tabs main */}
          <div className="row list-item list-1">
          {map(listNews, (item, index) => (
                  <div className="col-md-6 efch-5 ef-img-t" key={index} style={{maxHeight:"356.39px"}}>
                    <LinkNew lang={lang} name={item.url}>
                      <a className={`item tRes_66 blue-shadow blue-shadow-custom`}>
                          <img
                            className="lazyload"
                            data-src={
                              item.base_image === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${item.base_image}`
                            }
                            alt="images"
                            style={{borderRadius: "8px"}}
                          />
                        <div className="divtext">
                          <h4 className="title line2">{item.title}</h4>
                        </div>
                      </a>
                    </LinkNew>
                  </div>
                ))}
          {map(listNewsTabs, (item, index) => (
                  <div className="col-md-4 efch-5 ef-img-t" key={index}>
                    <LinkNew lang={lang} name={item.url}>
                      <a className={`item tRes_66 blue-shadow blue-shadow-custom`}>
                          <img
                            className="lazyload"
                            data-src={
                              item.base_image === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${item.base_image}`
                            }
                            alt="images"
                            style={{borderRadius: "8px"}}
                          />
                        <div className="divtext">
                          <h5 className="title line2">{item.title}</h5>
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
  if (type === '11') {
    return (
      <section className={`sec-t sec-h-4 news-${type}`} id={id}>
        <div className="container">
          {(data.title || data.title !== '') && (
            <div className="entry-head text-center" style={{marginBottom:"15px"}}>
              <h2 className="title-custom ">{data.title}</h2>
              <p className="cl5">{data.description}</p>
              {/* {(data.inputUrl === undefined || data.inputUrl === '') && (
                <LinkCategory lang={lang} name={slugCategory}>
                  <a className="viewall-custom">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkCategory>
              )} */}
            </div>
          )}
          {/* 2tabs main */}
          <div className="row list-item list-1">
          {map(listNews4, (item, index) => (
                  <div className={`col-md-8 efch-${index+1}} ef-img-t`} key={index} style={{maxHeight:"318.5px"}}>
                    <LinkNew lang={lang} name={item.url}>
                      <a className={`item tRes_66`}>
                          <img
                            className="lazyload"
                            data-src={
                              item.base_image === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${item.base_image}`
                            }
                            alt="images"
                            style={{borderRadius: "8px"}}
                          />
                        <div className="divtext">
                          <div class="category">{data.blockTitle1}</div>
                          <h4 className="title line2 on-hover-blue">{item.title}</h4>
                        </div>
                      </a>
                    </LinkNew>
                  </div>
                ))}
                {map(listNewsTabs4, (item, index) => (
                  <div className={`col-md-4 efch-${index} ef-img-t`} key={index} style={{minHeight: index === '0' ? "100%" : "266px"}}>
                    <LinkNew lang={lang} name={item.url}>
                      <a className={`item tRes_66`}>
                          <img
                            className="lazyload"
                            style={{borderRadius: "8px"}}
                            data-src={
                              item.base_image === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${item.base_image}`
                            }
                            alt="images"
                          />
                        <div className="divtext">
                          <div class="category">{titleBlockArray[index+1] === undefined ? '' : titleBlockArray[index+1]}</div>
                          <h5 className="title line2 on-hover-blue">{item.title}</h5>
                        </div>
                      </a>
                    </LinkNew>
                  </div>
                ))}
                
                <div className={`col-md-4 efch-5 ef-img-t`}>
                    
                    {(data.color.label == 'Xanh') && (
                      <LinkInput lang={lang} name={data.url}>
                      <a className={`item none tRes_66 list-1-custom`} href={data.url} style={{backgroundColor:data.color.value}}>
                      <div className="divtext">
                        <div class="category">{data.blockTitle5}</div>
                        <h5 className="title line2 on-hover-blue">{data.viewMoreText}<i class="icon-arrow-2" style={{fontSize:"11px"}}></i></h5>
                      </div>
                    </a>
                    </LinkInput>
                    )}
                    {(data.color.label == 'Tím') && (
                      <LinkInput lang={lang} name={data.url}>
                      <a className={`item none tRes_66 list-2-custom`} href={data.url} style={{backgroundColor:data.color.value}}>
                        <div className="divtext">
                          <div class="category">{data.blockTitle5}</div>
                          <h5 className="title line2 on-hover-blue">{data.viewMoreText}<i class="icon-arrow-2" style={{fontSize:"11px"}}></i></h5>
                        </div>
                      </a>
                      </LinkInput>
                    )}
                    
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
  if (type === '12') {
    return (
      <section className={`${padding} sec-h-4 news-${type}`} id={id}>
        <div className="container">
          {(data.title || data.title !== '') && (
            <div className="entry-head text-center" style={{marginBottom:"15px"}}>
              <h2 className="title-custom ">{data.title}</h2>
              <p className="cl5">{data.description}</p>
              {/* {(data.inputUrl === undefined || data.inputUrl === '') && (
                <LinkCategory lang={lang} name={slugCategory}>
                  <a className="viewall-custom">
                    {t('view')}
                    <i className="icon-arrow-1"></i>
                  </a>
                </LinkCategory>
              )} */}
            </div>
          )}
          {/* 2tabs main */}
          <div className="row list-item list-1">
          {map(listNews6, (item, index) => (
                  <div className="col-md-8 efch-1 ef-img-t" key={index} style={{maxHeight:"318.5px"}}>
                    <LinkNew lang={lang} name={item.url}>
                      <a className={`item tRes_66`}>
                          <img
                            className="lazyload"
                            data-src={
                              item.base_image === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${item.base_image}`
                            }
                            style={{borderRadius: "8px"}}
                            alt="images"
                          />
                        <div className="divtext">
                          <div class="category">{data.blockTitle1}</div>
                          <h4 className="title line2 on-hover-blue">{item.title}</h4>
                        </div>
                      </a>
                    </LinkNew>
                  </div>
                ))}
                {map(listNewsTabs6, (item, index) => (
                  <div className={`col-md-4 efch-${index} ef-img-t`} key={index}>
                    <LinkNew lang={lang} name={item.url}>
                      <a className={`item tRes_66`}>
                          <img
                            className="lazyload"
                            data-src={
                              item.base_image === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${item.base_image}`
                            }
                            alt="images"
                            style={{borderRadius: "8px"}}
                          />
                        <div className="divtext">
                          <div class="category">{titleBlockArray[index+1] === undefined ? '' : titleBlockArray[index+1]}</div>
                          <h5 className="title line2 on-hover-blue">{item.title}</h5>
                        </div>
                      </a>
                    </LinkNew>
                  </div>
                ))}
                {map(listNewsTabsLast6, (item, index) => (
                  <div className="col-md-8 efch-1 ef-img-t" style={{maxHeight:"318.5px"}}>
                    <LinkNew lang={lang} name={item.url}>
                      <a className={`item tRes_66`}>
                          <img
                            className="lazyload"
                            data-src={
                              item.base_image === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${item.base_image}`
                            }
                            style={{borderRadius: "8px"}}
                            alt="images"
                          />
                        <div className="divtext">
                          <div class="category">{data.blockTitle6}</div>
                          <h4 className="title line2 on-hover-blue">{item.title}</h4>
                        </div>
                      </a>
                    </LinkNew>
                  </div>
                ))}
                
                <div className={`col-md-4 efch-5 ef-img-t`}>
                    {(data.color.label == 'Xanh') && (
                      <LinkInput lang={lang} name={data.url}>
                      <a className={`item none tRes_66 list-1-custom`} href={data.url} style={{backgroundColor:data.color.value}}>
                      <div className="divtext">
                        <div class="category">{data.blockTitle5}</div>
                        <h5 className="title line2 on-hover-blue">{data.viewMoreText}<i class="icon-arrow-2" style={{fontSize:"11px"}}></i></h5>
                      </div>
                    </a>
                    </LinkInput>
                    )}
                    {(data.color.label == 'Tím') && (
                      <LinkInput lang={lang} name={data.url}>
                      <a className={`item none tRes_66 list-2-custom`} href={data.url} style={{backgroundColor:data.color.value}}>
                        <div className="divtext">
                          <div class="category">{data.blockTitle5}</div>
                          <h5 className="title line2 on-hover-blue">{data.viewMoreText}<i class="icon-arrow-2" style={{fontSize:"11px"}}></i></h5>
                        </div>
                      </a>
                      </LinkInput>
                    )}
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
  if (type === '17') {
    return (
      <section className={`${padding} sec-h-4 news-${type}`} id={id}>
        <div className="container">
          {(data.title || data.title !== '') && (
            <div className="entry-head text-center" style={{marginBottom:"15px"}}>
              <h2 className="title-custom ">{data.title}</h2>
            </div>
          )}
          {/* 2tabs main */}
          <div className="row list-item list-1">
          {map(listNews5, (item, index) => (
                  <div className="col-md-8 efch-5 ef-img-t" key={index} style={{maxHeight:"330px"}}>
                    <LinkNew lang={lang} name={item.url}>
                      <a className={`item tRes_46 blue-shadow blue-shadow-custom`}>
                          <img
                            className="lazyload"
                            data-src={
                              item.base_image === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${item.base_image}`
                            }
                            alt="images"
                            style={{borderRadius: "8px"}}
                          />
                        <div className="divtext">
                          <h4 className="title line2" style={{fontSize: "18px", maxWidth: "300px"}}>{item.title}</h4>
                        </div>
                      </a>
                    </LinkNew>
                  </div>
                ))}
          {map(listNewsTabs5, (item, index) => (
                  <div className="col-md-4 efch-5 ef-img-t" key={index}>
                    <LinkNew lang={lang} name={item.url}>
                      <a className={`item tRes_66 blue-shadow blue-shadow-custom`}>
                          <img
                            className="lazyload"
                            data-src={
                              item.base_image === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${item.base_image}`
                            }
                            alt="images"
                            style={{borderRadius: "8px"}}
                          />
                        <div className="divtext">
                          <h5 className="title line2" style={{fontSize: "18px", maxWidth: "300px"}}>{item.title}</h5>
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
}
News.propTypes = propTypes;

export default News;
