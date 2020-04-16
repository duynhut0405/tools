import React, { useState, useEffect } from 'react';
import { Fillter, DowloadFile, DowloadVideo } from './download';
import moment from 'moment';
import { RegulationActions } from '../../store/actions';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  listRegulation: Proptypes.array,
  typeRegulation: Proptypes.array,
  seachRegulation: Proptypes.func,
  getTypeRegulation: Proptypes.func,
  optionWidth: Proptypes.string,
  id: Proptypes.number
};

function DowloadCategory({
  optionWidth,
  listRegulation,
  typeRegulation,
  seachRegulation,
  getTypeRegulation,
  id
}) {
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

  let padding = '';
  if (Number(optionWidth) === 2) {
    padding = 'sec-tb';
  } else if (Number(optionWidth) === 3) {
    padding = 'sec-t';
  } else if (Number(optionWidth) === 4) {
    padding = 'sec-b';
  } else {
    padding = 'sec-';
  }

  return (
    <React.Fragment>
      <div className={`accodion accodion-2 container ${padding} downloadcategory`} id={id}>
        <Fillter
          type={typeRegulation}
          setDate={event => setYear(event.target.value)}
          setType={event => setDataType(event.target.value)}
        />
        <DowloadFile data={listRegulation} year={year} isChecked />
        <DowloadVideo data={listRegulation} year={year} />
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
