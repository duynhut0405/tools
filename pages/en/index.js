import React, { useEffect, useState } from 'react';
import { Carousel, BlockRender, MenuMiddle, Breadcrumb } from '../../components/common';
import FormRate from '../../components/formRate';
// import Layout from '../../components/layout';
import Head from 'next/head';
// import { getCommon, getMemnu } from '../../utils/fetch';
import { getRateService, getInterestRateService } from '../../services/rate';
import { getPageMutiLangBySlug } from '../../services/page';
import filter from 'lodash/filter';
import Proptypes from 'prop-types';
import Cookies from 'js-cookie';

const propTypes = {
  page: Proptypes.object,
  silder: Proptypes.array,
  menuMiddle: Proptypes.object,
  menuHeader: Proptypes.array,
  menuNav: Proptypes.array,
  menuFooterTop: Proptypes.array,
  menuFooterBottom: Proptypes.array,
  menuFooterMain: Proptypes.array,
  menuSearch: Proptypes.array,
  menuMobile: Proptypes.array,
  linkApp: Proptypes.object,
  general: Proptypes.object,
  socialLink: Proptypes.object
};

function Home({ page, silder, menuMiddle }) {
  const [listInterestRate, setListInterestRate] = useState([]);
  const [listRate, setlistRate] = useState([]);

  const getInterestRate = async () => {
    const interestRateRes = await getInterestRateService();
    if (interestRateRes && interestRateRes !== undefined && interestRateRes.status === 200) {
      setListInterestRate(interestRateRes.data);
    }
  };

  const getRate = async () => {
    const rateResponse = await getRateService();
    if (rateResponse && rateResponse !== undefined && rateResponse.status === 200) {
      setlistRate(rateResponse.data);
    }
  };

  useEffect(() => {
    Cookies.set('lang', 'en');
    getInterestRate();
    getRate();
  }, [page]);

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add('home');
    // document.getElementById('img_log').src = '/static/images/svg/logo.svg';
  }, [page]);

  return (
    <React.Fragment>
      <Head>
        <title>{page.meta_title || page.name}</title>
        <meta name="title" content={page.meta_title || ''} />
        <meta name="description" content={page.meta_description || ''} />
        <meta name="keywords" content={page.meta_keyword || ''} />
        <meta
          property="og:image"
          itemProp="thumbnaiUrl"
          content={
            page.miniImage
              ? `${process.env.DOMAIN}${page.miniImage}`
              : `${process.env.DOMAIN}uploads/resources/files/icon/imgDefault.png`
          }
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="354" />
      </Head>
      <div className="main_content">
        {page.breadCrumb && <Breadcrumb data={[]} />}
        <Carousel silder={silder} />
        <MenuMiddle data={menuMiddle} />
        <BlockRender data={page.pageBlocks} pageId={page.id} />
        <FormRate data={listRate} interestRate={listInterestRate} />
      </div>
    </React.Fragment>
  );
}

Home.getInitialProps = async () => {
  let page = {};
  let silder = [];
  let menuMiddle = {};
  const pageResponse = await getPageMutiLangBySlug('en', 'homepage');
  if (pageResponse && pageResponse !== undefined && pageResponse.status === 200) {
    page = pageResponse.data;
    menuMiddle = pageResponse.data.menuMiddle;
    const silderData = filter(pageResponse.data.pageBlocks, item => item.name === 'Silder');
    for (let i = 0; i < silderData.length; i++) {
      if (silderData[i].content !== null) {
        silder = [...silder, ...JSON.parse(silderData[i].content)];
      }
    }
  }
  return {
    page,
    silder,
    menuMiddle
  };
};

Home.propTypes = propTypes;

export default Home;
