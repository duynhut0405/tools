import React, { useState } from "react";
import map from "lodash/map";
import Proptypes from "prop-types";
import Carousel from "react-multi-carousel";
import UseWindowResize from "../common/Resize";
import t from "../../translation";
import ReactHtmlParser from "react-html-parser";
import Link from "next/link";
import { getLang } from "../../utils/cookie";
import { LinkPage } from "../common/link";
import { useRouter } from "next/router";

const propTypes = {
  data: Proptypes.array,
  id: Proptypes.number,
};

function Icon({ data, id }) {
  const [refCarousel, setRefCarousel] = useState(null);
  const size = UseWindowResize();
  const haftFirstData = data.slice(0, data.length / 2);
  const haftSecondData = data.slice(data.length / 2, data.length + 1);
  const lang = getLang();
  const column = data.length === 4 ? "3" : 4;
  const router = useRouter();
  const [active_title, setAciveTitle] = useState(true);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const responsive1 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const responsive3 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const responsive4 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const responsive5 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  let padding = "";
  if (data[0].optionWidth === "2") {
    padding = "sec-tb";
  } else if (data[0].optionWidth === "3") {
    padding = "sec-t";
  } else if (data[0].optionWidth === "4") {
    padding = "sec-b";
  } else {
    padding = "sec-";
  }

  return (
    <React.Fragment>
      {data[0].type === "1" && (
        <React.Fragment>
          {data.length > 8 && (
            <section
              className={`${padding} sec-h-1 group-ef block-icon-${data[0].type}`}
              id={id}
            >
              <div className="container">
                <div className="entry-head text-center">
                  <h2 className="ht">{data === null ? "" : data[0].title}</h2>
                </div>
                {size.width >= 768 && (
                  <div className="sec-b wrap-carousel">
                    <Carousel
                      responsive={responsive}
                      draggable
                      minimumTouchDrag={80}
                      ssr={true} // means to render carousel on server-side.
                      infinite={true}
                      keyBoardControl={true}
                      className="menuicon"
                      arrows={false}
                      ref={(ref) => {
                        setRefCarousel(ref);
                      }}
                    >
                      {map(data, (items, index) => (
                        <div
                          className="item ef-img-t item_carousel"
                          key={index}
                        >
                          <a
                            href={items.url ? items.url : "#"}
                            className="link"
                          >
                            <div className="img">
                              <img
                                className="lazyload"
                                alt="icon"
                                data-src={`${process.env.DOMAIN}${items.urlImage}`}
                              />
                            </div>
                            <div className="title">{items.note_1}</div>
                          </a>
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
                )}
                {size.width < 768 && (
                  <div>
                    {map(data, (items, index) => (
                      <div className="item ef-img-t item_carousel" key={index}>
                        <a href={items.url ? items.url : "#"} className="link">
                          <div className="img">
                            <img
                              className="lazyload"
                              alt="icon"
                              data-src={`${process.env.DOMAIN}${items.urlImage}`}
                            />
                          </div>
                          <div className="title">{items.note_1}</div>
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}
          {data.length <= 8 && (
            <section
              className={`${padding} sec-h-1  loaded block-icon-${data[0].type}`}
              id={id}
            >
              <div className="container">
                <div className="entry-head text-center">
                  <h2 className="ht efch-1 ef-img-t">
                    {data === null ? "" : data[0].title}
                  </h2>
                </div>
                <div className="menuicon">
                  {map(data, (items, index) => (
                    <div
                      className={`item  efch-${index + 3} ef-img-t`}
                      key={index}
                    >
                      <a href={items.url} className="link">
                        <div className="img">
                          <img
                            className="lazyload"
                            alt="images"
                            data-src={`${process.env.DOMAIN}${items.urlImage}`}
                          />
                        </div>
                        <div className="title">{items.note_1}</div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </React.Fragment>
      )}
      {data[0].type === "2" && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg group-ef loaded block-icon-${data[0].type}`}
            id={id}
          >
            <div className="container">
              <div className="entry-head text-center">
                <h2 className="ht">{data === null ? "" : data[0].title}</h2>
              </div>

              {Number(data[0].column) === 6 && (
                <div className="max750">
                  <div className="row list-item">
                    {map(data, (items, index) => {
                      return (
                        <div
                          className={`col-sm-6 col-md-${data[0].column}`}
                          key={index}
                        >
                          <div className="item">
                            <a href={items.url ? items.url : "#"}>
                              <div className="img">
                                <img
                                  className="lazyload"
                                  alt="images"
                                  data-src={`${process.env.DOMAIN}${items.urlImage}`}
                                />
                              </div>
                              <div className="divtext">
                                <h4 className="title">{items.note_1}</h4>
                                <div className="desc">{items.note_2}</div>
                              </div>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {Number(data[0].column) !== 6 && (
                <div className="row list-item">
                  {map(data, (items, index) => {
                    return (
                      <div
                        className={`col-sm-6 col-md-${data[0].column}`}
                        key={index}
                      >
                        <div className="item">
                          <a href={items.url ? items.url : "#"}>
                            <div className="img">
                              <img
                                className="lazyload"
                                alt="images"
                                data-src={`${process.env.DOMAIN}${items.urlImage}`}
                              />
                            </div>
                            <div className="divtext">
                              <h4 className="title">{items.note_1}</h4>
                              <div className="desc">{items.note_2}</div>
                            </div>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "3" && (
        <React.Fragment>
          <section
            className={`${padding} sec-h-3 block-icon-${data[0].type}`}
            id={id}
          >
            <div className="container">
              <div className="entry-head">
                <h2 className="ht efch-1 ef-img-t">
                  {data === null ? "" : data[0].title}
                </h2>
              </div>
              {size.width >= 768 && (
                <div className="sec-b wrap-carousel">
                  <Carousel
                    responsive={responsive1}
                    draggable
                    minimumTouchDrag={80}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    keyBoardControl={true}
                    className="list-9"
                    arrows={false}
                    renderButtonGroupOutside={true}
                    ref={(ref) => {
                      setRefCarousel(ref);
                    }}
                  >
                    {map(data, (item, index) => (
                      <div
                        className={`item efch-${index + 2} ef-img-l `}
                        key={index}
                      >
                        <a href={item.url}>
                          <div className="img">
                            <img
                              className="lazyload"
                              alt="images"
                              data-src={`${process.env.DOMAIN}${item.urlImage}`}
                              style={{ width: "160px", height: "52px" }}
                            />
                          </div>
                          <div className="des">{item.note_1}</div>
                        </a>
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
              )}
              {size.width < 768 && (
                <div className="list-9 list-item">
                  {map(data, (item, index) => (
                    <a
                      href={item.url}
                      className={`item efch-${index + 2} ef-img-l `}
                      key={index}
                    >
                      <div className="img">
                        <img
                          className="lazyload"
                          alt="images"
                          data-src={`${process.env.DOMAIN}${item.urlImage}`}
                        />
                      </div>
                      <div className="des">{item.note_1}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "4" && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg-2 group-ef loaded block-icon-${data[0].type}`}
            id={id}
          >
            <div className="container">
              <div className="entry-head">
                <h2 className="ht">{data === null ? "" : data[0].title}</h2>
              </div>
              <div className="row list-item">
                {map(data, (items, index) => {
                  return (
                    <div className="col-sm-4 efch-2 ef-img-t" key={index}>
                      <a
                        className="item"
                        href={items.url ? items.url : "#"}
                        style={{ padding: "40px 10px" }}
                      >
                        <div className="img ">
                          <img
                            className="lazyload"
                            alt="images"
                            data-src={`${process.env.DOMAIN}${items.urlImage}`}
                          />
                        </div>
                        <div className="divtext">
                          <h4 className="title">{items.note_2}</h4>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "5" && (
        <React.Fragment>
          <div
            className={`${padding} sec-img-svg-4 block-icon-${data[0].type}`}
            id={id}
          >
            <div className="container">
              <div className="entry-head">
                <h2 className="ht">{data === null ? "" : data[0].title}</h2>
              </div>
              <div className="row list-item">
                {map(data, (items, index) => {
                  return (
                    <div className="col-sm-4 efch-2 ef-img-t" key={index}>
                      <a className="item" href={items.url ? items.url : "#"}>
                        <div className="img ">
                          <img
                            className="lazyload"
                            alt="images"
                            data-src={`${process.env.DOMAIN}${items.urlImage}`}
                          />
                        </div>
                        <div className="divtext">
                          <h4 className="title">{items.note_2}</h4>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
      {data[0].type === "6" && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg-2 group-ef loaded block-icon-${data[0].type}`}
            id={id}
          >
            <div className="container">
              <div className="entry-head text-left">
                <h2 className="ht">{data === null ? "" : data[0].title}</h2>
              </div>
              {size.width >= 768 && (
                <div className="sec-b wrap-carousel">
                  <Carousel
                    responsive={responsive2}
                    draggable
                    minimumTouchDrag={80}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    keyBoardControl={true}
                    arrows={false}
                    className=""
                    ref={(ref) => {
                      setRefCarousel(ref);
                    }}
                  >
                    {map(data, (items, index) => (
                      <div className="item ef-img-t item_carousel" key={index}>
                        <a
                          href={items.url ? items.url : "#"}
                          className="link"
                          style={{
                            backgroundColor: "#F5F4F4",
                            boxShadow: "none",
                          }}
                        >
                          <div className="img">
                            <img
                              data-src={`${process.env.DOMAIN}${items.urlImage}`}
                              className="lazyload"
                              alt="images"
                            />
                          </div>
                          <div className="divtext">
                            <h4 className="title">{items.note_2}</h4>
                          </div>
                        </a>
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
              )}
              {size.width < 768 && (
                <div className="list-item">
                  {map(data, (items, index) => (
                    <div className="item ef-img-t item_carousel" key={index}>
                      <a
                        href={items.url ? items.url : "#"}
                        className="link"
                        style={{
                          backgroundColor: "#F5F4F4",
                          boxShadow: "none",
                        }}
                      >
                        <div className="img">
                          <img
                            data-src={`${process.env.DOMAIN}${items.urlImage}`}
                            className="lazyload"
                            alt="images"
                          />
                        </div>
                        <div
                          className="divtext"
                          style={{ paddingLeft: "20px" }}
                        >
                          <h3 className="title">{items.note_2}</h3>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "7" && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg-3 group-ef loaded block-icon-${data[0].type}`}
            id={id}
          >
            <div className="container">
              <div className="entry-head">
                <h2 className="ht">{data === null ? "" : data[0].title}</h2>
              </div>
              <div className="row equalHeight list-item">
                {map(data, (items, index) => {
                  return (
                    <div
                      className="col-sm-6 col-md-4 efch-2 ef-img-t"
                      key={index}
                    >
                      <a href={items.url ? items.url : "#"}>
                        <div className="item">
                          <div className="img ">
                            <img
                              className="lazyload"
                              alt="images"
                              data-src={`${process.env.DOMAIN}${items.urlImage}`}
                            />
                          </div>
                          <div className="divtext">
                            <h4
                              className="title equal"
                              style={{ textAlign: "center" }}
                            >
                              {items.note_1}
                            </h4>
                            <div
                              className="desc"
                              style={{ textAlign: "center" }}
                            >
                              {items.note_2}
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "8" && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg-3 group-ef loaded block-icon-${data[0].type}`}
            id={id}
          >
            <div className="container">
              <div className="entry-head">
                <h2 className="ht">{data === null ? "" : data[0].title}</h2>
              </div>
              <div className="row equalHeight list-item">
                {map(data, (items, index) => {
                  return (
                    <div
                      className={`col-sm-6 col-md-4 efch-2 ef-img-t`}
                      key={index}
                    >
                      <a href={items.url ? items.url : "#"}>
                        <div className="item">
                          <div
                            className="divtext"
                            style={{ paddingTop: "29px" }}
                          >
                            <h4
                              className="title equal"
                              style={{ textAlign: "center" }}
                            >
                              {items.note_1}
                            </h4>
                            <div
                              className="desc"
                              style={{ textAlign: "center" }}
                            >
                              {items.note_2}
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "9" && (
        <React.Fragment>
          <section className={`sec-b sec-n-h2  group-ef loaded`} id={id}>
            <div className="row grid-space-0">
              <div className="col-lg-4 efch-2 ef-img-t">
                {data && data[0] && data[0].urlImageBackGround ? (
                  <div
                    className="item item-1 loaded"
                    dataLazyType="bg"
                    dataLazySrc={data[0].imageBackGround}
                    style={{
                      backgroundImage: `url("${data[0].imageBackGround}")`,
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <div className="divtext" style={{ textAlign: "left" }}>
                      <div className="img" style={{ maxWidth: "65px" }}>
                        <img
                          className=" loaded loaded"
                          data-lazy-type="image"
                          dataLazySrc={data[0].image}
                          src={data[0].image}
                        />
                      </div>
                      <div
                        className="title"
                        style={{
                          color: "#A0D2FF",
                          marginBottom: "20px",
                          fontWeight: "600",
                        }}
                      >
                        {ReactHtmlParser(data[0].note_1)}
                      </div>
                      <div className="desc">
                        {ReactHtmlParser(data[0].note_2)}
                      </div>
                      <a
                        className="link link-custom-1"
                        href={data[0].url}
                        style={{ color: "#fff" }}
                      >
                        {t("discovery")}
                        <i
                          className="icon-arrow-1"
                          style={{ padding: "2px" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="col-lg-4 efch-2 ef-img-t">
                {data && data[1] && data[1].urlImageBackGround ? (
                  <div
                    className="item item-1 loaded"
                    dataLazyType="bg"
                    dataLazySrc={data[1].imageBackGround}
                    style={{
                      backgroundImage: `url("${data[1].imageBackGround}")`,
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <div className="divtext" style={{ textAlign: "left" }}>
                      <div className="img" style={{ maxWidth: "65px" }}>
                        <img
                          className=" loaded loaded"
                          data-lazy-type="image"
                          dataLazySrc={data[1].image}
                          src={data[1].image}
                        />
                      </div>
                      <div
                        className="title"
                        style={{
                          color: "#141ED2",
                          marginBottom: "20px",
                          fontWeight: "600",
                        }}
                      >
                        {ReactHtmlParser(data[1].note_1)}
                      </div>
                      <div className="desc" style={{ color: "#141ED2" }}>
                        {ReactHtmlParser(data[1].note_2)}
                      </div>
                      <a
                        className="link link-custom-2"
                        href={data[1].url}
                        style={{ color: "#141ED2" }}
                      >
                        {t("discovery")}
                        <i
                          className="icon-arrow-1"
                          style={{ padding: "2px" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="col-lg-4 efch-2 ef-img-t">
                {data && data[2] && data[2].urlImageBackGround ? (
                  <div
                    className="item item-1 loaded"
                    dataLazyType="bg"
                    dataLazySrc={data[2].imageBackGround}
                    style={{
                      backgroundImage: `url("${data[2].imageBackGround}")`,
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <div className="divtext" style={{ textAlign: "left" }}>
                      <div className="img" style={{ maxWidth: "65px" }}>
                        <img
                          className=" loaded loaded"
                          data-lazy-type="image"
                          dataLazySrc={data[2].image}
                          src={data[2].image}
                        />
                      </div>
                      <div
                        className="title"
                        style={{
                          color: "#141ED2",
                          marginBottom: "20px",
                          fontWeight: "600",
                        }}
                      >
                        {ReactHtmlParser(data[2].note_1)}
                      </div>
                      <div className="desc" style={{ color: "#141ED2" }}>
                        {ReactHtmlParser(data[2].note_2)}
                      </div>
                      <a
                        className="link link-custom-2"
                        href={data[2].url}
                        style={{ color: "#141ED2" }}
                      >
                        {t("discovery")}
                        <i
                          className="icon-arrow-1"
                          style={{ padding: "2px" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "10" && (
        <React.Fragment>
          <section
            className={`sec-menuicon2 group-ef next-shadow loaded`}
            id={id}
            style={{ padding: "10px 0" }}
          >
            <div
              className="container"
              style={{ maxHeight: "130px", padding: "inherit" }}
            >
              {size.width >= 1200 && (
                <div className="wrap-carousel max850 pc">
                  <Carousel
                    responsive={responsive3}
                    draggable
                    minimumTouchDrag={80}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    keyBoardControl={true}
                    className="list-9 menuicon2"
                    arrows={false}
                    renderButtonGroupOutside={true}
                    ref={(ref) => {
                      setRefCarousel(ref);
                    }}
                  >
                    {map(data, (item, index) => (
                      <a
                        className="link"
                        href={item.url}
                        style={{ minHeight: "110px" }}
                      >
                        <div className="img-custom-menu">
                          <img
                            className="lazyload"
                            alt="images"
                            data-src={`${process.env.DOMAIN}${item.urlImage}`}
                            style={{ maxHeight: "100%" }}
                          />
                        </div>
                        <div className="title">
                          {ReactHtmlParser(item.note_1)}
                        </div>
                      </a>
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
              )}
              {size.width >= 768 && size.width < 1200 && (
                <div className="wrap-carousel max850 pc">
                  <Carousel
                    responsive={responsive3}
                    draggable
                    minimumTouchDrag={80}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    keyBoardControl={true}
                    className="list-9 menuicon2"
                    arrows={false}
                    renderButtonGroupOutside={true}
                    ref={(ref) => {
                      setRefCarousel(ref);
                    }}
                  >
                    {map(data, (item, index) => (
                      <a
                        className="link"
                        href={item.url}
                        style={{ minHeight: "110px" }}
                      >
                        <div className="img-custom-menu">
                          <img
                            className="lazyload"
                            alt="images"
                            data-src={`${process.env.DOMAIN}${item.urlImage}`}
                            style={{ maxHeight: "100%" }}
                          />
                        </div>
                        <div className="title">
                          {ReactHtmlParser(item.note_1)}
                        </div>
                      </a>
                    ))}
                  </Carousel>
                  <div
                    className="carousel-nav-custom center"
                    style={{ left: "-20px", right: "-20px" }}
                  >
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
              )}
              {size.width < 768 && (
                <div
                  className="wrap-carousel pc"
                  style={{ padding: "10px 10px 10px" }}
                >
                  <Carousel
                    responsive={responsive3}
                    draggable
                    minimumTouchDrag={80}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    keyBoardControl={true}
                    className="list-9 menuicon2"
                    arrows={false}
                    renderButtonGroupOutside={true}
                    ref={(ref) => {
                      setRefCarousel(ref);
                    }}
                  >
                    {map(data, (item, index) => (
                      <a
                        className="link"
                        href={item.url}
                        style={{ minHeight: "110px" }}
                      >
                        <div className="img-custom-menu">
                          <img
                            className="lazyload"
                            alt="images"
                            data-src={`${process.env.DOMAIN}${item.urlImage}`}
                            style={{ maxHeight: "100%" }}
                          />
                        </div>
                        <div className="title">
                          {ReactHtmlParser(item.note_1)}
                        </div>
                      </a>
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
              )}
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "11" && (
        <React.Fragment>
          <section
            className={`sec-menuicon2 group-ef next-shadow loaded`}
            id={id}
            style={{ padding: "10px 0" }}
          >
            <div
              className="container"
              style={{ minHeight: "121px", padding: "inherit" }}
            >
              {size.width >= 768 && (
                <div className="list-9 list-item max850 pc row">
                  {map(data, (item, index) => (
                    <div className="col">
                      <a
                        className="link"
                        href={item.url}
                        style={{ minHeight: "121px" }}
                      >
                        <div className="img-custom-menu">
                          <img
                            className="lazyload"
                            alt="images"
                            data-src={`${process.env.DOMAIN}${item.urlImage}`}
                            style={{ maxHeight: "100%" }}
                          />
                        </div>
                        <div className="title-custom-2">
                          {ReactHtmlParser(item.note_1)}
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              )}
              {size.width < 768 && (
                <div className="list-9 list-item max850 pc row">
                  {map(data, (item, index) => (
                    <div className="col">
                      <a
                        className="link"
                        href={item.url}
                        style={{ minHeight: "121px" }}
                      >
                        <div className="img-custom-menu">
                          <img
                            className="lazyload"
                            alt="images"
                            data-src={`${process.env.DOMAIN}${item.urlImage}`}
                            style={{ maxHeight: "100%" }}
                          />
                        </div>
                        <div className="title-custom-2">
                          {ReactHtmlParser(item.note_1)}
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "12" && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg group-ef loaded block-icon-${data[0].type}`}
            id={id}
          >
            <div className="question" style={{ backgroundColor: "unset" }}>
              <div className="container">
                <div className="accodion-tab">
                  <input
                    id={`checkbox_${id}`}
                    type="checkbox"
                    checked={active_title}
                    onClick={() => setAciveTitle(!active_title)}
                  />
                  <label
                    htmlFor={`checkbox_${id}`}
                    className="entry-head text-center block-question-index"
                  >
                    <h2 className="ht ">{data[0].title || ""}</h2>
                    <span className="triangle">
                      <i className="icon-plus"></i>
                    </span>
                  </label>
                  <div
                    className="accodion-content entry-content"
                    style={{ marginTop: "-17px" }}
                  >
                    <div className="inner-full">
                      <div className="accodion accodion-1 accodion-1-3">
                        <div className="row">
                          {map(data, (item, index) => (
                            <div
                              className={`col-md-${column}`}
                              style={{ paddingBottom: "20px" }}
                            >
                              <div className="item group-custom-1">
                                <div className="divtext">
                                  <h4
                                    className="title"
                                    style={{ textTransform: "none" }}
                                  >
                                    {item.note_1}
                                  </h4>
                                  <div className="detail-custom-1">
                                    {item.note_2}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "13" && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg group-ef loaded block-icon-${data[0].type}`}
            id={id}
          >
            <div className="container">
              <div className="">
                <div className="row">
                  <div className="col-md-6" style={{ marginBottom: "20px" }}>
                    <div
                      className="item group-custom-1"
                      style={{ backgroundColor: "#e0f0ff" }}
                    >
                      <div className="title-has-line-custom">
                        <h2
                          className="ht"
                          style={{ fontSize: "14px", marginBottom: "5px" }}
                        >
                          {data === null ? "" : data[0].title}
                        </h2>
                      </div>
                      {map(haftFirstData, (item, index) => (
                        <div style={{ height: "150px", marginBottom: "10px" }}>
                          <h4
                            className="title"
                            style={{ textTransform: "none" }}
                          >
                            {item.note_1}
                          </h4>
                          <div
                            className="detail-custom-1"
                            style={{ maxHeight: "110px", overflow: "hidden" }}
                          >
                            {item.note_2}
                          </div>
                        </div>
                      ))}
                      <Link
                        href={
                          data[0].url_group_1 !== null ||
                          data[0].url_group_1 !== undefined
                            ? data[0].url_group_1
                            : "#"
                        }
                        prefetch={false}
                      >
                        <a className="link">
                          <p
                            className="viewmore-custom"
                            style={{ marginBottom: "0px" }}
                          >
                            {t("viewmore")} +
                          </p>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6" style={{ paddingBottom: "20px" }}>
                    <div className="item group-custom-1">
                      <div className="title-has-line-custom">
                        <h2
                          className="ht"
                          style={{ fontSize: "14px", marginBottom: "5px" }}
                        >
                          {data === null ? "" : data[0].title_2}
                        </h2>
                      </div>
                      {map(haftSecondData, (item, index) => (
                        <div style={{ height: "150px", marginBottom: "10px" }}>
                          <h4
                            className="title"
                            style={{ textTransform: "none" }}
                          >
                            {item.note_1}
                          </h4>
                          <div
                            className="detail-custom-1"
                            style={{ maxHeight: "110px", overflow: "hidden" }}
                          >
                            {item.note_2}
                          </div>
                        </div>
                      ))}
                      <Link
                        href={
                          data[0].url_group_2 !== null ||
                          data[0].url_group_2 !== undefined
                            ? data[0].url_group_2
                            : "#"
                        }
                        prefetch={false}
                      >
                        <a className="link">
                          <p
                            className="viewmore-custom"
                            style={{ marginBottom: "0px" }}
                          >
                            {t("viewmore")} +
                          </p>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "14" && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg group-ef loaded block-icon-${data[0].type}`}
            id={id}
          >
            <div className="container">
              <div className="entry-head text-center">
                <h2
                  className="ht"
                  style={{
                    borderBottom: "1px solid #d6d6d6",
                    paddingBottom: "10px",
                  }}
                >
                  {data === null ? "" : data[0].title}
                </h2>
              </div>

              <div className="row list-item">
                {map(data, (items, index) => {
                  return (
                    <div className={`col-sm-6 col-md-${column}`} key={index}>
                      <div className="item" style={{ textAlign: "left" }}>
                        <a href={items.url ? items.url : "#"}>
                          <div className="img">
                            <img
                              className="lazyload"
                              alt="images"
                              data-src={`${process.env.DOMAIN}${items.urlImage}`}
                            />
                          </div>
                          <div className="divtext">
                            <h4
                              className="title"
                              style={{ textTransform: "none" }}
                            >
                              {items.note_1}
                            </h4>
                            <div className="desc">{items.note_2}</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "15" && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg group-ef loaded block-icon-${data[0].type}`}
            id={id}
          >
            <div className="question" style={{ backgroundColor: "unset" }}>
              <div className="container">
                <div className="accodion-tab">
                  <input
                    id={`checkbox_${id}`}
                    type="checkbox"
                    checked={active_title}
                    onClick={() => setAciveTitle(!active_title)}
                  />
                  <label
                    htmlFor={`checkbox_${id}`}
                    className="entry-head text-center block-question-index"
                  >
                    <h2 className="ht ">{data[0].title || ""}</h2>
                    <span className="triangle">
                      <i className="icon-plus"></i>
                    </span>
                  </label>
                  <div
                    className="accodion-content entry-content"
                    style={{ marginTop: "-17px" }}
                  >
                    <div className="inner-full">
                      <div className="accodion accodion-1 accodion-1-3">
                        <div className="row">
                          {map(data, (item, index) => (
                            <div
                              className={`col-md-${column}`}
                              style={{ paddingBottom: "50px" }}
                            >
                              <div
                                style={{
                                  paddingBottom: "20px",
                                  padding: "30px",
                                  height: "120%",
                                  textAlign: "left",
                                  backgroundColor: "#e0f0ff",
                                  borderRadius: "5px",
                                  position: "relative",
                                  minHeight: "200px",
                                }}
                              >
                                <h4
                                  className="title"
                                  style={{ textTransform: "none" }}
                                >
                                  {item.note_1}
                                </h4>
                                <div className="detail-custom-1">
                                  {item.note_2}
                                </div>
                                <div
                                  style={{
                                    width: "46px",
                                    height: "46px",
                                    position: "absolute",
                                    right: "30px",
                                    bottom: "30px",
                                  }}
                                >
                                  <img
                                    className="lazyload"
                                    alt="images"
                                    data-src={`${process.env.DOMAIN}${item.urlImage}`}
                                    style={{ maxHeight: "100%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "16" && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg group-ef loaded block-icon-${data[0].type}`}
            id={id}
          >
            <div className="question" style={{ backgroundColor: "unset" }}>
              <div className="container">
                <div className="accodion-tab">
                  <input
                    id={`checkbox_${id}`}
                    type="checkbox"
                    checked={active_title}
                    onClick={() => setAciveTitle(!active_title)}
                  />
                  <label
                    htmlFor={`checkbox_${id}`}
                    className="entry-head text-center block-question-index"
                  >
                    <h2 className="ht ">{data[0].title || ""}</h2>
                    <span className="triangle">
                      <i className="icon-plus"></i>
                    </span>
                  </label>
                  <div
                    className="accodion-content entry-content"
                    style={{ marginTop: "-17px" }}
                  >
                    <div className="inner-full">
                      <div className="accodion accodion-1 accodion-1-3">
                        <div className="row list-item">
                          {map(data, (items, index) => {
                            return (
                              <div
                                className={`col-sm-6 col-md-${column}`}
                                key={index}
                              >
                                <div
                                  className="item"
                                  style={{
                                    paddingBottom: "30px",
                                    padding: "30px",
                                    height: "100%",
                                    textAlign: "left",
                                    backgroundColor: "#f3f3ff",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <a href={items.url ? items.url : "#"}>
                                    <div className="img">
                                      <img
                                        className="lazyload"
                                        alt="images"
                                        data-src={`${process.env.DOMAIN}${items.urlImage}`}
                                      />
                                    </div>
                                    <div className="divtext">
                                      <h4
                                        className="title"
                                        style={{ textTransform: "none", color: "#333333" }}
                                      >
                                        {items.note_1}
                                      </h4>
                                      <div className="detail-custom-1">
                                        {items.note_2}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "17" && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg group-ef loaded block-icon-${data[0].type}`}
            id={id}
          >
            <div className="question" style={{ backgroundColor: "unset" }}>
              <div className="container">
                <div className="accodion-tab">
                  <input
                    id={`checkbox_${id}`}
                    type="checkbox"
                    checked={active_title}
                    onClick={() => setAciveTitle(!active_title)}
                  />
                  <label
                    htmlFor={`checkbox_${id}`}
                    className="entry-head text-center block-question-index"
                  >
                    <h2 className="ht ">{data[0].title || ""}</h2>
                    <span className="triangle">
                      <i className="icon-plus"></i>
                    </span>
                  </label>
                  <div
                    className="accodion-content entry-content"
                    style={{ marginTop: "-17px" }}
                  >
                    <div className="inner-full">
                      <div className="accodion accodion-1 accodion-1-3">
                        <div className="row list-item">
                          {map(data, (items, index) => {
                            return (
                              <div
                                className={`col-sm-6 col-md-${column}`}
                                key={index}
                              >
                                <div
                                  className="item"
                                  style={{
                                    paddingBottom: "30px",
                                    padding: "30px",
                                    height: "100%",
                                    textAlign: "left",
                                    backgroundColor: "#141ED2",
                                    color: "#fff",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <a href={items.url ? items.url : "#"}>
                                    <div
                                      className="img"
                                      style={{ color: "#fff" }}
                                    >
                                      <img
                                        className="lazyload"
                                        alt="images"
                                        data-src={`${process.env.DOMAIN}${items.urlImage}`}
                                      />
                                    </div>
                                    <div className="divtext">
                                      <h4
                                        className="title"
                                        style={{
                                          textTransform: "none",
                                          color: "#fff",
                                        }}
                                      >
                                        {items.note_1}
                                      </h4>
                                      <div
                                        className="desc"
                                        style={{ color: "#fff" }}
                                      >
                                        {items.note_2}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "18" && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg group-ef loaded block-icon-${data[0].type}`}
            id={id}
          >
            <div className="question" style={{ backgroundColor: "unset" }}>
              <div className="container">
                <div className="accodion-tab">
                  <input
                    id={`checkbox_${id}`}
                    type="checkbox"
                    checked={active_title}
                    onClick={() => setAciveTitle(!active_title)}
                  />
                  <label
                    htmlFor={`checkbox_${id}`}
                    className="entry-head text-center block-question-index"
                  >
                    <h2 className="ht ">{data[0].title || ""}</h2>
                    <span className="triangle">
                      <i className="icon-plus"></i>
                    </span>
                  </label>
                  <div
                    className="accodion-content entry-content"
                    style={{ marginTop: "-17px" }}
                  >
                    <div className="inner-full">
                      <div className="accodion accodion-1 accodion-1-3">
                        <div className="row list-item">
                          {map(data, (items, index) => {
                            return (
                              <div
                                className={`col-sm-6 col-md-${column}`}
                                key={index}
                              >
                                <div
                                  className="item"
                                  style={{
                                    paddingBottom: "30px",
                                    padding: "30px",
                                    height: "100%",
                                    textAlign: "left",
                                    backgroundColor:
                                      index % 2 == 0 ? "#e0f0ff" : "#f3f3ff",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <a href={items.url ? items.url : "#"}>
                                    <div className="img">
                                      <img
                                        className="lazyload"
                                        alt="images"
                                        data-src={`${process.env.DOMAIN}${items.urlImage}`}
                                      />
                                    </div>
                                    <div className="divtext">
                                      <h4
                                        className="title"
                                        style={{ textTransform: "none", color: "#333333" }}
                                      >
                                        {items.note_1}
                                      </h4>
                                      <div className="detail-custom-1">
                                        {items.note_2}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "19" && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg group-ef loaded block-icon-${data[0].type}`}
            id={id}
          >
            <div className="question" style={{ backgroundColor: "unset" }}>
              <div className="container">
                <div className="accodion-tab">
                  <input
                    id={`checkbox_${id}`}
                    type="checkbox"
                    checked={active_title}
                    onClick={() => setAciveTitle(!active_title)}
                  />
                  <label
                    htmlFor={`checkbox_${id}`}
                    className="entry-head text-center block-question-index"
                  >
                    <h2 className="ht ">{data[0].title || ""}</h2>
                    <span className="triangle">
                      <i className="icon-plus"></i>
                    </span>
                  </label>
                  <div
                    className="accodion-content entry-content"
                    style={{ marginTop: "-17px" }}
                  >
                    <div className="inner-full">
                      <div className="accodion accodion-1 accodion-1-3">
                        <div className="row list-item">
                          {map(data, (items, index) => {
                            return (
                              <div
                                className={`col-sm-6 col-md-${column}`}
                                key={index}
                              >
                                <div
                                  className="item"
                                  style={{
                                    paddingBottom: "30px",
                                    padding: "30px",
                                    height: "100%",
                                    textAlign: "left",
                                    backgroundColor:
                                      index % 2 == 0 ? "#e0f0ff" : "#f3f3ff",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <a href={items.url ? items.url : "#"}>
                                    <div className="img">
                                      <div className="circle-custom">
                                        {index <= 9
                                          ? `0${index + 1}`
                                          : `${index + 1}`}
                                      </div>
                                    </div>
                                    <div className="divtext">
                                      <h4
                                        className="title"
                                        style={{ textTransform: "none", color:"#333333"}}
                                      >
                                        {items.note_1}
                                      </h4>
                                      <div className="detail-custom-1">
                                        {items.note_2}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "20" && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg group-ef loaded block-icon-${data[0].type}`}
            id={id}
          >
            <div className="question" style={{ backgroundColor: "unset" }}>
              <div className="container">
                <div className="accodion-tab">
                  <input
                    id={`checkbox_${id}`}
                    type="checkbox"
                    checked={active_title}
                    onClick={() => setAciveTitle(!active_title)}
                  />
                  <label
                    htmlFor={`checkbox_${id}`}
                    className="entry-head text-center block-question-index"
                  >
                    <h2 className="ht ">{data[0].title || ""}</h2>
                    <span className="triangle">
                      <i className="icon-plus"></i>
                    </span>
                  </label>
                  <div
                    className="accodion-content entry-content"
                    style={{ marginTop: "-17px" }}
                  >
                    <div className="inner-full">
                      <div className="accodion accodion-1 accodion-1-3">
                        <div className="wrap-carousel pc">
                          <Carousel
                            responsive={responsive4}
                            draggable
                            minimumTouchDrag={80}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            keyBoardControl={true}
                            className="list-9 menuicon2"
                            arrows={false}
                            renderButtonGroupOutside={true}
                            ref={(ref) => {
                              setRefCarousel(ref);
                            }}
                          >
                            {map(data, (item, index) => (
                              <div className="gray-background-custom">
                                <a
                                  className="link"
                                  href={item.url}
                                  style={{ minHeight: "110px" }}
                                >
                                  <div className="img-custom-menu">
                                    <img
                                      className="lazyload"
                                      alt="images"
                                      data-src={`${process.env.DOMAIN}${item.urlImage}`}
                                      style={{ maxHeight: "100%" }}
                                    />
                                  </div>
                                  <div
                                    className="title-gray-custom"
                                    style={{ textTransform: "none" }}
                                  >
                                    {ReactHtmlParser(item.note_1)}
                                  </div>
                                </a>
                              </div>
                            ))}
                          </Carousel>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "21" && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg group-ef loaded block-icon-${data[0].type}`}
            id={id}
          >
            <div className="question" style={{ backgroundColor: "unset" }}>
              <div className="container">
                <div className="accodion-tab">
                  <input
                    id={`checkbox_${id}`}
                    type="checkbox"
                    checked={active_title}
                    onClick={() => setAciveTitle(!active_title)}
                  />
                  <label
                    htmlFor={`checkbox_${id}`}
                    className="entry-head text-center block-question-index"
                  >
                    <h2 className="ht ">{data[0].title || ""}</h2>
                    <span className="triangle">
                      <i className="icon-plus"></i>
                    </span>
                  </label>
                  <div
                    className="accodion-content entry-content"
                    style={{ marginTop: "-17px" }}
                  >
                    <div className="inner-full">
                      <div className="accodion accodion-1 accodion-1-3">
                        <div className="row list-item">
                          {map(data, (items, index) => {
                            return (
                              <div
                                className={`col-sm-6 col-md-${column}`}
                                key={index}
                              >
                                <div className="gray-background-custom-2">
                                  <a href={items.url ? items.url : "#"}>
                                    <div
                                      className="title"
                                      style={{ textTransform: "none" }}
                                    >
                                      {ReactHtmlParser(items.note_1)}
                                    </div>
                                  </a>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "22" && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg group-ef loaded block-icon-${data[0].type}`}
            id={id}
          >
            <div className="question" style={{ backgroundColor: "unset" }}>
              <div className="container">
                <div className="accodion-tab">
                  <input
                    id={`checkbox_${id}`}
                    type="checkbox"
                    checked={active_title}
                    onClick={() => setAciveTitle(!active_title)}
                  />
                  <div style={{paddingTop:"28px",paddingBottom:"10px"}}>
                    <h2 className="ht ">{data[0].title || ""}</h2>
                    {/* <span className="triangle">
                      <i className="icon-plus"></i>
                    </span> */}
                  </div>
                  <div
                    className="accodion-content entry-content"
                    style={{ marginTop: "-17px" }}
                  >
                    <div className="inner-full">
                      <div className="accodion accodion-1 accodion-1-3">
                        <div className="row list-item">
                          {map(data, (items, index) => {
                            return (
                              <div
                                className={`col-sm-6 col-md-${column}`}
                                key={index}
                              >
                                <div
                                  className="gray-background-custom-3"
                                  style={{
                                    backgroundImage: `url(${process.env.DOMAIN}${items.urlImage})`,
                                    filter: "brightness(70%)",
                                  }}
                                ></div>
                                <div className="title-gray-custom-2">
                                  <a href={items.url ? items.url : "#"}>
                                    <div
                                      className="title"
                                      style={{ textTransform: "none", color: "#fff" }}
                                    >
                                      {ReactHtmlParser(items.note_1)}
                                    </div>
                                  </a>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "23" && (
        <React.Fragment>
          <section className={`sec-menu"`} id={id}>
            <div className="container">
              {/* {size.width >= 768 && (
                <div style={{borderBottom: "1px solid #d6d6d6", position: "relative"}}>
                  <div className="ul-menu-custom">
                    {map(data, (item, index) => (
                        <div
                        className="li-menu-custom"
                        key={index}
                        >
                          {index === 0 && (
                            <div className= "menu-div-custom-1" style= {{borderBottom: router.asPath == item.url ? "2px solid #141ED2" : "none", color: router.asPath == item.url ? "#333333" : "#787878"}}>
                              <Link href="[...name]" as={item.url}>
                                <a>{ReactHtmlParser(item.note_1)}</a>
                              </Link>
                            </div>
                          )}
                          {index !== 0 && (
                            <div className= "menu-div-custom" style= {{borderBottom: router.asPath == item.url ? "2px solid #141ED2" : "none", color: router.asPath == item.url ? "#333333" : "#787878"}}>
                              <Link href="[...name]" as={item.url}>
                                <a>{ReactHtmlParser(item.note_1)}</a>
                              </Link>
                            </div>
                          )}
                        </div>
                    ))}
                  </div>
                  <div className="button-menu-custom">
                    <button class="btn" type="submit"><a href={data[0].button_url}>{ReactHtmlParser(data[0].button_name)}</a></button>
                  </div>
                </div>
              )} */}
              {/* <div style={{borderBottom: "1px solid #d6d6d6", position: "relative", height: "82px"}}>
                <Carousel
                  responsive={responsive5}
                  draggable
                  minimumTouchDrag={80}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  keyBoardControl={true}
                  className="menu-hung-custom"
                  arrows={false}
                  renderButtonGroupOutside={true}
                  itemClass="carousel-item-padding-40-px"
                  ref={ref => {
                    setRefCarousel(ref);
                  }}
                >
                  {map(data, (item, index) => (
                      <div
                      className="li-menu-custom"
                      key={index}
                      >
                        {index === 0 && (
                          <div className= "menu-div-custom" style= {{borderBottom: router.asPath == item.url || router.asPath == item.url + '/' ? "2px solid #141ED2" : "none", color: router.asPath == item.url ? "#333333" : "#787878"}}>
                            <Link href="[...name]" as={item.url}>
                              <a>{ReactHtmlParser(item.note_1)}</a>
                            </Link>
                          </div>
                        )}
                        {index !== 0 && (
                          <div className= "menu-div-custom" style= {{borderBottom: router.asPath == item.url || router.asPath == item.url + '/' ? "2px solid #141ED2" : "none", color: router.asPath == item.url ? "#333333" : "#787878"}}>
                            <Link href="[...name]" as={item.url}>
                              <a>{ReactHtmlParser(item.note_1)}</a>
                            </Link>
                          </div>
                        )}
                      </div>
                  ))}
                </Carousel>
                  <div className="button-menu-custom">
                    <button class="btn" type="submit"><a href={data[0].button_url}>{ReactHtmlParser(data[0].button_name)}</a></button>
                  </div>
                </div> */}
              <div className="convert-grid-to-scroll">
                <div
                  className="row-custom list-item grid-space-20"
                  style={{
                    position: "relative",
                    height: "82px",
                    borderBottom: "1px solid #d6d6d6",
                    margin: "0"
                  }}
                >
                  {map(data, (item, index) => (
                    <div className="li-menu-custom" key={index}>
                      {index === 0 && (
                        <div className="menu-custom-0" key={index}>
                          <div
                            className="menu-div-custom-1"
                            style={{
                              borderBottom:
                                router.asPath == item.url ||
                                router.asPath == item.url + "/"
                                  ? "2px solid #141ED2"
                                  : "none",
                              color:
                                router.asPath == item.url
                                  ? "#333333"
                                  : "#787878",
                              minWidth: "75px",
                              fontWeight:
                                router.asPath == item.url
                                  ? "600"
                                  : "400"
                            }}
                          >
                            <Link href="[...name]" as={item.url}>
                              <a className="item efch-0 ef-img-l">
                                {ReactHtmlParser(item.note_1)}
                              </a>
                            </Link>
                          </div>
                        </div>
                      )}
                      {index !== 0 && (
                        <div className="menu-custom-1" key={index}>
                          <div
                            className="menu-div-custom-1"
                            style={{
                              borderBottom:
                                router.asPath == item.url ||
                                router.asPath == item.url + "/"
                                  ? "2px solid #141ED2"
                                  : "none",
                              color:
                                router.asPath == item.url
                                  ? "#333333"
                                  : "#787878",
                              minWidth: "max-content",
                            }}
                          >
                            <Link href="[...name]" as={item.url}>
                              <a>{ReactHtmlParser(item.note_1)}</a>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  {size.width > 768 && (
                    
                    <div className="button-menu-custom" style={{display: data[0].button_url === null || data[0].button_url === "" || data[0].button_url === undefined ? "none": "content"}}>
                      <button className="btn" type="submit">
                        <a href={data[0].button_url}>
                          {ReactHtmlParser(data[0].button_name)}
                        </a>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {size.width <= 768 && (
              <div className="center-custom">
                <button className="btn" type="submit">
                  <a href={data[0].button_url}>
                    {ReactHtmlParser(data[0].button_name)}
                  </a>
                </button>
              </div>
            )}
          </section>
        </React.Fragment>
      )}
      {data[0].type === "24" && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg group-ef loaded block-icon-${data[0].type}`}
            id={id}
            style={{ paddingTop: "90px" }}
          >
            <div className="container">
              <div className="text-center blog-custom">
                <div className="blog-custom-1">
                  <h2 className="intro-title-custom-1">
                    {data === null ? "" : data[0].title}
                  </h2>
                  <div>
                    <h4 className="intro-des-custom-1">
                      {ReactHtmlParser(data[0].description_top)}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="small-container">
                <div className="row list-item">
                  {map(data, (items, index) => {
                    return (
                      <div
                        className={`col-sm-6 col-md-${column}`}
                        key={index}
                        style={{ marginTop: "55px" }}
                      >
                        {/* <div className="gray-background-custom-3" style={{backgroundImage: `url(${process.env.DOMAIN}${items.urlImage})`, filter: "brightness(70%)"}}>
                        </div>
                        <div className="title-gray-custom-2">
                          <a href={items.url ? items.url : '#'}>
                            <div className="title" style={{textTransform:"none"}}>{ReactHtmlParser(items.note_1)}</div>
                          </a>
                        </div>     */}
                        <Link href="[...name]" as={items.url}>
                          <div className="img">
                            <div className="circle-custom-icon">
                              <img
                                className="lazyload img-icon-41"
                                alt="icon"
                                data-src={`${process.env.DOMAIN}${items.urlImage}`}
                              ></img>
                            </div>
                            <div
                              className="text-center"
                              style={{
                                paddingTop: "12px",
                                maxWidth: "250px",
                                margin: "auto",
                              }}
                            >
                              <h4
                                className="intro-des-custom-1"
                                style={{ fontWeight: "600" }}
                              >
                                {ReactHtmlParser(items.note_1)}
                              </h4>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "25" && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg group-ef loaded block-icon-${data[0].type}`}
            id={id}
            style={{ paddingTop: "90px" }}
          >
            <div className="container">
              <div className="text-center blog-custom">
                <div className="blog-custom-1">
                  <h2 className="intro-title-custom-black">
                    {data === null ? "" : data[0].title}
                  </h2>
                  <div>
                    <h4 className="intro-des-custom-1">
                      {ReactHtmlParser(data[0].description_top)}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="small-container">
                <div className="row list-item">
                  {map(data, (items, index) => {
                    return (
                      <div
                        className={`col-sm-6 col-md-${column}`}
                        key={index}
                        style={{ marginTop: "55px" }}
                      >
                        {/* <div className="gray-background-custom-3" style={{backgroundImage: `url(${process.env.DOMAIN}${items.urlImage})`, filter: "brightness(70%)"}}>
                        </div>
                        <div className="title-gray-custom-2">
                          <a href={items.url ? items.url : '#'}>
                            <div className="title" style={{textTransform:"none"}}>{ReactHtmlParser(items.note_1)}</div>
                          </a>
                        </div>     */}
                        <Link href="[...name]" as={items.url}>
                          <div className="img">
                            <div className="circle-custom-icon-black">
                              <img
                                className="lazyload img-icon-41"
                                alt="icon"
                                data-src={`${process.env.DOMAIN}${items.urlImage}`}
                              ></img>
                            </div>
                            <div
                              className="text-center"
                              style={{
                                paddingTop: "12px",
                                maxWidth: "250px",
                                margin: "auto",
                              }}
                            >
                              <h4
                                className="intro-des-custom-1"
                                style={{ fontWeight: "600" }}
                              >
                                {ReactHtmlParser(items.note_1)}
                              </h4>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "26" && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg group-ef loaded block-icon-${data[0].type}`}
            id={id}
            style={{ paddingTop: "90px" }}
          >
            <div className="container">
              <div className="text-center blog-custom">
                <div className="blog-custom-1">
                  <h2 className="intro-title-custom-1">
                    {data === null ? "" : data[0].title}
                  </h2>
                  <div>
                    <h4 className="intro-des-custom-1">
                      {ReactHtmlParser(data[0].description_top)}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="small-container">
                <div className="row list-item">
                  {map(data, (items, index) => {
                    return (
                      <div
                        className={`col-sm-6 col-md-${column}`}
                        key={index}
                        style={{ marginTop: "55px" }}
                      >
                        {/* <div className="gray-background-custom-3" style={{backgroundImage: `url(${process.env.DOMAIN}${items.urlImage})`, filter: "brightness(70%)"}}>
                        </div>
                        <div className="title-gray-custom-2">
                          <a href={items.url ? items.url : '#'}>
                            <div className="title" style={{textTransform:"none"}}>{ReactHtmlParser(items.note_1)}</div>
                          </a>
                        </div>     */}
                        <Link href="[...name]" as={items.url}>
                          <div className="img">
                            <div className="circle-custom-icon-purple">
                              <img
                                className="lazyload img-icon-41"
                                alt="icon"
                                data-src={`${process.env.DOMAIN}${items.urlImage}`}
                              ></img>
                            </div>
                            <div
                              className="text-center"
                              style={{
                                paddingTop: "12px",
                                maxWidth: "250px",
                                margin: "auto",
                              }}
                            >
                              <h4
                                className="intro-des-custom-1"
                                style={{ fontWeight: "600" }}
                              >
                                {ReactHtmlParser(items.note_1)}
                              </h4>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "27" && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg group-ef loaded block-icon-${data[0].type}`}
            id={id}
            style={{ paddingTop: "90px" }}
          >
            <div className="container">
              <div className="text-center blog-custom">
                <div className="blog-custom-1">
                  <h2 className="intro-title-custom-1">
                    {data === null ? "" : data[0].title}
                  </h2>
                  <div>
                    <h4 className="intro-des-custom-1">
                      {ReactHtmlParser(data[0].description_top)}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="small-container">
                <div className="row list-item">
                  {map(data, (items, index) => {
                    return (
                      <div
                        className={`col-sm-6 col-md-${column}`}
                        key={index}
                        style={{ marginTop: "55px" }}
                      >
                        {/* <div className="gray-background-custom-3" style={{backgroundImage: `url(${process.env.DOMAIN}${items.urlImage})`, filter: "brightness(70%)"}}>
                        </div>
                        <div className="title-gray-custom-2">
                          <a href={items.url ? items.url : '#'}>
                            <div className="title" style={{textTransform:"none"}}>{ReactHtmlParser(items.note_1)}</div>
                          </a>
                        </div>     */}
                        <Link href="[...name]" as={items.url}>
                          <div className="img">
                            <div className="circle-custom-icon-green">
                              <img
                                className="lazyload img-icon-41"
                                alt="icon"
                                data-src={`${process.env.DOMAIN}${items.urlImage}`}
                              ></img>
                            </div>
                            <div
                              className="text-center"
                              style={{
                                paddingTop: "12px",
                                maxWidth: "250px",
                                margin: "auto",
                              }}
                            >
                              <h4
                                className="intro-des-custom-1"
                                style={{ fontWeight: "600" }}
                              >
                                {ReactHtmlParser(items.note_1)}
                              </h4>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "28" && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg group-ef loaded block-icon-${data[0].type}`}
            id={id}
          >
            <div className="question" style={{ backgroundColor: "unset" }}>
              <div className="container">
                <div className="accodion-tab">
                  <input
                    id={`checkbox_${id}`}
                    type="checkbox"
                    checked={active_title}
                    onClick={() => setAciveTitle(true)}
                  />
                  <label
                    htmlFor={`checkbox_${id}`}
                    className="entry-head text-center block-question-index"
                  >
                    <h2 className="ht ">{data[0].title || ""}</h2>
                  </label>
                  <div
                    className="accodion-content entry-content"
                    style={{ marginTop: "-17px" }}
                  >
                    <div className="inner-full">
                      <div className="accodion accodion-1 accodion-1-3">
                        <div className="row list-item">
                          {map(data, (items, index) => {
                            let colors = ['#B4A5FA', '#9BE6C8', '#B5D9F9', '#141ED2'];
                            return (
                              <div
                                className={`col-sm-6 col-md-${column}`}
                                key={index}
                              >
                                <div
                                  className="item"
                                  style={{
                                    padding: "30px",
                                    height: "100%",
                                    textAlign: "left",
                                    backgroundColor: colors[index],
                                    color: "#fff",
                                    borderRadius: "5px",
                                    minHeight: "290px",
                                    paddingTop: "145px"
                                  }}
                                >
                                  <a href={items.url ? items.url : "#"}>
                                    
                                    <div className="divtext">
                                      <h4
                                        className="title"
                                        style={{
                                          textTransform: "none",
                                          color: "#fff",
                                          fontSize: "40px",
                                          marginBottom: "0"
                                        }}
                                      >
                                        {items.note_1}
                                      </h4>
                                      <div
                                        className="desc"
                                        style={{ color: "#fff", fontSize: "20px" }}
                                      >
                                        {items.note_2}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "29" && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg group-ef loaded block-icon-${data[0].type}`}
            id={id}
            style={{ paddingTop: "90px" }}
          >
            <div className="container">
              <div className="text-center blog-custom">
                <div className="blog-custom-3">
                  <h2 className="intro-title-custom-3">
                    {data === null ? "" : data[0].title}
                  </h2>
                  <div>
                    <h4 className="intro-des-custom-1">
                      {ReactHtmlParser(data[0].description_top)}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="inner-full">
                  <div className="accodion accodion-1 accodion-1-3">
                    <div className="row list-item">
                      {map(data, (items, index) => {
                        return (
                          <div
                            className={`col-sm-6 col-md-${column}`}
                            key={index}
                          >
                            <div
                              className="gray-background-custom-3"
                              style={{
                                backgroundImage: `url(${process.env.DOMAIN}${items.urlImage})`
                              }}
                            ></div>
                            <div className="title-gray-custom-3">
                              <a href={items.url ? items.url : "#"}>
                                <div
                                  className="title"
                                  style={{ textTransform: "none" }}
                                >
                                  {ReactHtmlParser(items.note_1)}
                                </div>
                              </a>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "30" && (
        <React.Fragment>
          <section
            className={`${padding} sec-img-svg group-ef loaded block-icon-${data[0].type}`}
            id={id}
            style={{ paddingTop: "90px" }}
          >
            <div className="container">
              <div className="inner-full">
                  <div className="accodion accodion-1 accodion-1-3">
                    <div className="row list-item">
                      {map(data, (items, index) => {
                        return (
                          <div
                            className={`col-sm-6 col-md-${column}`}
                            key={index}
                          >
                            <div
                              className="gray-background-custom-4"
                              style={{
                                backgroundImage: `url(${process.env.DOMAIN}${items.urlImage})`
                              }}
                            >
                              <div style={{paddingBottom:"37px"}}>
                                {ReactHtmlParser(items.note_1)}
                              </div>
                              <div>
                                <Link href="[...name]" as={items.url}>
                                  <a href={items.url ? items.url : "#"}>
                                    <div
                                      className="title"
                                      style={{ textTransform: "none", fontSize: "14px" }}
                                    >
                                      {ReactHtmlParser(items.note_2)} <i className="icon-arrow-1" style={{fontSize: "9px"}}></i>
                                    </div>
                                  </a>
                                </Link>
                              </div>
                            </div>
                            {/* <div className="title-gray-custom-3">
                              <a href={items.url ? items.url : "#"}>
                                <div
                                  className="title"
                                  style={{ textTransform: "none" }}
                                >
                                  {ReactHtmlParser(items.note_1)}
                                </div>
                              </a>
                            </div> */}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {data[0].type === "31" && (
        <React.Fragment>
          <section className={`${padding} sec-h-4 block-icon-${data[0].type}`} id={id} style={{backgroundColor: "#e0f0ff"}}>
        <div className="block-image-10">
          <div className="container">
            {(data[0].title || data[0].title !== '') && (
              <div className="entry-head text-center" 
              style={{textAlign:"center",paddingBottom:"25px",paddingTop:"20px",marginBottom:"28px"}}>
                <h2 className="title-custom ">{data[0].title}</h2>
              </div>
            )}
            <div className="row list-item list-1">
              <div className="col-md-8 efch-1 ef-img-t block-1" style={{maxHeight:"290px"}}>
                <a className={`item tRes_46 blue-shadow`} href={data[0].url}>
                    <img
                      className="lazyload"
                      data-src={
                        data[0].urlImage === null
                          ? `/images/imgdefault.jpg`
                          : `${process.env.DOMAIN}${data[0].urlImage}`
                      }
                      style={{borderRadius: "8px"}}
                      alt="images"
                    />
                  <div className="divtext">
                    <h4 className="title line2 on-hover-blue">{data[0].note_1}</h4>
                  </div>
                </a>
            </div>
              <div className="col-md-4 efch-1 ef-img-t block-1" style={{maxHeight:"290px"}}>
                  <a className={`item tRes_46 blue-shadow`} href={data[1].url}>
                      <img
                        className="lazyload"
                        data-src={
                          data[1].urlImage === null
                            ? `/images/imgdefault.jpg`
                            : `${process.env.DOMAIN}${data[1].urlImage}`
                        }
                        style={{borderRadius: "8px"}}
                        alt="images"
                      />
                    <div className="divtext">
                      <h4 className="title line2 on-hover-blue">{data[1].note_1}</h4>
                    </div>
                  </a>
              </div>
              <div className="col-md-4 efch-1 ef-img-t block-1" style={{maxHeight:"290px"}}>
                  <a className={`item tRes_46 blue-shadow`} href={data[2].url}>
                      <img
                        className="lazyload"
                        data-src={
                          data[2].urlImage === null
                            ? `/images/imgdefault.jpg`
                            : `${process.env.DOMAIN}${data[2].urlImage}`
                        }
                        style={{borderRadius: "8px"}}
                        alt="images"
                      />
                    <div className="divtext">
                      <h4 className="title line2 on-hover-blue">{data[2].note_1}</h4>
                    </div>
                  </a>
              </div>
              <div className="col-md-8 efch-1 ef-img-t block-1" style={{maxHeight:"290px"}}>
                  <a className={`item tRes_46 blue-shadow`} href={data[3].url}>
                      <img
                        className="lazyload"
                        data-src={
                          data[3].urlImage === null
                            ? `/images/imgdefault.jpg`
                            : `${process.env.DOMAIN}${data[3].urlImage}`
                        }
                        style={{borderRadius: "8px"}}
                        alt="images"
                      />
                    <div className="divtext">
                      <h4 className="title line2 on-hover-blue">{data[3].note_1}</h4>
                    </div>
                  </a>
              </div>
              <div className="col-md-4 efch-1 ef-img-t block-1" style={{maxHeight:"290px"}}>
                  <a className={`item tRes_86 blue-shadow`} href={data[4].url}>
                      <img
                        className="lazyload"
                        data-src={
                          data[4].urlImage === null
                            ? `/images/imgdefault.jpg`
                            : `${process.env.DOMAIN}${data[4].urlImage}`
                        }
                        style={{borderRadius: "8px"}}
                        alt="images"
                      />
                    <div className="divtext">
                      <h4 className="title line2 on-hover-blue">{data[4].note_1}</h4>
                    </div>
                  </a>
              </div>
              <div className="col-md-4 efch-1 ef-img-t block-1" style={{maxHeight:"290px"}}>
                  <a className={`item tRes_86 blue-shadow`} href={data[5].url}>
                      <img
                        className="lazyload"
                        data-src={
                          data[5].urlImage === null
                            ? `/images/imgdefault.jpg`
                            : `${process.env.DOMAIN}${data[5].urlImage}`
                        }
                        style={{borderRadius: "8px"}}
                        alt="images"
                      />
                    <div className="divtext">
                      <h4 className="title line2 on-hover-blue">{data[5].note_1}</h4>
                    </div>
                  </a>
              </div>
              <div className="col-md-4 efch-1 ef-img-t block-1" style={{maxHeight:"290px"}}>
                  <a className={`item tRes_86 blue-shadow`} href={data[6].url}>
                      <img
                        className="lazyload"
                        data-src={
                          data[4].urlImage === null
                            ? `/images/imgdefault.jpg`
                            : `${process.env.DOMAIN}${data[6].urlImage}`
                        }
                        style={{borderRadius: "8px"}}
                        alt="images"
                      />
                    <div className="divtext">
                      <h4 className="title line2 on-hover-blue">{data[6].note_1}</h4>
                    </div>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </section>
        </React.Fragment>
      )}
      {data[0].type === "32" && (
        <React.Fragment>
          <section className={`${padding} sec-h-4 block-icon-${data[0].type}`} id={id}>
        <div className="block-image-10">
          <div className="container">
            {(data[0].title || data[0].title !== '') && (
              <div className="entry-head text-center" 
              style={{textAlign:"center",paddingBottom:"25px",paddingTop:"20px",marginBottom:"40px",borderBottom:"1px solid #AFBFC3"}}>
                <h2 className="title-custom ">{data[0].title}</h2>
              </div>
            )}
            <div
                    className="accodion-content entry-content"
                    style={{ marginTop: "-17px" }}
                  >
                    <div className="inner-full">
                      <div className="accodion accodion-1 accodion-1-3">
                        <div className="row list-item">
                          {map([data[0], data[1], data[2], data[3]], (items, index) => {
                            
                            return (
                              <div
                                className={`col-sm-6 col-md-${column}`}
                                key={index}
                              >
                                <div
                                  className="item"
                                  style={{
                                    height: "100%",
                                    textAlign: "left",
                                    // backgroundColor: colors[index],
                                    backgroundImage: `url(${process.env.DOMAIN}${items.urlImage})`,
                                    color: "#fff",
                                    borderRadius: "5px",
                                    minHeight: "290px",
                                    paddingTop: "90px",
                                    paddingLeft: "40px",
                                    paddingRight: "40px",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    textAlign: "center"
                                  }}
                                >
                                  <a href={items.url ? items.url : "#"}>
                                    
                                    <div className="divtext">
                                      <h4
                                        className="title"
                                        style={{
                                          textTransform: "none",
                                          color: "#fff",
                                          fontSize: "40px",
                                          marginBottom: "0"
                                        }}
                                      >
                                        {items.note_1}
                                      </h4>
                                      <div
                                        className="desc"
                                        style={{ color: "#fff", fontSize: "20px" }}
                                      >
                                        {items.note_2}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            );
                          })}
                          {map([data[4]], (items, index) => {
                            
                            return (
                              <div
                                className={`col-sm-6 col-md-8`}
                                key={index}
                              >
                                <div
                                  className="item"
                                  style={{
                                    height: "100%",
                                    textAlign: "left",
                                    // backgroundColor: colors[index],
                                    backgroundImage: `url(${process.env.DOMAIN}${items.urlImage})`,
                                    color: "#fff",
                                    borderRadius: "5px",
                                    minHeight: "290px",
                                    paddingTop: "145px",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    paddingTop: "90px",
                                    paddingLeft: "40px",
                                    paddingRight: "40px",
                                    textAlign: "center"
                                  }}
                                >
                                  <a href={items.url ? items.url : "#"}>
                                    
                                    <div className="divtext">
                                      <h4
                                        className="title"
                                        style={{
                                          textTransform: "none",
                                          color: "#fff",
                                          fontSize: "40px",
                                          marginBottom: "0"
                                        }}
                                      >
                                        {items.note_1}
                                      </h4>
                                      <div
                                        className="desc"
                                        style={{ color: "#fff", fontSize: "20px" }}
                                      >
                                        {items.note_2}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
          </div>
        </div>
      </section>
        </React.Fragment>
      )}
      {data[0].type === "33" && (
        <React.Fragment>
          <section className={`${padding} sec-h-4 block-icon-${data[0].type}`} id={id}>
          <div className="container">
            {(data[0].title || data[0].title !== '') && (
              <div className="entry-head text-center" style={{marginBottom:"15px"}}>
                <h2 className="title-custom ">{data[0].title}</h2>
              </div>
            )}

            <div className="row list-item list-1">
              <div className={`col-md-8 efch-0 ef-img-t`} key={0} style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_46 blue-shadow`}>
                          <img
                            className="lazyload"
                            data-src={
                              data[0].urlImage === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${data[0].urlImage}`
                            }
                            alt="images"
                            style={{borderRadius: "8px"}}
                          />
                        <div className="divtext">
                          <div class="category">{data[0].note_1}</div>
                          <h4 className="title line2 on-hover-blue">{data[0].note_2}</h4>
                        </div>
                      </a>
              </div>
              <div className={`col-md-4 efch-0 ef-img-t`} key={1} style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_46 blue-shadow`}>
                          <img
                            className="lazyload"
                            data-src={
                              data[1].urlImage === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${data[1].urlImage}`
                            }
                            alt="images"
                            style={{borderRadius: "8px"}}
                          />
                        <div className="divtext">
                          <div class="category">{data[1].note_1}</div>
                          <h4 className="title line2 on-hover-blue">{data[1].note_2}</h4>
                        </div>
                      </a>
              </div>
              <div className={`col-md-4 efch-0 ef-img-t`} key={2} style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_86 blue-shadow`}>
                          <img
                            className="lazyload"
                            data-src={
                              data[2].urlImage === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${data[2].urlImage}`
                            }
                            alt="images"
                            style={{borderRadius: "8px"}}
                          />
                        <div className="divtext">
                          <div class="category">{data[2].note_1}</div>
                          <h4 className="title line2 on-hover-blue">{data[2].note_2}</h4>
                        </div>
                      </a>
              </div>
              <div className={`col-md-4 efch-0 ef-img-t`} key={3} style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_86 blue-shadow`}>
                          <img
                            className="lazyload"
                            data-src={
                              data[3].urlImage === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${data[3].urlImage}`
                            }
                            alt="images"
                            style={{borderRadius: "8px"}}
                          />
                        <div className="divtext">
                          <div class="category">{data[3].note_1}</div>
                          <h4 className="title line2 on-hover-blue">{data[3].note_2}</h4>
                        </div>
                      </a>
              </div>
              <div className={`col-md-4 efch-0 ef-img-t`} key={4} style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_86 none-shadow none-shadow-blue`} style={{backgroundColor: "#a0d2ff"}}>
                          <img
                            className="lazyload"
                            data-src={
                              data[4].urlImage === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${data[4].urlImage}`
                            }
                            alt="images"
                            style={{borderRadius: "8px", visibility: "hidden"}}
                          />
                        <div className="divtext">
                          <div class="category">{data[4].note_1}</div>
                          <h4 className="title line2 on-hover-blue">{data[4].note_2} ></h4>
                        </div>
                      </a>
              </div>
              
            </div>
          
          </div>
        
          </section>
        </React.Fragment>
      )}
      {data[0].type === "34" && (
        <React.Fragment>
          <section className={`${padding} sec-h-4 block-icon-${data[0].type}`} id={id}>
          <div className="container">
            {(data[0].title || data[0].title !== '') && (
              <div className="entry-head text-center" style={{marginBottom:"15px"}}>
                <h2 className="title-custom ">{data[0].title}</h2>
              </div>
            )}

            <div className="row list-item list-1">
              <div className={`col-md-8 efch-0 ef-img-t`} key={0} style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_46 blue-shadow`}>
                          <img
                            className="lazyload"
                            data-src={
                              data[0].urlImage === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${data[0].urlImage}`
                            }
                            alt="images"
                            style={{borderRadius: "8px"}}
                          />
                        <div className="divtext">
                          <div class="category">{data[0].note_1}</div>
                          <h4 className="title line2 on-hover-blue">{data[0].note_2}</h4>
                        </div>
                      </a>
              </div>
              <div className={`col-md-4 efch-0 ef-img-t`} key={1} style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_46 blue-shadow`}>
                          <img
                            className="lazyload"
                            data-src={
                              data[1].urlImage === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${data[1].urlImage}`
                            }
                            alt="images"
                            style={{borderRadius: "8px"}}
                          />
                        <div className="divtext">
                          <div class="category">{data[1].note_1}</div>
                          <h4 className="title line2 on-hover-blue">{data[1].note_2}</h4>
                        </div>
                      </a>
              </div>
              <div className={`col-md-4 efch-0 ef-img-t`} key={2} style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_86 blue-shadow`}>
                          <img
                            className="lazyload"
                            data-src={
                              data[2].urlImage === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${data[2].urlImage}`
                            }
                            alt="images"
                            style={{borderRadius: "8px"}}
                          />
                        <div className="divtext">
                          <div class="category">{data[2].note_1}</div>
                          <h4 className="title line2 on-hover-blue">{data[2].note_2}</h4>
                        </div>
                      </a>
              </div>
              <div className={`col-md-4 efch-0 ef-img-t`} key={3} style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_86 blue-shadow`}>
                          <img
                            className="lazyload"
                            data-src={
                              data[3].urlImage === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${data[3].urlImage}`
                            }
                            alt="images"
                            style={{borderRadius: "8px"}}
                          />
                        <div className="divtext">
                          <div class="category">{data[3].note_1}</div>
                          <h4 className="title line2 on-hover-blue">{data[3].note_2}</h4>
                        </div>
                      </a>
              </div>
              <div className={`col-md-4 efch-0 ef-img-t`} key={4} style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_86 none-shadow none-shadow-pink`} style={{backgroundColor: "#B4A5FA"}}>
                          <img
                            className="lazyload"
                            data-src={
                              data[4].urlImage === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${data[4].urlImage}`
                            }
                            alt="images"
                            style={{borderRadius: "8px", visibility: "hidden"}}
                          />
                        <div className="divtext">
                          <div class="category">{data[4].note_1}</div>
                          <h4 className="title line2 on-hover-blue">{data[4].note_2} ></h4>
                        </div>
                      </a>
              </div>
              
            </div>
          
          </div>
        
          </section>
        </React.Fragment>
      )}
      {data[0].type === "35" && (
        <React.Fragment>
          <section className={`${padding} sec-h-4 block-icon-${data[0].type}`} id={id}>
          <div className="container">
            {(data[0].title || data[0].title !== '') && (
              <div className="entry-head text-center" style={{marginBottom:"15px"}}>
                <h2 className="title-custom ">{data[0].title}</h2>
              </div>
            )}

            <div className="row list-item list-1">
              <div className={`col-md-8 efch-0 ef-img-t`} key={0} style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_46 blue-shadow`}>
                          <img
                            className="lazyload"
                            data-src={
                              data[0].urlImage === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${data[0].urlImage}`
                            }
                            alt="images"
                            style={{borderRadius: "8px"}}
                          />
                        <div className="divtext">
                          <div class="category">{data[0].note_1}</div>
                          <h4 className="title line2 on-hover-blue">{data[0].note_2}</h4>
                        </div>
                      </a>
              </div>
              <div className={`col-md-4 efch-0 ef-img-t`} key={1} style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_46 blue-shadow`}>
                          <img
                            className="lazyload"
                            data-src={
                              data[1].urlImage === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${data[1].urlImage}`
                            }
                            alt="images"
                            style={{borderRadius: "8px"}}
                          />
                        <div className="divtext">
                          <div class="category">{data[1].note_1}</div>
                          <h4 className="title line2 on-hover-blue">{data[1].note_2}</h4>
                        </div>
                      </a>
              </div>
              <div className={`col-md-4 efch-0 ef-img-t`} key={2} style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_86 blue-shadow`}>
                          <img
                            className="lazyload"
                            data-src={
                              data[2].urlImage === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${data[2].urlImage}`
                            }
                            alt="images"
                            style={{borderRadius: "8px"}}
                          />
                        <div className="divtext">
                          <div class="category">{data[2].note_1}</div>
                          <h4 className="title line2 on-hover-blue">{data[2].note_2}</h4>
                        </div>
                      </a>
              </div>
              <div className={`col-md-4 efch-0 ef-img-t`} key={3} style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_86 blue-shadow`}>
                          <img
                            className="lazyload"
                            data-src={
                              data[3].urlImage === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${data[3].urlImage}`
                            }
                            alt="images"
                            style={{borderRadius: "8px"}}
                          />
                        <div className="divtext">
                          <div class="category">{data[3].note_1}</div>
                          <h4 className="title line2 on-hover-blue">{data[3].note_2}</h4>
                        </div>
                      </a>
              </div>
              <div className={`col-md-4 efch-0 ef-img-t`} key={4} style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_86 none-shadow none-shadow-pink`} style={{backgroundColor: "#B4A5FA"}}>
                          <img
                            className="lazyload"
                            data-src={
                              data[4].urlImage === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${data[4].urlImage}`
                            }
                            alt="images"
                            style={{borderRadius: "8px", visibility: "hidden"}}
                          />
                        <div className="divtext">
                          <div class="category">{data[4].note_1}</div>
                          <h4 className="title line2 on-hover-blue">{data[4].note_2} ></h4>
                        </div>
                      </a>
              </div>
              
            </div>
          
          </div>
        
          </section>
        </React.Fragment>
      )}
      {data[0].type === "36" && (
        <React.Fragment>
          <section className={`${padding} sec-h-4 block-icon-${data[0].type}`} id={id}>
          <div className="container">
            {(data[0].title || data[0].title !== '') && (
              <div className="entry-head text-center" style={{marginBottom:"15px"}}>
                <h2 className="title-custom ">{data[0].title}</h2>
              </div>
            )}

            <div className="row list-item list-1">
              <div className={`col-md-8 efch-0 ef-img-t`} key={0} style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_46 blue-shadow`}>
                          <img
                            className="lazyload"
                            data-src={
                              data[0].urlImage === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${data[0].urlImage}`
                            }
                            alt="images"
                            style={{borderRadius: "8px"}}
                          />
                        <div className="divtext">
                          <div class="category">{data[0].note_1}</div>
                          <h4 className="title line2 on-hover-blue">{data[0].note_2}</h4>
                        </div>
                      </a>
              </div>
              <div className={`col-md-4 efch-0 ef-img-t`} key={1} style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_46 blue-shadow`}>
                          <img
                            className="lazyload"
                            data-src={
                              data[1].urlImage === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${data[1].urlImage}`
                            }
                            alt="images"
                            style={{borderRadius: "8px"}}
                          />
                        <div className="divtext">
                          <div class="category">{data[1].note_1}</div>
                          <h4 className="title line2 on-hover-blue">{data[1].note_2}</h4>
                        </div>
                      </a>
              </div>
              <div className={`col-md-4 efch-0 ef-img-t`} key={2} style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_86 blue-shadow`}>
                          <img
                            className="lazyload"
                            data-src={
                              data[2].urlImage === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${data[2].urlImage}`
                            }
                            alt="images"
                            style={{borderRadius: "8px"}}
                          />
                        <div className="divtext">
                          <div class="category">{data[2].note_1}</div>
                          <h4 className="title line2 on-hover-blue">{data[2].note_2}</h4>
                        </div>
                      </a>
              </div>
              <div className={`col-md-4 efch-0 ef-img-t`} key={3} style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_86 blue-shadow`}>
                          <img
                            className="lazyload"
                            data-src={
                              data[3].urlImage === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${data[3].urlImage}`
                            }
                            alt="images"
                            style={{borderRadius: "8px"}}
                          />
                        <div className="divtext">
                          <div class="category">{data[3].note_1}</div>
                          <h4 className="title line2 on-hover-blue">{data[3].note_2}</h4>
                        </div>
                      </a>
              </div>
              <div className={`col-md-4 efch-0 ef-img-t`} key={4} style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_86 none-shadow none-shadow-pink`} style={{backgroundColor: "#B4A5FA"}}>
                          <img
                            className="lazyload"
                            data-src={
                              data[4].urlImage === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${data[4].urlImage}`
                            }
                            alt="images"
                            style={{borderRadius: "8px", visibility: "hidden"}}
                          />
                        <div className="divtext">
                          <div class="category">{data[4].note_1}</div>
                          <h4 className="title line2 on-hover-blue">{data[4].note_2} ></h4>
                        </div>
                      </a>
              </div>
              
            </div>
          
          </div>
        
          </section>
        </React.Fragment>
      )}
      
    </React.Fragment>
  );
}

Icon.propTypes = propTypes;

export default Icon;
