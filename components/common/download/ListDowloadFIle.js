import React, { useEffect, useState } from 'react';
import { Fillter } from '../download';
import FileList from './FileList';
import File from './File';
import { Pagination } from '../../common';
import { RegulationActions } from '../../../store/actions';
import moment from 'moment';
import PropTypes from 'prop-types';
import { convertTitle } from '../../../utils/convertPadding';
import { connect } from 'react-redux';
import t from '../../../translation';

const propTypes = {
  type: PropTypes.number,
  optionWidth: PropTypes.string,
  search: PropTypes.bool,
  loading: PropTypes.bool,
  listType: PropTypes.array,
  noQuestion: PropTypes.bool,
  id: PropTypes.number,
  data: PropTypes.object,
  listRegulation: PropTypes.array,
  getTypeRegulation: PropTypes.func,
  seachRegulation: PropTypes.func
};

function ListDowloadFIle({
  type,
  data,
  optionWidth,
  listType,
  listRegulation,
  search,
  getTypeRegulation,
  seachRegulation,
  noQuestion,
  id
}) {
  const date = new Date();
  const [datatype, setDataType] = useState(0);
  const [page, setPage] = useState(0);
  const [year, setYear] = useState(moment(date).format('YYYY'));
  const title = convertTitle(parseInt(data.type));
  // console.log(data.type);
  useEffect(() => {
    getTypeRegulation(type);
    const width = window.innerWidth;
    if (width < 768) {
      seachRegulation(type, datatype, 5, page, year);
    } else {
      seachRegulation(type, datatype, 10, page, year);
    }
  }, [page, year, datatype, data]);

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
    <div className={`${padding} accodion accodion-2 downloadfile`} id={id}>
      <div className="container">
        {data && (
          <div
            className={
              data.url && data.url !== ''
                ? 'entry-head text-center title-padding'
                : 'entry-head text-center'
            }
          >
            <h2 className="ht efch-1 ef-img-l">{title}</h2>
            <a className="viewall" href={data === undefined || data.url === '' ? '#' : data.url}>
              {t('view')} <i className="icon-arrow-1"></i>
            </a>
          </div>
        )}
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
          <Pagination size={listRegulation.size} setPage={pageNumber => setPage(pageNumber)} />
        )}
      </div>
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
