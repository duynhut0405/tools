import React, { useState, useEffect } from 'react';
import { Fillter, DowloadFile } from './index';
import { Pagination } from '../index';
import moment from 'moment';
import { RegulationActions } from '../../../store/actions';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  listRegulation: Proptypes.array.isRequired,
  typeRegulation: Proptypes.array.isRequired,
  seachRegulation: Proptypes.func.isRequired,
  getTypeRegulation: Proptypes.func.isRequired
};

function DowloadFileWapper({ listRegulation, typeRegulation, seachRegulation, getTypeRegulation }) {
  const date = new Date();
  const [year, setYear] = useState(moment(date).format('YYYY'));
  const [datatype, setDataType] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    seachRegulation(datatype, year, page);
    getTypeRegulation();
  }, [getTypeRegulation, seachRegulation]);

  useEffect(() => {
    seachRegulation(datatype, year, page);
  }, [year, datatype, page]);
  return (
    <div className="accodion accodion-2 container sec-tb">
      <Fillter
        center
        type={typeRegulation}
        setDate={event => setYear(event.target.value)}
        setType={event => setDataType(event.target.value)}
      />
      <DowloadFile data={listRegulation.investors} year={year} isChecked />
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
    listRegulation: state.regulationReducer.listData,
    typeRegulation: state.regulationReducer.type,
    urlVideo: state.regulationReducer.urlVideo
  };
};

const mapDispatchToProps = {
  seachRegulation: RegulationActions.getRegulation,
  getTypeRegulation: RegulationActions.getTypeRegulationAction,
  getUrlVideo: RegulationActions.getUrlVideo
};

DowloadFileWapper.propTypes = propTypes;

export default connect(mapStateToProp, mapDispatchToProps)(DowloadFileWapper);