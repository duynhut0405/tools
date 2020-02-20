import React, { useEffect } from 'react';
import Head from 'next/head';
import { map } from 'lodash';
import { Carousel } from '../components/common';
import Layout from '../components/layout';
import { Post } from '../components/block';
import { HomeActions } from '../store/actions';
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
        <div className="container">
          {map(list.pageBlocks, (values, index) => {
            if (values.name === 'Block News') {
              return <Post data={JSON.parse(values.content)} key={index} />;
            }
            return null;
          })}
        </div>
      </div>
    </Layout>
  );
}

const mapStateToProp = state => {
  return {
    list: state.HomeReducer.homedata,
    silder: state.HomeReducer.silder
  };
};

const mapDispatchToProps = {
  getHome: HomeActions.getHomeAction
};

Home.propTypes = propTypes;

export default connect(mapStateToProp, mapDispatchToProps)(Home);
