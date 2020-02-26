import React, { useEffect } from 'react';
import Head from 'next/head';
import { Carousel, BlockRender } from '../components/common';
import FormRate from '../components/formRate';
import Layout from '../components/layout';
import { PageActions, RateActions } from '../store/actions';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  list: Proptypes.object.isRequired,
  silder: Proptypes.array.isRequired,
  listRate: Proptypes.object.isRequired,
  getHome: Proptypes.func.isRequired,
  getRate: Proptypes.func.isRequired
};

function Home({ list, silder, listRate, getHome, getRate }) {
  useEffect(() => {
    getHome('homepage');
    getRate();
  }, [getHome, getRate]);
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
        <FormRate data={listRate} />
      </div>
    </Layout>
  );
}

const mapStateToProp = state => {
  return {
    list: state.pageReducer.homedata,
    silder: state.pageReducer.silder,
    listRate: state.rateReducer.data
  };
};

const mapDispatchToProps = {
  getHome: PageActions.getHomeAction,
  getRate: RateActions.getRateAction
};

Home.propTypes = propTypes;

export default connect(mapStateToProp, mapDispatchToProps)(Home);
