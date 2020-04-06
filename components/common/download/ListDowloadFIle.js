import React, { useEffect, useState } from 'react';
import { Fillter } from '../download';
import FileList from './FileList';
import File from './File';
import { Pagination } from '../../common';
import { RegulationActions } from '../../../store/actions';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  type: PropTypes.number,
  search: PropTypes.bool,
  loading: PropTypes.bool,
  listType: PropTypes.array,
  noQuestion: PropTypes.bool,
  listRegulation: PropTypes.array,
  getTypeRegulation: PropTypes.func,
  seachRegulation: PropTypes.func
};

function ListDowloadFIle({
  type,
  listType,
  listRegulation,
  search,
  getTypeRegulation,
  seachRegulation,
  noQuestion
}) {
  const date = new Date();
  const [datatype, setDataType] = useState(0);
  const [page, setPage] = useState(0);
  const [year, setYear] = useState(moment(date).format('YYYY'));

  useEffect(() => {
    getTypeRegulation(type);
    seachRegulation(type, 0, 10, 0, year);
  }, [getTypeRegulation]);

  useEffect(() => {
    seachRegulation(type, datatype, 10, page, year);
  }, [page, year, datatype]);

  return (
    <div className="accodion accodion-2 container">
      {search && (
        <Fillter
          center
          year={year}
          type={listType}
          setDate={event => setYear(event.target.value)}
          setType={event => setDataType(event.target.value)}
        />
      )}
      <div className="container">
        {listRegulation.investors && listRegulation.investors.length > 0 && (
          <div className="sec">
            {noQuestion && <File data={listRegulation.investors} />}
            {!noQuestion && (
              <FileList year={year} data={listRegulation.investors} isChecked={true} />
            )}
          </div>
        )}
      </div>
      {listRegulation.size > 1 && (
        <Pagination
          page={page}
          size={listRegulation.size}
          setPage={pageNumber => setPage(pageNumber)}
        />
      )}
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
