import React from 'react';
import { ListDowloadQA } from '../../common/download';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.object
};

function TabQuestion({ text }) {
  return (
    <div className="tab-inner">
      <div className="max750 mb-40">
        <div className="inline-table w100">
          <h3 className="ctext">{text}</h3>
          <div className="c100">
            <form role="search" className="searchform input h50">
              <input type="text" name="s" className="textinput" />
              <button type="submit" className="searchbutton">
                <i className="icon-search-2"> </i>
              </button>
            </form>
          </div>
        </div>
      </div>
      <section className="sec-b sec-cauhoi">
        <div className="container">
          <ListDowloadQA type={9} />
        </div>
      </section>
    </div>
  );
}

TabQuestion.propTypes = propTypes;

export default TabQuestion;
