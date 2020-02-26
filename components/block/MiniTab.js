import React, { useState, useEffect } from 'react';
import { map, slice } from 'lodash';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { PageActions } from '../../store/actions';

const propTypes = {
  data: Proptypes.object.isRequired,
  listPages: Proptypes.array,
  getPageBlock: Proptypes.func,
  type: Proptypes.func
};

function MiniTab({ data, listPages, getPageBlock, type }) {
  const [page, setPage] = useState(3);
  const [active, setActive] = useState(false);
  const ids = map(data.pages, values => values.value);

  useEffect(() => {
    getPageBlock(ids);
  }, [getPageBlock]);

  const listNews = slice(listPages, 0, page);
  //   slice(data.news, 0, page)
  useEffect(() => {
    if (listNews.length === listPages.length) {
      setActive(true);
    }
  }, [page]);

  const showPage = () => {
    setActive(false);
    setPage(page + 3);
    if (active) {
      setPage(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (type === '1') {
    return (
      <div className="page_category">
        <div className="post_block mb-5 pt-4 mt-5">
          <div className="title">
            <h2>{data.title}</h2>
          </div>
          <div className="row">
            {map(listNews, item => (
              <div className="col-sm-4 col-md-6 col-lg-4" key={item.newsId}>
                <div className="post_content mb-3">
                  <div style={{ height: '187px', width: '100%', overflow: 'hidden' }}>
                    <img src={item.baseImage} alt="icon" />
                  </div>
                  <div className="content">
                    <h4>{item.name}</h4>
                    <p className="title">{item.meta_description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="btn">
            <button onClick={() => showPage()}>{active === false ? 'Xem thêm' : 'Thu gọn'}</button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="page_category">
      <div className="post_block mb-5 pt-4 mt-5">
        <div className="title">
          <h2>{data.title}</h2>
        </div>
        <div className="row">
          {map(listNews, item => (
            <div className="col-sm-6 col-md-6 col-lg-6" key={item.newsId}>
              <div className="post_content mb-3">
                <div
                  className="col-sm-3"
                  style={{ height: '187px', width: '100%', overflow: 'hidden' }}
                >
                  <img src={item.baseImage} alt="icon" />
                </div>
                <div className="content col-sm-9 ">
                  <h4>{item.name}</h4>
                  <p className="title">{item.meta_description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn">
          <button onClick={() => showPage()}>{active === false ? 'Xem thêm' : 'Thu gọn'}</button>
        </div>
      </div>
    </div>
  );
}
MiniTab.propTypes = propTypes;
const mapStateToProp = state => {
  return {
    listPages: state.pageReducer.listPages
  };
};

const mapDispatchToProps = {
  getPageBlock: PageActions.getPagesById
};

export default connect(mapStateToProp, mapDispatchToProps)(MiniTab);
