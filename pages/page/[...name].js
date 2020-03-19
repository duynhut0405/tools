import React from 'react';
import { Carousel, BlockRender, MenuMiddle } from '../../components/common';
import Layout from '../../components/layout';
import map from 'lodash/map';
import filter from 'lodash/filter';
import { getPageService } from '../../services/page';
import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';

const propTypes = {
  page: PropTypes.object,
  silder: PropTypes.array,
  menuMiddle: PropTypes.object,
  routerURL: PropTypes.string
};

function Page({ page, silder, menuMiddle, routerURL }) {
  return (
    <Layout title={page.meta_title} personalLayout={page.has_sidebar}>
      <div className="main_content">
        <Carousel silder={silder} />
        <MenuMiddle data={menuMiddle} query={routerURL} />
        <BlockRender data={page.pageBlocks} />
      </div>
    </Layout>
  );
}

Page.getInitialProps = async ctx => {
  const { query } = ctx.ctx;
  let routerURL = null;
  let params = '';
  map(query.name, url => (params = `${params}/${url}`));
  routerURL = params.slice(1, params.length);
  let page = {};
  let silder = [];
  let menuMiddle = {};
  const pageResponse = await getPageService(routerURL);
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
    namespacesRequired: ['common', 'common'],
    routerURL,
    page,
    silder,
    menuMiddle
  };
};

Page.propTypes = propTypes;

export default withTranslation('common')(Page);
