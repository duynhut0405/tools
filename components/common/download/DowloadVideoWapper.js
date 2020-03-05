import React, { useState, useEffect } from 'react';
import { Fillter, DowloadVideo } from './index';
import { map } from 'lodash';
import { Pagination } from '../index';
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
  const [datatype, setDataType] = useState(1);
  const [page, setPage] = useState(0);

  useEffect(() => {
    seachRegulation(datatype, page);
    getTypeRegulation();
  }, [getTypeRegulation, seachRegulation]);

  useEffect(() => {
    seachRegulation(datatype, page);
  }, [datatype, page]);

  return (
    <div className="accodion accodion-2 container sec-tb">
      <Fillter
        center
        type={typeRegulation}
        setDate={event => setYear(event.target.value)}
        setType={event => setDataType(event.target.value)}
      />
      {map(listRegulation, item => {
        return (
          <div className="sec-tb">
            <DowloadVideo data={item.investors} year={item.year} isChecked />
          </div>
        );
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
    typeRegulation: state.regulationReducer.type,
    urlVideo: state.regulationReducer.urlVideo
  };
};

const mapDispatchToProps = {
  seachRegulation: RegulationActions.getRegulationByYear,
  getTypeRegulation: RegulationActions.getTypeRegulationAction,
  getUrlVideo: RegulationActions.getUrlVideo
};

DowloadFileWapper.propTypes = propTypes;

export default connect(mapStateToProp, mapDispatchToProps)(DowloadFileWapper);
