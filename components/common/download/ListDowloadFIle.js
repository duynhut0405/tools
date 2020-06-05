import React, { useEffect, useState } from 'react';
import { Fillter } from '../download';
import FileList from './FileList';
import File from './File';
import { Pagination } from '../../common';
import moment from 'moment';
import PropTypes from 'prop-types';
import { getRegulationListYear, getTypeRegulationByIDServices } from '../../../services/regulation';
import { convertTitle } from '../../../utils/convertPadding';
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

function ListDowloadFIle({ type, data, optionWidth, search, noQuestion, id }) {
  const date = new Date();
  const [datatype, setDataType] = useState(0);
  const [page, setPage] = useState(0);
  const [year, setYear] = useState(moment(date).format('YYYY'));
  const title = convertTitle(data ? parseInt(data.type) : null);
  const [listRegulation, setListRegulation] = useState([]);
  const [listType, setListType] = useState([]);

  const getTypeRegulation = async _type => {
    const res = await getTypeRegulationByIDServices(_type);
    if (res && res.status === 200) {
      setListType(res.data);
    }
  };

  const seachRegulation = async (_type, _datatype, _number, _page, _year) => {
    const res = await getRegulationListYear(_type, _datatype, _number, _page, _year);
    if (res && res.status === 200) {
      setListRegulation(res.data);
    }
  };

  useEffect(() => {
    getTypeRegulation(type);
    const width = window.innerWidth;
    if (width < 768) {
      seachRegulation(type, datatype, 5, page, year);
    } else {
      seachRegulation(type, datatype, 10, page, year);
    }
  }, [id]);

  const onChangeYear = _year => {
    setYear(_year);
    const width = window.innerWidth;
    if (width < 768) {
      seachRegulation(type, datatype, 5, page, _year);
    } else {
      seachRegulation(type, datatype, 10, page, _year);
    }
  };

  const onChangeType = _type => {
    setDataType(_type);
    const width = window.innerWidth;
    if (width < 768) {
      seachRegulation(type, _type, 5, page, year);
    } else {
      seachRegulation(type, _type, 10, page, year);
    }
  };

  const onChangePage = _page => {
    setPage(_page);
    const width = window.innerWidth;
    if (width < 768) {
      seachRegulation(type, datatype, 5, _page, year);
    } else {
      seachRegulation(type, datatype, 10, _page, year);
    }
  };

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
            setDate={event => onChangeYear(event.target.value)}
            setType={event => onChangeType(event.target.value)}
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
          <Pagination size={listRegulation.size} setPage={pageNumber => onChangePage(pageNumber)} />
        )}
      </div>
    </div>
  );
}

ListDowloadFIle.propTypes = propTypes;

export default ListDowloadFIle;
