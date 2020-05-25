import React, { useEffect, useState } from 'react';
import { Carousel, BlockRender, MenuMiddle, Breadcrumb } from '../../../components/common';
import Layout from '../../../components/layout';
import Head from 'next/head';
import map from 'lodash/map';
import filter from 'lodash/filter';
import { getCommon, getMemnu } from '../../../utils/fetch';
import { getPageMutiLangBySlug, getListPageBySlug } from '../../../services/page';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

const propTypes = {
  page: PropTypes.object,
  silder: PropTypes.array,
  menuMiddle: PropTypes.object,
  routerURL: PropTypes.string,
  listSlug: PropTypes.array,
  slugClass: PropTypes.string,
  hasSideber: PropTypes.number,
  menuHeader: PropTypes.array,
  menuNav: PropTypes.array,
  menuFooterTop: PropTypes.array,
  menuFooterBottom: PropTypes.array,
  menuFooterMain: PropTypes.array,
  menuSearch: PropTypes.array,
  menuMobile: PropTypes.array,
  linkApp: PropTypes.object,
  general: PropTypes.object,
  socialLink: PropTypes.object
};

function Page({
  routerURL,
  page,
  silder,
  menuMiddle,
  listSlug,
  slugClass,
  hasSideber,
  menuHeader,
  menuNav,
  menuFooterTop,
  menuFooterMain,
  menuFooterBottom,
  menuSearch,
  menuMobile,
  general,
  socialLink,
  linkApp
}) {
  const link_canonical = page.meta_keyword
    ? page.meta_keyword
    : `<link rel="canonical" href="${process.env.LINK_DOMAIN}/page/${page.slug}">`;
  const noIndex = page.noIndex ? page.noIndex : '';
  const [isPrioty, setIsPrioty] = useState(null);
  useEffect(() => {
    Cookies.set('lang', 'en');
    document.body.className = '';
    document.body.classList.add('page');
    if (slugClass) {
      document.body.classList.add(`${slugClass}`);
    }
    if (page && (page.template === 4 || page.template === 5 || page.template === 6)) {
      document.body.classList.add(`title-24`);
    }
    if (hasSideber === 1) {
      setIsPrioty(true);
      const body = document.getElementsByTagName('body')[0];
      if (body) {
        body.classList.add('mb-priority');
      }
    }
    if (hasSideber === 0) {
      setIsPrioty(false);
    }
  }, [page, hasSideber]);

  return (
    <React.Fragment>
      <Head>
        <title>{page.meta_title || page.name}</title>
        <meta name="title" content={page.meta_title || page.name} />
        <meta name="description" content={page.meta_description || ''} />
        <meta name="keywords" content={page.meta_keyword || ''} />
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
        {!noIndex && <meta name="robots" content="index, follow" />}
        {ReactHtmlParser(link_canonical)}
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
      <Layout
        lang="en"
        isPrioty={isPrioty}
        idPage={page.id}
        menuFooterBottom={menuFooterBottom}
        menuFooterMain={menuFooterMain}
        menuFooterTop={menuFooterTop}
        menuMobile={menuMobile}
        menuNav={menuNav}
        menuSearch={menuSearch}
        menuHeader={menuHeader}
        settingFooter={general}
        socialLink={socialLink}
        linkApp={linkApp}
      >
        <div className="main_content">
          {page.breadCrumb && <Breadcrumb data={listSlug} />}
          <Carousel silder={silder} />
          <MenuMiddle data={menuMiddle} query={routerURL} />
          <BlockRender data={page.pageBlocks} pageId={page.id} />
        </div>
      </Layout>
    </React.Fragment>
  );
}

Page.getInitialProps = async ctx => {
  const { query } = ctx.ctx;
  let routerURL = null;
  let params = '';
  let slugClass = '';
  map(query.name, url => {
    slugClass = `${slugClass}-${url}`;
    return (params = `${params}/${url}`);
  });
  routerURL = params.slice(1, params.length);
  slugClass = slugClass.slice(1, slugClass.length);
  let page = {};
  let silder = [];
  let menuMiddle = {};
  let listSlug = [];
  let hasSideber = 0;
  const menu = await getMemnu('en');
  const {
    menuHeader,
    menuNav,
    menuFooterTop,
    menuFooterMain,
    menuFooterBottom,
    menuSearch,
    menuMobile
  } = menu;
  const common = await getCommon('en');
  const { general, socialLink, linkApp } = common;
  const pageResponse = await getPageMutiLangBySlug('en', routerURL);
  const listPageBySlug = await getListPageBySlug(query.name);
  if (pageResponse && pageResponse !== undefined && pageResponse.status === 200) {
    page = pageResponse.data;
    hasSideber = pageResponse.data.has_sidebar;
    menuMiddle = pageResponse.data.menuMiddle;
    const silderData = filter(pageResponse.data.pageBlocks, item => item.name === 'Silder');
    for (let i = 0; i < silderData.length; i++) {
      if (silderData[i].content !== null) {
        silder = [...silder, ...JSON.parse(silderData[i].content)];
      }
    }
  }
  if (listPageBySlug && listPageBySlug !== undefined && listPageBySlug.status === 200) {
    listSlug = listPageBySlug.data;
  }
  return {
    routerURL,
    page,
    silder,
    menuMiddle,
    listSlug,
    slugClass,
    hasSideber,
    menuHeader,
    menuNav,
    menuFooterTop,
    menuFooterMain,
    menuFooterBottom,
    menuSearch,
    menuMobile,
    general,
    socialLink,
    linkApp
  };
};

Page.propTypes = propTypes;

export default Page;
