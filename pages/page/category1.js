import React, { useEffect } from 'react';
import Head from 'next/head';
import { Carousel, BlockRender } from '../../components/common';
import Layout from '../../components/layout';
import { PageActions } from '../../store/actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  list: PropTypes.object,
  silder: PropTypes.array,
  getPage: PropTypes.func
};

function Page({ list, silder, getPage }) {
  const name = 'bao-cao-tai-chinh';

  useEffect(() => {
    getPage(name);
  }, []);

  return (
    <Layout>
      <Head>
        <title>{list.meta_title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Carousel className="category" silder={silder} />
      <BlockRender data={list.pageBlocks} />
    </Layout>
  );
}

const mapStateToProp = state => {
  return {
    list: state.pageReducer.homedata,
    silder: state.pageReducer.silder
  };
};

const mapDispatchToProps = {
  getPage: PageActions.getHomeAction
};

Page.propTypes = propTypes;

export default connect(mapStateToProp, mapDispatchToProps)(Page);
