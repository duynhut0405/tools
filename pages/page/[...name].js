import React, { useEffect } from 'react';
import Head from 'next/head';
import {
  Carousel,
  BlockRender,
  MenuMiddle,
  DowloadCategory,
  DowloadFileWapper,
  DowloadVideoWapper
} from '../../components/common';
import Layout from '../../components/layout';
import Investors from '../../components/investors';
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
  useEffect(() => {
    getPage(router.query.name);
  }, []);
  // console.log(list.name);
  return (
    <Layout>
      <Head>
        <title>{list.meta_title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main_content">
        <Carousel silder={silder} />
        <MenuMiddle data={menuMiddle} />
        {list.name === 'Nhà đầu tư' && <Investors />}
        {list.name === 'Đại hội cổ đông' && <DowloadVideoWapper />}
        {list.name === 'Tài liệu nhà đầu tư' && <DowloadFileWapper />}
        {list.name === 'Báo cáo thường niên' && <DowloadFileWapper />}
        <BlockRender data={list.pageBlocks} />
        {list.template === 4 && <DowloadCategory />}
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
