import React, { useEffect } from 'react';
import { Carousel, BlockRender, MenuMiddle } from '../../components/common';
import Layout from '../../components/layout';
import { map } from 'lodash';
import { PageActions } from '../../store/actions';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
import { connect } from 'react-redux';

const propTypes = {
  list: PropTypes.object,
  silder: PropTypes.array,
  menuMiddle: PropTypes.object,
  getPage: PropTypes.func
};

function Page({ list, silder, menuMiddle, getPage }) {
  const router = useRouter();
  const { name } = router.query;
  let routerUrl = null;
  let params = '';
  map(name, url => (params = `${params}/${url}`));
  routerUrl = params.slice(1, params.length);

  useEffect(() => {
    getPage(routerUrl);
  }, []);

  return (
    <Layout title={list.meta_title} personalLayout={list.has_sidebar}>
      <div className="main_content">
        <Carousel silder={silder} />
        <MenuMiddle data={menuMiddle} query={routerUrl} />
        <BlockRender data={list.pageBlocks} />
      </div>
    </Layout>
  );
}

const mapStateToProp = state => {
  return {
    list: state.pageReducer.homedata,
    silder: state.pageReducer.silder,
    menuMiddle: state.pageReducer.menuMiddle
  };
};

const mapDispatchToProps = {
  getPage: PageActions.getHomeAction
};

Page.propTypes = propTypes;

Page.getInitialProps = async () => ({
  namespacesRequired: ['common', 'common']
});

export default connect(mapStateToProp, mapDispatchToProps)(withTranslation('common')(Page));
