import React, { useState, useEffect } from 'react';
import { Fillter, DowloadFile, DowloadVideo } from './download';
import moment from 'moment';
import { RegulationActions } from '../../store/actions';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  listRegulation: Proptypes.array.isRequired,
  typeRegulation: Proptypes.array.isRequired,
  seachRegulation: Proptypes.func.isRequired,
  getTypeRegulation: Proptypes.func.isRequired
};

function DowloadCategory({ listRegulation, typeRegulation, seachRegulation, getTypeRegulation }) {
  const date = new Date();
  const [year, setYear] = useState(moment(date).format('YYYY'));
  const [datatype, setDataType] = useState(1);

  useEffect(() => {
    seachRegulation({ idSearch: datatype, year: year });
    getTypeRegulation();
  }, [getTypeRegulation, seachRegulation]);

  useEffect(() => {
    seachRegulation({ idSearch: datatype, year: year });
  }, [year, datatype]);

  return (
    <React.Fragment>
      <div className="accodion accodion-2 container sec-tb">
        {/* <Fillter
          type={typeRegulation}
          setDate={event => setYear(event.target.value)}
          setType={event => setDataType(event.target.value)}
        />
        <DowloadFile data={listRegulation} year={year} isChecked />
        <DowloadVideo data={listRegulation} year={year} /> */}
      </div>
    </React.Fragment>
  );
}

const mapStateToProp = state => {
  return {
    listRegulation: state.regulationReducer.data,
    typeRegulation: state.regulationReducer.type,
    urlVideo: state.regulationReducer.urlVideo
  };
};

const mapDispatchToProps = {
  seachRegulation: RegulationActions.searchRegulationAction,
  getTypeRegulation: RegulationActions.getTypeRegulationAction,
  getUrlVideo: RegulationActions.getUrlVideo
};

DowloadCategory.propTypes = propTypes;

export default connect(mapStateToProp, mapDispatchToProps)(DowloadCategory);
