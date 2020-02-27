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
        <link
          rel="icon"
          href="https://www.mbbank.com.vn//images/icons/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
          integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div className="main_content">
        <Carousel className="category" silder={silder} />
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
  getPage: PageActions.getHomeAction
};

Page.propTypes = propTypes;

export default connect(mapStateToProp, mapDispatchToProps)(Page);
