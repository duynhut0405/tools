import React, { useEffect } from 'react';
import { Carousel, BlockRender, MenuMiddle, DowloadCategory } from '../../components/common';
import { ListDowloadFIle, ListDowloadVideo } from '../../components/common/download';
import Layout from '../../components/layout';
import Investors from '../../components/investors';
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
  useEffect(() => {
    getPage(router.query.name);
  }, []);

  const { name } = router.query;
  return (
    <Layout title={list.meta_title}>
      <div className="main_content">
        <Carousel silder={silder} />
        <MenuMiddle
          data={menuMiddle}
          query={name[0] === undefined || name[0] === null ? '' : name[0]}
        />
        {list.name === 'Nhà đầu tư' && <Investors />}
        {list.name === 'Thông báo' && <Investors />}
        {list.name === 'Báo cáo tài chính' && <ListDowloadFIle type={1} />}
        {list.name === 'Đại hội cổ đông' && <ListDowloadVideo type={2} />}
        {list.name === 'Điều lệ' && <ListDowloadVideo type={3} />}
        {list.name === 'Báo cáo thường niên' && <ListDowloadFIle type={4} />}
        {list.name === 'Tài liệu nhà đầu tư' && <ListDowloadFIle type={6} />}
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
