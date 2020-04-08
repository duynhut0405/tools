import React, { useEffect, useState } from 'react';
import { Fillter } from '../download';
import moment from 'moment';
import Question from './Question';
import { Pagination } from '../../common';
import { RegulationActions } from '../../../store/actions';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  type: PropTypes.number,
  search: PropTypes.bool,
  loading: PropTypes.bool,
  listType: PropTypes.array,
  listRegulation: PropTypes.array,
  getTypeRegulation: PropTypes.func,
  seachRegulation: PropTypes.func
};

function ListDowloadQA({
  type,
  listType,
  listRegulation,
  search,
  getTypeRegulation,
  seachRegulation
}) {
  const date = new Date();
  const [datatype, setDataType] = useState(0);
  const [page, setPage] = useState(0);
  const [year, setYear] = useState(moment(date).format('YYYY'));

  useEffect(() => {
    seachRegulation(type, year, page);
  }, [getTypeRegulation]);

  useEffect(() => {
    seachRegulation(type, year, page);
  }, [page]);

  return (
    <div className="accodion accodion-1 container">
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
        <Pagination page={page} size={page.size} setPage={pageNumber => setPage(pageNumber)} />
      )}
    </div>
  );
}

const mapStateToProp = state => {
  return {
    listRegulation: state.regulationReducer.listData,
    listType: state.regulationReducer.listTypeByID
  };
};

const mapDispatchToProps = {
  seachRegulation: RegulationActions.getRegulation,
  getTypeRegulation: RegulationActions.getTypeRegulationByIDAction
};

ListDowloadQA.propTypes = propTypes;

export default connect(mapStateToProp, mapDispatchToProps)(ListDowloadQA);
