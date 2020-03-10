import React, { useEffect } from 'react';
import { Carousel, BlockRender, MenuMiddle, DowloadCategory } from '../../components/common';
import { ListDowloadFIle, ListDowloadVideo } from '../../components/common/download';
import Layout from '../../components/layout';
import About from '../../components/about';
import Investors from '../../components/investors';
import OtherNews from '../../components/otherNews';
import Transaction from '../../components/transaction';
import { map } from 'lodash';
import { PageActions } from '../../store/actions';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
import { connect } from 'react-redux';

const propTypes = {
  list: PropTypes.object,
  silder: PropTypes.array,
  menuMiddle: PropTypes.object,
  getPage: PropTypes.func
};

function Page({ list, silder, menuMiddle, getPage }) {
  const router = useRouter();
  const { name } = router.query;
  let routerUrl = null;
  let params = '';
  map(name, url => (params = `${params}/${url}`));
  routerUrl = params.slice(1, params.length);

  useEffect(() => {
    getPage(routerUrl);
  }, []);

  return (
    <Layout title={list.meta_title}>
      <div className="main_content">
        <Carousel silder={silder} />
        <MenuMiddle data={menuMiddle} query={routerUrl} />
        {list.name === 'Nhà đầu tư' && <Investors />}
        {list.name === 'Thông báo' && <Investors />}
        {list.name === 'Báo cáo tài chính' && <ListDowloadFIle type={1} search />}
        {list.name === 'Đại hội cổ đông' && <ListDowloadVideo type={2} />}
        {list.name === 'Điều lệ' && <ListDowloadVideo type={3} />}
        {list.name === 'Báo cáo thường niên' && <ListDowloadFIle type={4} search />}
        {list.name === 'Tài liệu nhà đầu tư' && <ListDowloadFIle type={6} search />}
        {list.name === 'Công bố thông tin khác' && <OtherNews />}
        {list.name === 'Về MBBank' && <About />}
        {list.name === 'Điểm giao dịch ATM' && <Transaction />}
        <BlockRender data={list.pageBlocks} />
        {list.template === 4 && <DowloadCategory />}
      </div>
    </Layout>
  );
}

const mapStateToProp = state => {
  return {
    list: state.pageReducer.homedata,
    silder: state.pageReducer.silder,
    menuMiddle: state.pageReducer.menuMiddle
  };
};

const mapDispatchToProps = {
  getPage: PageActions.getHomeAction
};

Page.propTypes = propTypes;

Page.getInitialProps = async () => ({
  namespacesRequired: ['common', 'page']
});

export default connect(mapStateToProp, mapDispatchToProps)(withTranslation('common')(Page));
