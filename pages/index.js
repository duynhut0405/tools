import React, { useEffect } from 'react';
import { Carousel, BlockRender, MenuMiddle } from '../components/common';
import FormRate from '../components/formRate';
import Layout from '../components/layout';
import { getLang } from '../utils/localStorage';
import { useTranslation } from 'react-i18next';
import { getRateService } from '../services/rate';
import { getPageService } from '../services/page';
import filter from 'lodash/filter';
import { withTranslation } from '../i18n';
import Proptypes from 'prop-types';

const propTypes = {
  page: Proptypes.object.isRequired,
  silder: Proptypes.array.isRequired,
  menuMiddle: Proptypes.object,
  listRate: Proptypes.object.isRequired
};

function Home({ page, silder, menuMiddle, listRate }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(getLang());
  }, []);

  return (
    <Layout title={page.meta_title}>
      <div className="main_content">
        <Carousel silder={silder} />
        <MenuMiddle data={menuMiddle} />
        <BlockRender data={page.pageBlocks} />
        <FormRate data={listRate} />
      </div>
    </Layout>
  );
}

Home.getInitialProps = async () => {
  let listRate = [];
  const rateResponse = await getRateService();
  if (rateResponse && rateResponse !== undefined && rateResponse.status === 200) {
    listRate = rateResponse.data;
  }
  let page = {};
  let silder = [];
  let menuMiddle = {};
  const pageResponse = await getPageService('homepage');
  if (pageResponse && pageResponse !== undefined && pageResponse.status === 200) {
    page = pageResponse.data;
    menuMiddle = pageResponse.data.menuMiddle;
    const silderData = filter(pageResponse.data.pageBlocks, item => item.name === 'Silder');
    for (let i = 0; i < silderData.length; i++) {
      if (silderData[i].content !== null) {
        silder = [...silder, ...JSON.parse(silderData[i].content)];
      }
    }
  }
  return {
    namespacesRequired: ['common', 'common'],
    listRate,
    page,
    silder,
    menuMiddle
  };
};

Home.propTypes = propTypes;

export default withTranslation('common')(Home);
