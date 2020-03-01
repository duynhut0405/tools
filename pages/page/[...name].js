import React, { useEffect } from 'react';
import Head from 'next/head';
import { Carousel, BlockRender, MenuMiddle } from '../../components/common';
import Layout from '../../components/layout';
import { PageActions } from '../../store/actions';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
import { connect } from 'react-redux';

const propTypes = {
  list: PropTypes.object,
  silder: PropTypes.array,
  menuMiddle: PropTypes.array,
  getPage: PropTypes.func
};

function Page({ list, silder, menuMiddle, getPage }) {
  const router = useRouter();
  useEffect(() => {
    getPage(router.query.name);
  }, []);
  return (
    <Layout>
      <Head>
        <title>{list.meta_title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main_content">
        <Carousel silder={silder} />
        <MenuMiddle data={menuMiddle} />
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
  namespacesRequired: ['common', 'page']
});

export default connect(mapStateToProp, mapDispatchToProps)(withTranslation('common')(Page));
