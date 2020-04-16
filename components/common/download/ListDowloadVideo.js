import React, { useEffect, useState } from 'react';
import { DowloadVideo, Fillter } from '../download';
import { Pagination } from '../../common';
import { RegulationActions } from '../../../store/actions';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';

const propTypes = {
  type: PropTypes.number,
  listType: PropTypes.array,
  listRegulation: PropTypes.array,
  getTypeRegulation: PropTypes.func,
  seachRegulation: PropTypes.func,
  id: PropTypes.number,
  optionWidth: PropTypes.string
};

function ListDowloadFIle({
  type,
  optionWidth,
  listType,
  id,
  listRegulation,
  getTypeRegulation,
  seachRegulation
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
    <div className={`accodion accodion-2 container ${padding} downloadvideo`} id={id}>
      <Fillter
        center
        year={year}
        type={listType}
        setDate={event => setYear(event.target.value)}
        setType={event => setDataType(event.target.value)}
      />

      <div className="sec-tb">
        {listRegulation.investors && listRegulation.investors.length > 0 && (
          <DowloadVideo data={listRegulation.investors} year={year} isChecked={true} />
        )}
      </div>

      {listRegulation.size > 1 && (
        <Pagination page={page} setPage={pageNumber => setPage(pageNumber)} />
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
