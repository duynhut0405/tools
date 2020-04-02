import React, { useState, useEffect } from 'react';
import { map } from 'lodash';
import Proptypes from 'prop-types';
import { getPagesByIdService } from '../../services/page';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-multi-carousel';
import CustomPageItem from './BlockPageItem/CustomPageItem';
const propTypes = {
  data: Proptypes.object.isRequired,
  type: Proptypes.string,
  id: Proptypes.number
};

function Pages({ data, type, id }) {
  const [listPage, setListPage] = useState([]);
  const [refCarouselThree, setRefCarouselThree] = useState(null);
  const getPageBlock = async () => {
    const ids = map(data.pages, values => values.value);
    const res = await getPagesByIdService(ids);
    if (res && res.status === 200) {
      setListPage(res.data);
    }
  };
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
      getPageBlock();
    }
  }, []);
  const { t } = useTranslation();

  if (type && type === '1') {
    return (
      <div className="sec-tb block-page" id={id}>
        <div className="container">
          <div className="entry-head text-center">
            {data.title && <h2 className="ht">{data.title}</h2>}
          </div>
          <div className="list-5 row list-item">
            {map(listPage, item => (
              <div className="col-md-4" key={item.id}>
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
      <section className="sec-tb bg-gray" id={id}>
        <div className="container">
          <h2 className="ht">{data.title}</h2>
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
                <a href={`/page/${values.slug}`}>{values.name}</a>
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
  if (type && type === '5') {
    return (
      <section className=" sec-b sec-cauhoi ">
        <div className="container">
          <div className="entry-head">
            <h2 className="ht ">{data === null ? '' : data.title}</h2>
          </div>
          <div className="accodion-content entry-content wrap-carousel">
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
                  <a href={`/page/${items.slug}`} className="link">
                    <div className="img">
                      <img src={items.baseImage} />
                    </div>
                    <div className="divtext">
                      <h4 className="title line2">{items.name}</h4>
                      <div className="desc line2 cl3">{items.meta_description}</div>
                    </div>
                  </a>
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
      <section>
        <div className="container">
          <div className="entry-head">
            <h2 className="ht ">{data === null ? '' : data.title}</h2>
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
}
Pages.propTypes = propTypes;

export default Pages;
