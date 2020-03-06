import React, { useEffect, useState } from 'react';
import { DowloadFile, Fillter } from '../download';
import { Pagination } from '../../common';
import { RegulationActions } from '../../../store/actions';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  type: PropTypes.number,
  listType: PropTypes.array,
  listRegulation: PropTypes.array,
  getTypeRegulation: PropTypes.func,
  seachRegulation: PropTypes.func
};

function ListDowloadFIle({ type, listType, listRegulation, getTypeRegulation, seachRegulation }) {
  const [datatype, setDataType] = useState(0);
  const [page, setPage] = useState(0);
  const [year, setYear] = useState(0);

  useEffect(() => {
    getTypeRegulation(type);
    seachRegulation(type, 0, 10, 0, 0);
  }, [getTypeRegulation]);

  useEffect(() => {
    seachRegulation(type, datatype, 10, page, year);
  }, [page, year, datatype]);

  return (
    <div className="accodion accodion-2 container sec-tb">
      <Fillter
        center
        type={listType}
        setDate={event => setYear(event.target.value)}
        setType={event => setDataType(event.target.value)}
      />
      {map(listRegulation, (item, index) => {
        if (item.investors.length > 0) {
          return (
            <div className="sec-tb" key={item.year}>
              <DowloadFile
                data={item.investors}
                year={item.year}
                isChecked={index === 0 ? true : false}
              />
            </div>
          );
        }
        return null;
      })}
      <Pagination
        page={page}
        setPage={pageNumber => setPage(pageNumber)}
        next={nextNumber => setPage(nextNumber)}
        previous={previousNumber => setPage(previousNumber)}
      />
    </div>
  );
}

const mapStateToProp = state => {
  return {
    listRegulation: state.regulationReducer.listDataByYear,
    listType: state.regulationReducer.listTypeByID
  };
};

const mapDispatchToProps = {
  seachRegulation: RegulationActions.getRegulationByYear,
  getTypeRegulation: RegulationActions.getTypeRegulationByIDAction
};

ListDowloadFIle.propTypes = propTypes;

export default connect(mapStateToProp, mapDispatchToProps)(ListDowloadFIle);
