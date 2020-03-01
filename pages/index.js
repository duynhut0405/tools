import React, { useEffect } from 'react';
import { Carousel, BlockRender, MenuMiddle } from '../components/common';
import FormRate from '../components/formRate';
import Layout from '../components/layout';
import { PageActions, RateActions } from '../store/actions';
import { withTranslation } from '../i18n';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  list: Proptypes.object.isRequired,
  silder: Proptypes.array.isRequired,
  menuMiddle: Proptypes.object,
  listRate: Proptypes.object.isRequired,
  getHome: Proptypes.func.isRequired,
  getRate: Proptypes.func.isRequired
};

function Home({ list, silder, menuMiddle, listRate, getHome, getRate }) {
  useEffect(() => {
    getHome('homepage');
    getRate();
  }, [getHome, getRate]);

  return (
    <Layout title={list.meta_title}>
      <div className="main_content">
        <Carousel silder={silder} />
        <MenuMiddle data={menuMiddle} />
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
    menuMiddle: state.pageReducer.menuMiddle,
    listRate: state.rateReducer.data
  };
};

const mapDispatchToProps = {
  getHome: PageActions.getHomeAction,
  getRate: RateActions.getRateAction
};

Home.propTypes = propTypes;

Home.getInitialProps = async () => ({
  namespacesRequired: ['common', 'home']
});

export default connect(mapStateToProp, mapDispatchToProps)(withTranslation('common')(Home));
