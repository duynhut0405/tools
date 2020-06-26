import React, { useState, useEffect, useCallback } from 'react';
import { ListDowloadQA } from '../../common/download';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { searchRegulationByType } from '../../../services/regulation';

const propTypes = {
  text: PropTypes.string,
  searchRegulationByType: PropTypes.func
};
function TabQuestion({ text }) {
  const [search, setSearch] = useState(null);
  const [dataSearch, setDataSearch] = useState(null);

  const searchRegulation = async (query, pagin) => {
    const res = await searchRegulationByType(query, pagin);
    if (res && res.status === 200) {
      setDataSearch(res.data);
    }
  };

  useEffect(() => {
    if (search !== null) {
      searchRegulation({ idSearch: 9, search }, { number: 10, page: 0 });
    }
  }, [search]);

  const handleChangeInput = useCallback(
    debounce(value => {
      setSearch(value);
    }, 300),
    []
  );

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
          <ListDowloadQA type={9} dataSearch={dataSearch} />
        </div>
      </section>
    </div>
  );
}

TabQuestion.propTypes = propTypes;

export default TabQuestion;
