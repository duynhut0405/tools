import React, { useState, useEffect } from 'react';
import { map } from 'lodash';
import Proptypes from 'prop-types';
import { getPagesByIdService } from '../../services/page';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-multi-carousel';
const propTypes = {
  data: Proptypes.object.isRequired,
  type: Proptypes.string,
  id: Proptypes.number
};

function Pages({ data, type, id }) {
  // const [page] = useState(3);
  const [listPage, setListPage] = useState([]);
  const [refCarouselTwo, setRefCarouselTwo] = useState(null);
  const [refCarouselThree, setRefCarouselThree] = useState(null);
  const [active, setActive] = useState(false);
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
          <div className="accodion-content entry-content">
            <div className="owl-carousel equalHeight s-nav nav-2 list-5 owl-loaded owl-drag ">
              <div className="owl-stage-outer">
                <div className="owl-stage">
                  <Carousel
                    responsive={responsiveTwo}
                    draggable
                    minimumTouchDrag={80}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    keyBoardControl={true}
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
                </div>
              </div>
              <div className="owl-nav">
                <div
                  className="owl-prev disabled"
                  onClick={() => {
                    refCarouselThree.previous();
                  }}
                >
                  <i className="icon-arrow-1 ix"></i>
                </div>
                <div
                  className="owl-next"
                  onClick={() => {
                    refCarouselThree.next();
                  }}
                >
                  <i className="icon-arrow-1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (type && type === '6') {
    return (
      <section className=" sec-b sec-cauhoi sec-padding">
        <div className="container">
          <div className="entry-head">
            <h2 className="ht ">{data === null ? '' : data.title}</h2>
          </div>
          <div className="accodion accodion-1">
            <div className="accodion-tab ">
              <input type="checkbox" checked={active} />
              <label className="accodion-title" onClick={() => setActive(!active)}>
                <span>{data === null ? '' : data.description}</span>
                <span className="triangle">
                  <i className="icon-plus"></i>
                </span>
              </label>
              <div className="accodion-content entry-content">
                <div className="owl-carousel equalHeight s-nav nav-2 list-5 owl-loaded owl-drag ">
                  <div className="owl-stage-outer">
                    <div className="owl-stage">
                      <Carousel
                        responsive={responsiveTwo}
                        draggable
                        minimumTouchDrag={80}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        keyBoardControl={true}
                        arrows={false}
                        ref={ref => {
                          setRefCarouselTwo(ref);
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
                    </div>
                  </div>
                  <div className="owl-nav">
                    <div
                      className="owl-prev disabled"
                      onClick={() => {
                        refCarouselTwo.previous();
                      }}
                    >
                      <i className="icon-arrow-1 ix"></i>
                    </div>
                    <div
                      className="owl-next"
                      onClick={() => {
                        refCarouselTwo.next();
                      }}
                    >
                      <i className="icon-arrow-1"></i>
                    </div>
                  </div>
                  <div className="owl-dots disabled"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
Pages.propTypes = propTypes;

export default Pages;
