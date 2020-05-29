import React, { useEffect, useState } from 'react';
import { Fillter } from '../download';
import moment from 'moment';
import Question from './Question';
import { Pagination } from '../../common';
import { getRegulationPagation } from '../../../services/regulation';
import { map } from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
  type: PropTypes.number,
  search: PropTypes.bool,
  loading: PropTypes.bool,
  listType: PropTypes.array,
  listRegulation: PropTypes.object,
  getTypeRegulation: PropTypes.func,
  seachRegulation: PropTypes.func,
  dataSearch: PropTypes.array
};

function ListDowloadQA({ type, search, dataSearch }) {
  const date = new Date();
  const [datatype, setDataType] = useState(0);
  const [page, setPage] = useState(0);
  const [year, setYear] = useState(moment(date).format('YYYY'));
  const [listRegulation, setListRegulation] = useState([]);
  const [listType, setListType] = useState([]);

  const seachRegulation = async (_type, _year, number, _page) => {
    const res = await getRegulationPagation(_type, _year, number, _page);
    if (res && res.status === 200) {
      setListRegulation(res.data);
    }
  };

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 768) {
      seachRegulation(type, year, 5, page);
    } else {
      seachRegulation(type, year, 10, page);
    }
  }, [getTypeRegulation]);

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 768) {
      seachRegulation(type, year, 5, page);
    } else {
      seachRegulation(type, year, 10, page);
    }
  }, [page]);

  useEffect(() => {
    if (dataSearch !== null) {
      setListRegulation(dataSearch);
    }
  }, [dataSearch]);

  return (
    <div className="accodion accodion-1">
      <div className="container">
        {search && (
          <Fillter
            center
            year={year}
            type={listType}
            setDate={event => setYear(event.target.value)}
            setType={event => setDataType(event.target.value)}
          />
        )}
        <section className="sec sec-cauhoi">
          {map(listRegulation.investors, (item, index) => {
            return (
              <Question
                key={index}
                answer={item.description}
                question={item.name}
                isChecked={index === 0 ? true : false}
              />
            );
          })}
        </section>
        {listRegulation.size > 1 && (
          <Pagination size={listRegulation.size} setPage={pageNumber => setPage(pageNumber)} />
        )}
      </div>
    </div>
  );
}

ListDowloadQA.propTypes = propTypes;

export default ListDowloadQA;
