import React, { useState, useEffect } from 'react';
import map from 'lodash/map';
import Proptypes from 'prop-types';
import { getPagesByIdService } from '../../services/page';
import Carousel from 'react-multi-carousel';
import CustomPageItem from './BlockPageItem/CustomPageItem';
import { LinkPage } from '../common/link';
import { getLang } from '../../utils/cookie';
import t from '../../translation';

const propTypes = {
  data: Proptypes.object.isRequired,
  type: Proptypes.string,
  id: Proptypes.number,
  optionWidth: Proptypes.string
};

function Pages({ data, type, id, optionWidth }) {
  const [listPage, setListPage] = useState([]);
  const [refCarouselThree, setRefCarouselThree] = useState(null);
  const lang = getLang();

  const getPageBlock = async pages => {
    const ids = map(pages, values => values.value);
    const res = await getPagesByIdService(ids);
    if (res && res.status === 200) {
      setListPage(res.data);
    }
  };

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

  const responsiveTwo = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  useEffect(() => {
    if (data.pages) {
      getPageBlock(data.pages);
    }
  }, [data.pages && id]);

  if (type && type === '1') {
    return (
      <div className={`${padding} block-page category-${type}`} id={id}>
        <div className="container">
          <div
            className={
              data.linkurl && data.linkurl !== ''
                ? 'entry-head text-center title-padding'
                : 'entry-head text-center'
            }
          >
            {data.title && <h2 className="ht">{data.title}</h2>}
            {data.linkurl !== undefined && data.linkurl !== '' && (
              <a className="viewall" href={data.linkurl}>
                {t('view')} <i className="icon-arrow-1"></i>
              </a>
            )}
          </div>
          <div className="list-5 row list-item">
            {map(listPage, item => (
              <div className="col-md-4" key={item.id}>
                <LinkPage lang={lang} name={item.slug}>
                  <a className="item">
                    <div className="img tRes_71">
                      <img
                        className="lazyload"
                        data-src={
                          item.baseImage === null
                            ? `/images/imgdefault.jpg`
                            : `${process.env.DOMAIN}${item.baseImage}`
                        }
                        alt="icon"
                      />
                    </div>
                    <div className="divtext">
                      <h4 className="title">{item.name}</h4>
                      <div className="desc line4">{item.meta_description}..</div>
                    </div>
                  </a>
                </LinkPage>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (type && type === '2') {
    return (
      <div className="container" id={id}>
        <section className={`${padding} block-page block-type-2 category-${type}`}>
          <div
            className={
              data.linkurl && data.linkurl !== ''
                ? 'entry-head text-center title-padding'
                : 'entry-head text-center'
            }
          >
            <h2 className="ht styleht">{data.title}</h2>
            {data.linkurl !== undefined && data.linkurl !== '' && (
              <a className="viewall" href={data.linkurl}>
                {t('view')} <i className="icon-arrow-1"></i>
              </a>
            )}
          </div>
          <div className="list-7 list-item row">
            {map(listPage, item => (
              <div className="col-md-6" key={item.newsId}>
                <LinkPage lang={lang} name={item.slug}>
                  <a className="item item-inline-table style-colummb">
                    <div className="img">
                      <img
                        className="lazyload"
                        data-src={
                          item.baseImage === null
                            ? `/images/imgdefault.jpg`
                            : `${process.env.DOMAIN}${item.baseImage}`
                        }
                        alt="icon"
                      />
                    </div>
                    <div className="divtext">
                      <h4 className="title line2">{item.name}</h4>
                      <div className="desc line4">{item.meta_description}..</div>
                    </div>
                  </a>
                </LinkPage>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (type && type === '3') {
    return (
      <section className={`${padding} sec-related bg-gray category-${type}`} id={id}>
        <div className="container">
          <div
            className={
              data.linkurl && data.linkurl !== ''
                ? 'entry-head text-center title-padding'
                : 'entry-head text-center'
            }
          >
            <h2 className="ht">{data.title}</h2>
            {data.linkurl !== undefined && data.linkurl !== '' && (
              <a className="viewall" href={data.linkurl}>
                {t('view')} <i className="icon-arrow-1"></i>
              </a>
            )}
          </div>
          <div className="convert-grid-to-scroll">
            <div className="list-7 list-item row">
              {map(listPage, (values, index) => (
                <div key={index} className="col-md-6">
                  <LinkPage lang={lang} name={values.slug}>
                    <a className="item item-inline-table">
                      <div className="img">
                        <img
                          className="lazyload"
                          data-src={
                            values.baseImage === null
                              ? `/images/imgdefault.jpg`
                              : `${process.env.DOMAIN}${values.baseImage}`
                          }
                          alt="icon"
                        />
                      </div>
                      <div className="divtext">
                        <h4 className="title line2">{values.name}</h4>
                        <div className="desc line4">{values.meta_description}</div>
                      </div>
                    </a>
                  </LinkPage>
                </div>
              ))}
            </div>
          </div>
          <div className="tags">
            {map(data.listTag, (values, index) => (
              <LinkPage key={index} lang={lang} name={values.url}>
                <a className="tag">{values.name}</a>
              </LinkPage>
            ))}
          </div>
        </div>
      </section>
    );
  }
  if (type && type === '4') {
    return (
      <section className={`${padding} bg-gray category-${type}`} id={id}>
        <div className="container">
          <div className="max750"></div>
          <div
            className={
              data.linkurl && data.linkurl !== ''
                ? 'entry-head text-center title-padding'
                : 'entry-head text-center'
            }
          >
            <h2 className="ht text-center">{data.title}</h2>
            {data.linkurl !== undefined && data.linkurl !== '' && (
              <a className="viewall" href={data.linkurl}>
                {t('view')} <i className="icon-arrow-1"></i>
              </a>
            )}
          </div>
          <ul className="cols-2 link2">
            {map(listPage, (values, index) => (
              <li key={index}>
                <LinkPage name={values.slug} lang={lang}>
                  <a>{values.name}</a>
                </LinkPage>
              </li>
            ))}
          </ul>
          <div className="tags">
            {map(data.listTag, (values, index) => (
              <LinkPage key={index} name={values.url} lang={lang}>
                <a className="tag">{values.name}</a>
              </LinkPage>
            ))}
          </div>
        </div>
      </section>
    );
  }
  if (type && type === '5') {
    return (
      <section className={` ${padding} sec-cauhoi category-${type} `} id={id}>
        <div className="container">
          <div
            className={
              data.linkurl && data.linkurl !== '' ? 'entry-head title-padding' : 'entry-head'
            }
          >
            <h2 className="ht ">{data === null ? '' : data.title}</h2>
            {data.linkurl !== undefined && data.linkurl !== '' && (
              <a className="viewall" href={data.linkurl}>
                {t('view')} <i className="icon-arrow-1"></i>
              </a>
            )}
          </div>
          <div className="wrap-carousel">
            <Carousel
              responsive={responsiveTwo}
              draggable
              minimumTouchDrag={80}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              keyBoardControl={true}
              className="list-5"
              arrows={false}
              ref={ref => {
                setRefCarouselThree(ref);
              }}
            >
              {map(listPage, (items, index) => (
                <div className="item ef-img-t item_carousel" key={index}>
                  <LinkPage name={items.slug} lang={lang}>
                    <a className="link">
                      <div className="img">
                        <img
                          className="lazyload"
                          data-src={
                            items.baseImage === null
                              ? `/images/imgdefault.jpg`
                              : `${process.env.DOMAIN}${items.baseImage}`
                          }
                          alt="images"
                        />
                      </div>
                      <div className="divtext">
                        <h4 className="title line2">{items.name}</h4>
                        <div className="desc line2 cl3">{items.meta_description}</div>
                      </div>
                    </a>
                  </LinkPage>
                </div>
              ))}
            </Carousel>
            <div className="carousel-nav center">
              <div
                className="carousel-prev "
                onClick={() => {
                  refCarouselThree.previous();
                }}
              >
                <i className="icon-arrow-1 ix"></i>
              </div>
              <div
                className="carousel-next"
                onClick={() => {
                  refCarouselThree.next();
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
  if (type && type === '6') {
    return (
      <section className={`${padding} category-${type}`} id={id}>
        <div className="container">
          <div
            className={
              data.linkurl && data.linkurl !== '' ? 'entry-head title-padding' : 'entry-head'
            }
          >
            <h2 className="ht ">{data === null ? '' : data.title}</h2>
            {data.linkurl !== undefined && data.linkurl !== '' && (
              <a className="viewall" href={data.linkurl}>
                {t('view')} <i className="icon-arrow-1"></i>
              </a>
            )}
          </div>
          <div className="accodion accodion-1 accodion-1-1">
            {map(data.listTag, (value, index) => (
              <CustomPageItem data={value} indexTab={index} key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }
  return null;
}
Pages.propTypes = propTypes;

export default Pages;
