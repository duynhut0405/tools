import React, { useEffect } from 'react';
import { Carousel, BlockRender, MenuMiddle, DowloadCategory } from '../components/common';
import FormRate from '../components/formRate';
import Layout from '../components/layout';
import { getLang } from '../utils/localStorage';
import { useTranslation } from 'react-i18next';
import { PageActions, RateActions } from '../store/actions';
import { withTranslation } from '../i18n';
import Proptypes from 'prop-types';
// import { ToolHome } from '../components/block/tool';
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
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(getLang());
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
        {list.template === 4 && <DowloadCategory />}
        {/* <ToolHome /> */}
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
  namespacesRequired: ['common', 'common']
});

export default connect(mapStateToProp, mapDispatchToProps)(withTranslation('common')(Home));
