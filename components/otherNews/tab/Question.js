import React, { useState, useEffect, useCallback } from 'react';
import { ListDowloadQA } from '../../common/download';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { RegulationActions } from '../../../store/actions';
import { connect } from 'react-redux';

const propTypes = {
  text: PropTypes.string,
  searchRegulationByType: PropTypes.func
};
function TabQuestion({ text, searchRegulationByType }) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    searchRegulationByType({ idSearch: 9, search });
  }, [search]);

  const handleChangeInput = useCallback(
    debounce(value => {
      setSearch(value);
    }, 300),
    []
  );
  // const handleChangeInput = value => {
  //   setSearch(value);
  // };

  return (
    <div className="tab-inner">
      <div className="max750 mb-40">
        <div className="inline-table w100">
          <h3 className="ctext">{text}</h3>
          <div className="c100">
            <form role="search" className="searchform input h50">
              <input
                type="text"
                onChange={event => {
                  handleChangeInput(event.target.value);
                }}
                name="search"
                className="textinput"
              />
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

const mapDispatchToProps = {
  searchRegulationByType: RegulationActions.searchRegulationByTypeAction
};
TabQuestion.propTypes = propTypes;
export default connect(null, mapDispatchToProps)(TabQuestion);
