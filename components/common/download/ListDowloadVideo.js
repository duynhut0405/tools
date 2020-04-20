import React, { useEffect, useState } from 'react';
import { DowloadVideo, Fillter } from '../download';
import { Pagination } from '../../common';
import { RegulationActions } from '../../../store/actions';
import PropTypes from 'prop-types';
import { convertTitle } from '../../../utils/convertPadding';
import moment from 'moment';
import { connect } from 'react-redux';

const propTypes = {
  type: PropTypes.number,
  listType: PropTypes.array,
  listRegulation: PropTypes.array,
  getTypeRegulation: PropTypes.func,
  seachRegulation: PropTypes.func,
  id: PropTypes.number,
  optionWidth: PropTypes.string,
  data: PropTypes.object
};

function ListDowloadFIle({
  type,
  data,
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
  const [title] = useState(convertTitle(type));

  useEffect(() => {
    getTypeRegulation(type);
    const width = window.innerWidth;
    if (width < 768) {
      seachRegulation(type, 0, 5, 0, year);
    } else {
      seachRegulation(type, 0, 10, 0, year);
    }
  }, [getTypeRegulation]);

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 768) {
      seachRegulation(type, datatype, 5, page, year);
    } else {
      seachRegulation(type, datatype, 10, page, year);
    }
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
      {data && (
        <div className="entry-head">
          <h2 className="ht efch-1 ef-img-l">{title}</h2>
          <a className="viewall" href={data === undefined || data.url === '' ? '#' : data.url}>
            Xem tất cả <i className="icon-arrow-1"></i>
          </a>
        </div>
      )}
      <Fillter
        center
        year={year}
        type={listType}
        setDate={event => setYear(event.target.value)}
        setType={event => setDataType(event.target.value)}
      />

      <div className="sec-tb">
        {listRegulation.investors && listRegulation.investors.length > 0 && (
          <DowloadVideo data={listRegulation.investors} year={year} isChecked={true} fileIcon />
        )}
      </div>

      {listRegulation.size > 1 && (
        <Pagination size={listRegulation.size} setPage={pageNumber => setPage(pageNumber)} />
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
