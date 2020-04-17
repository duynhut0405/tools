import React, { useEffect } from 'react';
import { Carousel, BlockRender, MenuMiddle, Breadcrumb } from '../../components/common';
import Layout from '../../components/layout';
import map from 'lodash/map';
import filter from 'lodash/filter';
import { getPageService, getListPageBySlug } from '../../services/page';
import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';

const propTypes = {
  page: PropTypes.object,
  silder: PropTypes.array,
  menuMiddle: PropTypes.object,
  routerURL: PropTypes.string,
  listSlug: PropTypes.array,
  slugClass: PropTypes.string
};

function Page({ page, silder, menuMiddle, routerURL, listSlug, slugClass }) {
  const link_canonical = page.meta_keyword
    ? page.meta_keyword
    : `<link rel="canonical" href="https:www.mbbank.com.vn/page/${page.slug}">`;
  const noIndex = page.noIndex ? page.noIndex : '';
  useEffect(() => {
    document.body.classList.add('page');
    if (slugClass) {
      document.body.classList.add(`${slugClass}`);
    }
    if (page && (page.template === 4 || page.template === 5 || page.template === 6)) {
      document.body.classList.add(`title-24`);
    }
  }, [page]);
  return (
    <Layout
      title={page.meta_title}
      personalLayout={page.has_sidebar}
      canonical={link_canonical}
      noIndex={noIndex}
      meta_title={page.meta_title}
      meta_description={page.meta_description}
      meta_keyword={page.meta_keyword}
      miniImage={page.miniImage}
    >
      <div className="main_content">
        {page.breadCrumb && <Breadcrumb data={listSlug} />}
        {silder && <Carousel silder={silder} />}
        <MenuMiddle data={menuMiddle} query={routerURL} />
        <BlockRender data={page.pageBlocks} pageId={page.id} />
      </div>
    </Layout>
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
  const pageResponse = await getPageService(routerURL);
  const listPageBySlug = await getListPageBySlug(query.name);
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
  if (listPageBySlug && listPageBySlug !== undefined && listPageBySlug.status === 200) {
    listSlug = listPageBySlug.data;
  }
  return {
    routerURL,
    page,
    silder,
    menuMiddle,
    listSlug,
    slugClass
  };
};

Page.propTypes = propTypes;

export default withTranslation('common')(Page);
