import React, { useEffect } from 'react';
import { Carousel, BlockRender, MenuMiddle, Breadcrumb } from '../components/common';
import FormRate from '../components/formRate';
import Head from 'next/head';
import { getRateService, getInterestRateService } from '../services/rate';
import { getPageService } from '../services/page';
import filter from 'lodash/filter';
import { withTranslation } from '../i18n';
import Proptypes from 'prop-types';

const propTypes = {
  page: Proptypes.object,
  silder: Proptypes.array,
  menuMiddle: Proptypes.object,
  listRate: Proptypes.object,
  listInterestRate: Proptypes.array
};

function Home({ page, silder, menuMiddle, listRate, listInterestRate }) {
  useEffect(() => {
    document.body.classList.add('home');
    document.body.classList.remove(`mb-priority`);
    document.getElementById('img_log').src = '/static/images/svg/logo.svg';
  });

  return (
    <React.Fragment>
      <Head>
        <title>{page.meta_title || page.name}</title>
        <meta name="title" content={page.meta_title || ''} />
        <meta name="description" content={page.meta_description || ''} />
        <meta name="keywords" content={page.meta_keyword || ''} />
        <meta
          property="og:image"
          itemProp="thumbnaiUrl"
          content={
            page.miniImage
              ? `${process.env.DOMAIN}${page.miniImage}`
              : `${process.env.DOMAIN}uploads/resources/files/icon/imgDefault.png`
          }
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="354" />
      </Head>
      <div className="main_content">
        {page.breadCrumb && <Breadcrumb data={[]} />}
        <Carousel silder={silder} />
        <MenuMiddle data={menuMiddle} />
        <BlockRender data={page.pageBlocks} pageId={page.id} />
        <FormRate data={listRate} interestRate={listInterestRate} />
      </div>
    </React.Fragment>
  );
}

Home.getInitialProps = async () => {
  let listRate = [],
    listInterestRate = [];
  const rateResponse = await getRateService();
  if (rateResponse && rateResponse !== undefined && rateResponse.status === 200) {
    listRate = rateResponse.data;
  }
  const interestRateRes = await getInterestRateService();
  if (interestRateRes && interestRateRes !== undefined && interestRateRes.status === 200) {
    listInterestRate = interestRateRes.data;
  }
  let page = {};
  let silder = [];
  let menuMiddle = {};
  const pageResponse = await getPageService('homepage');
  if (pageResponse && pageResponse !== undefined && pageResponse.status === 200) {
    page = pageResponse.data;
    menuMiddle = pageResponse.data.menuMiddle;
    silder = filter(pageResponse.data.pageBlocks, item => item.name === 'Silder');
  }
  return {
    listRate,
    page,
    silder,
    menuMiddle,
    listInterestRate
  };
};

Home.propTypes = propTypes;

export default withTranslation('common')(Home);
