import React, { useEffect } from 'react';
import Head from 'next/head';
import { Carousel, BlockRender } from '../components/common';
import Layout from '../components/layout';
import { PageActions } from '../store/actions';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  list: Proptypes.object.isRequired,
  silder: Proptypes.object.isRequired,
  getHome: Proptypes.func.isRequired
};

function Home({ list, silder, getHome }) {
  useEffect(() => {
    getHome('homepage');
  }, [getHome]);
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
        <Carousel silder={silder} />
        <BlockRender data={list.pageBlocks} />
      </div>
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
  getHome: PageActions.getHomeAction
};

Home.propTypes = propTypes;

export default connect(mapStateToProp, mapDispatchToProps)(Home);
