import React, { useEffect } from 'react';
import { Carousel, BlockRender, MenuMiddle, Breadcrumb } from '../../components/common';
import Head from 'next/head';
import map from 'lodash/map';
import filter from 'lodash/filter';
import { getPageMutiLangBySlug, getListPageBySlug } from '../../services/page';
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

function Page({ routerURL, page, silder, menuMiddle, listSlug, slugClass, hasSideber }) {
  const link_canonical = page.meta_keyword
    ? page.meta_keyword
    : `<link rel="canonical" href="${process.env.LINK_DOMAIN}/page/${page.slug}">`;
  const noIndex = page.noIndex ? page.noIndex : '';

  useEffect(() => {
    Cookies.set('lang', 'vi');
    document.body.className = '';
    document.body.classList.add('page');
    Cookies.set('btn', false);
    if (slugClass) {
      document.body.classList.add(`${slugClass}`);
    }
    if (page && page.template === 6) {
      document.body.classList.add(`page-fom-dang-ky-tu-van`);
      Cookies.set('btn', true);
    }
    if (page && (page.template === 4 || page.template === 5 || page.template === 6)) {
      document.body.classList.add(`title-24`);
    }
    if (hasSideber === 1) {
      const body = document.getElementsByTagName('body')[0];
      const logo = document.getElementById('img_log');
      if (body && logo) {
        logo.src = '/static/images/svg/logo-priority.svg';
        body.classList.add('mb-priority');
        Cookies.set('priority', '/page/mb-priority');
      }
    }
    if (hasSideber === 0) {
      const logo = document.getElementById('img_log');
      const id_logo = document.getElementById('logo');
      if (logo && id_logo) {
        logo.src = '/static/images/svg/logo.svg';
        Cookies.set('priority', '/');
      }
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
        <meta property="og:title" content={page.meta_title || ''} />
        <meta property="og:description" content={page.meta_description || ''} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="354" />
      </Head>
      <div className="main_content">
        {page.breadCrumb && <Breadcrumb data={listSlug} />}
        <Carousel silder={silder} />
        <MenuMiddle data={menuMiddle} query={routerURL} />
        <BlockRender data={page.pageBlocks} pageId={page.id} />
      </div>
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
  const pageResponse = await getPageMutiLangBySlug('vi', routerURL);
  const listPageBySlug = await getListPageBySlug([routerURL]);
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
    hasSideber
  };
};

Page.propTypes = propTypes;

export default Page;
