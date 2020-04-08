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
  getTypeRegulation: Proptypes.func.isRequired,
  searByYear: Proptypes.func
};

function DowloadFileWapper({ listRegulation, typeRegulation, seachRegulation, getTypeRegulation }) {
  const [datatype, setDataType] = useState(1);
  const [page, setPage] = useState(0);
  const [year, setYear] = useState(0);

  useEffect(() => {
    seachRegulation(datatype, page, year);
    getTypeRegulation();
  }, [getTypeRegulation, seachRegulation]);

  useEffect(() => {
    seachRegulation(datatype, page, year);
  }, [datatype, page, year]);

  return (
    <div className="accodion accodion-2 container sec">
      <Fillter
        center
        year={year}
        type={typeRegulation}
        setDate={event => setYear(event.target.value)}
        setType={event => setDataType(event.target.value)}
      />
      {map(listRegulation, item => {
        if (item.investors.length > 0) {
          return (
            <div className="sec-tb" key={item.year}>
              <DowloadVideo data={item.investors} year={item.year} isChecked />
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
