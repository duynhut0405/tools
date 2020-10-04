import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import UseWindowResize from '../../common/Resize';
import ReactHtmlParser from 'react-html-parser';

const propTypes = {
  items: PropTypes.object,
  padding: PropTypes.string,
  id: PropTypes.number,
  type: PropTypes.string
};

function ImageRight({ items, padding, id, type }) {
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [height, setHeight] = useState("430px");
  const [active_title, setAciveTitle] = useState(true);
  useEffect(() => {
    setIsMobile(window.innerWidth <= 767 ? true: false)
    setIsTablet(window.innerWidth <= 1199 & window.innerWidth > 767 ? true: false)
    if (isTablet) {
      setHeight("350px");
    }
    if (isMobile) {
      setHeight("280px");
    }
  });
  const backGroundColor = items.background === "1" ? '#141ED2': '#fff';
  if (items.type === '4') {
    return (
      <section className={`${padding}  sec-b sec-video2`} id={id}>
        <div className="container">
          <div className="video-banner" style={{backgroundColor:backGroundColor}}>
          <div className="row center">
            <div className="col-lg-5" style={{marginBottom:"0px"}}>
              <div className="divtext entry-content">
                <h2 className="ht" style={{fontSize: "24px"}}>{ReactHtmlParser(items.note_1)}</h2>
                <p className="desc">
                {ReactHtmlParser(items.note_2)}
                {ReactHtmlParser(items.note_3)}
                </p>
                {items.text_action === undefined || items.text_action === '' ? (
                  ''
                ) : (
                  <a className="btn btn-video-custom" href={items.url === undefined ? '#' : items.url} style={{backgroundColor:"none"}}>
                    {items.text_action === undefined ? 'Đăng ký ngay ' : items.text_action + ' '}
                    {items.imageButton !== undefined ||
                      items.imageButton !== '' ||
                      items.imageButton !== null ? (
                        <img src={items.imageButton} alt/>
                      ) : (
                        ''
                      )}
                  </a>
                )}
              </div>
            </div>
            <div className="col-lg-7" style={{marginBottom:"0px"}}>
              {!active && (
                <div
                  className={items.video_url ? 'single_video  tRes_16_9 max750' : ''}
                  data-id="2UrWPUAr68A"
                  data-video="autoplay=1&amp;controls=1&amp;mute=0"
                >
                  <img
                    className="lazyload"
                    data-lazy-data-src={`${process.env.DOMAIN}${items.urlImage}`}
                    data-src={`${process.env.DOMAIN}${items.urlImage}`}
                    alt="images"
                  />
                  {items.video_url !== undefined && (
                    <span
                      className="btnvideo"
                      onClick={() => {
                        setActive(!active);
                      }}
                    >
                      {/* {items.video_url !== undefined ||
                      items.video_url !== '' ||
                      items.video_url !== null ? (
                        <i className="icon-play"></i>
                      ) : (
                        ''
                      )} */}
                    </span>
                  )}
                </div>
              )}
              {active && (
                <div
                  className="single_video  tRes_16_9 max750"
                  data-id="2UrWPUAr68A"
                  data-video="autoplay=1&amp;controls=1&amp;mute=0"
                >
                  <iframe
                    frameBorder="0"
                    allowFullScreen="1"
                    allow="autoplay; encrypted-media;"
                    src={`${items.video_url}?rel=0&autoplay=1`}
                  ></iframe>
                </div>
              )}
            </div>
          </div>
          </div>
        </div>
      </section>
    );
  }
  if (items.type === '6') {
    let img = `${process.env.DOMAIN}${items.urlImage}`;
    return (
      <section className={`sec-t sec-b sec-video2`} id={id}>
        <div className="container">
            <img class=" loaded loaded img-banner" dataLazyType="image" dataLazySrc={img} src={img} style={{borderRadius:"5px", paddingBottom: "0"}}/>
          <a href={items.url_1} className="btn-custom" style={{top:items.top, left:items.left, height: items.height, width: items.width}}></a>
          <a href={items.url_2} className="btn-custom" style={{top:items.top2, left:items.left2, height: items.height2, width: items.width2}}></a>
        </div>
      </section>
    );
  }
  
  if (items.type === '7') {
    let img = `${process.env.DOMAIN}${items.urlImage}`;
    return (
      <section className={`sec-t sec-b sec-video2`} id={id}>
        <div className="container">
          <a href={items.url_1} target="_blank">
            <img class=" loaded loaded img-banner" dataLazyType="image" dataLazySrc={img} src={img} style={{borderRadius:"5px", paddingBottom: "0"}}/>
          </a>
        </div>
      </section>
    );
  }

  if (items.type === '8') {
    return (
      <section
        className={`sec-b sec-img-svg group-ef loaded block-icon-${items.type}`}
        id={id}
        style={{ paddingTop: "90px" }}
      >
        <div className="container">
          <div className="text-center blog-custom">
            <div className="blog-custom-1" style={{borderBottom:"unset"}}>
              <h2 className="intro-title-custom-1">
                { ReactHtmlParser(items.note_2)}
              </h2>
              <div>
                <h4 className="intro-des-custom-1">
                  {ReactHtmlParser(items.note_3)}
                </h4>
              </div>
            </div>
          </div>
          
       <div className="col-lg-10" style={{margin:"auto"}}>
              {!active && (
                <div
                  className={items.video_url ? 'single_video  tRes_16_9 max750' : ''}
                  data-id="2UrWPUAr68A"
                  data-video="autoplay=1&amp;controls=1&amp;mute=0"
                  style={{maxHeight:"348px",borderRadius:"8px"}}
                >
                  <img
                    className="lazyload"
                    data-lazy-data-src={`${process.env.DOMAIN}${items.urlImage}`}
                    data-src={`${process.env.DOMAIN}${items.urlImage}`}
                    alt="images"
                  />
                  {items.video_url !== undefined && (
                    <span
                      className="btnvideo"
                      onClick={() => {
                        setActive(!active);
                      }}
                    >
                      {/* {items.video_url !== undefined ||
                      items.video_url !== '' ||
                      items.video_url !== null ? (
                        <i className="icon-play"></i>
                      ) : (
                        ''
                      )} */}
                    </span>
                  )}
                </div>)}
                {active && (
                <div
                  className="single_video  tRes_16_9 max750"
                  data-id="2UrWPUAr68A"
                  data-video="autoplay=1&amp;controls=1&amp;mute=0"
                  style={{maxHeight:"348px",borderRadius:"8px"}}
                >
                  <iframe
                    frameBorder="0"
                    allowFullScreen="1"
                    allow="autoplay; encrypted-media;"
                    src={`${items.video_url}?rel=0&autoplay=1`}
                  ></iframe>
                </div>
              )}
                </div>
        </div>
      </section>
    );
  }

  if (items.type === '9') {
    let img = `${process.env.DOMAIN}${items.urlImage}`;
    return (
      <section className={`sec-t sec-b sec-video2`} id={id}>
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
                    <h2 className="ht ">{items.title || ""}</h2>
                    <span className="triangle">
                      <i className="icon-plus"></i>
                    </span>
                  </label>
                  <div
                    className="accodion-content entry-content"
                    style={{ marginTop: "-17px" }}
                  >
                    <div className="inner-full">
                      <div className="accodion accodion-1 accodion-1-3" style={{textAlign:"center"}}>
          <a href='#' target="_blank">
            <img class=" loaded loaded img-banner" dataLazyType="image" dataLazySrc={img} src={img} style={{borderRadius:"5px", paddingBottom: "0"}}/>
          </a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      </section>
    );
  }

  if (items.type === '10') {
    let img = `${process.env.DOMAIN}${items.urlImage}`;
    return (
      <section className={`${padding} sec-h-4 news-${type}`} id={id}>
        <div className="block-image-10">
          <div className="container">
            {(items.title || items.title !== '') && (
              <div className="entry-head text-center" 
              style={{textAlign:"center",paddingBottom:"25px",paddingTop:"20px",marginBottom:"28px",borderBottom:"1px solid #AFBFC3"}}>
                <h2 className="title-custom ">{items.title}</h2>
              </div>
            )}
            {/* 3tabs main */}
            {/* start block */}
            <div className="row list-item list-1">
              {/* block 1 */}
            <div className="col-md-8 efch-1 ef-img-t block-1" style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_66`} href={items.block_url_1}>
                          <img
                            className="lazyload"
                            data-src={
                              items.urlImageType10_1 === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${items.urlImageType10_1}`
                            }
                            style={{borderRadius: "8px"}}
                            alt="images"
                          />
                        <div className="divtext">
                          <h4 className="title line2 on-hover-blue">{items.title_block_1}</h4>
                        </div>
                      </a>
                  </div>
                  {/* block 2 */}
                  <div className="col-md-4 efch-1 ef-img-t block-2" style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_66`} href={items.block_url_2}>
                          
                        <div className="divtext">
                          <h4 className="title line2 on-hover-blue">{items.title_block_2}</h4>
                        </div>
                      </a>
                  </div>
                 {/* block 3 */}
                 <div className="col-md-4 efch-1 ef-img-t block-3" style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_66`} href={items.block_url_3}>
                          <img
                            className="lazyload"
                            data-src={
                              items.urlImageType10_2 === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${items.urlImageType10_2}`
                            }
                            style={{borderRadius: "8px"}}
                            alt="images"
                          />
                        <div className="divtext">
                          <h4 className="title line2 on-hover-blue">{items.title_block_3}</h4>
                        </div>
                      </a>
                  </div>
                 {/* block 4 */}
                 <div className="col-md-8 efch-1 ef-img-t block-4" style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_66`} href={items.block_url_4}>
                          
                        <div className="divtext">
                          <h4 className="title line2 on-hover-blue">{items.title_block_4}</h4>
                        </div>
                      </a>
                  </div>
                  {/* block 5 */}
                  <div className="col-md-4 efch-1 ef-img-t block-5" style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_66`} href={items.block_url_5}>
                        <div className="divtext">
                          <h4 className="title line2 on-hover-blue">{items.title_block_5}</h4>
                        </div>
                      </a>
                  </div>
                  {/* block 6 */}
                  <div className="col-md-4 efch-1 ef-img-t block-6" style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_66`} href={items.block_url_6}>
                        <div className="divtext">
                          <h4 className="title line2 on-hover-blue">{items.title_block_6}</h4>
                        </div>
                      </a>
                  </div>
                  {/* block 7 */}
                  <div className="col-md-4 efch-1 ef-img-t block-7" style={{maxHeight:"318.5px"}}>
                      <a className={`item tRes_66`} href={items.block_url_7}>
                          <img
                            className="lazyload"
                            data-src={
                              items.urlImageType10_3 === null
                                ? `/images/imgdefault.jpg`
                                : `${process.env.DOMAIN}${items.urlImageType10_3}`
                            }
                            style={{borderRadius: "8px"}}
                            alt="images"
                          />
                        <div className="divtext">
                          <h4 className="title line2 on-hover-blue">{items.title_block_7}</h4>
                        </div>
                      </a>
                  </div>
                 </div>
             {/* end block */}
          </div>
        </div>
      </section>

    );
  }
  
}

ImageRight.propTypes = propTypes;

export default ImageRight;
