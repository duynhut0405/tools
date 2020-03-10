import React, { useEffect, useState } from 'react';

import { Carousel, BlockRender, DowloadCategory } from '../../components/common';
import Layout from '../../components/layout';
import { PageActions } from '../../store/actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Contact } from '../../components/common';

const propTypes = {
  list: PropTypes.object,
  silder: PropTypes.array,
  getPage: PropTypes.func
};

function Page({ list, silder, getPage }) {
  const name = 'lien-he';
  const [input, setInput] = useState(null);
  useEffect(() => {
    setInput(document.getElementById('Name'));
  }, []);

  useEffect(() => {
    getPage(name);
  }, []);
  console.log(input);
  return (
    <Layout>
      <div className="main_content">
        <Carousel className="category" silder={silder} />
        <Contact />
        <BlockRender data={list.pageBlocks} />
        <DowloadCategory />
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
