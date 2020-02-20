import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import { Carousel } from "react-responsive-carousel";
import { HomeActions } from "../store/actions";
import { map, isEmpty } from "lodash";
import ReactHtmlParser from "react-html-parser";
import { connect } from "react-redux";

function Home({ getHome, list, silder }) {
  useEffect(() => {
    getHome("homepage");
  }, [getHome]);

  const getItems = (index, item) => {
    let url = item.props.children[0].props.href;
    window.location.href = url;
  };

  return (
    <Layout>
      <Head>
        <title>{list.meta_title}</title>
        <link
          rel="icon"
          href="https://www.mbbank.com.vn//images/icons/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <div className="main_content">
        {!isEmpty(silder) && (
          <Carousel
            showThumbs={false}
            autoPlay={silder.autoPlay === 1 ? true : false}
            interval={
              silder.autoPlaySpeed === undefined ? 3000 : silder.autoPlaySpeed
            }
            showArrows={silder.arrows === 1 ? true : false}
            showStatus={false}
            infiniteLoop={true}
            onClickItem={getItems}
            emulateTouch
          >
            {map(silder.sliderSlides, (item, index) => (
              <div key={index} className="silder_items">
                <a href={item.callToActionUrl}>
                  <img src={item.image} alt="icon" />
                </a>
                <div className={`silder_content ${item.options} container`}>
                  <p className="text_content1">{item.caption1}</p>
                  <p className="text_content2">{item.caption2}</p>
                  <p className="text_content3">{item.caption3}</p>
                  <button>
                    <a href={item.callToActionUrl}>
                      {item.callToActionText === null
                        ? "Xem chi tiết"
                        : item.callToActionText}
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </Carousel>
        )}
        <div className="container">
          {map(list.pageBlocks, (values, index) => {
            return <div key={index}>{ReactHtmlParser(values.contentHtml)}</div>;
          })}
        </div>
      </div>
    </Layout>
  );
}

const mapStateToProp = state => {
  return {
    list: state.HomeReducer.homedata,
    silder: state.HomeReducer.silder
  };
};

const mapDispatchToProps = {
  getHome: HomeActions.getHomeAction
};

export default connect(mapStateToProp, mapDispatchToProps)(Home);
