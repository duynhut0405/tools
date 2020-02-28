import React, { useEffect } from 'react';
import Head from 'next/head';
import { Carousel, BlockRender } from '../../components/common';
import Layout from '../../components/layout';
import { PageActions } from '../../store/actions';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  list: PropTypes.object,
  silder: PropTypes.array,
  getPage: PropTypes.func
};

function Page({ list, silder, getPage }) {
  const router = useRouter();

  useEffect(() => {
    getPage(router.query.slug);
  }, []);
  return (
    <Layout>
      <Head>
        <title>{list.meta_title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="main" className="sec-tb ">
        <div className="main_content">
          <Carousel silder={silder} />
          <BlockRender data={list.pageBlocks} />
        </div>
      </main>
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
