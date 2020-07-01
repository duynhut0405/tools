import React, { useEffect, useState } from 'react';
import { DowloadVideo, Fillter } from '../download';
import { Pagination } from '../../common';
import PropTypes from 'prop-types';
import { convertTitle } from '../../../utils/convertPadding';
import t from '../../../translation';
import { getRegulationListYear, getTypeRegulationByIDServices } from '../../../services/regulation';

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

const seachRegulation = async (type, detailTypeId, number, page, year, setData) => {
  const res = await getRegulationListYear(type, detailTypeId, number, page, year);
  if (res !== undefined && res.status === 200) {
    setData(res.data);
  }
};
function ListDowloadFIle({ type, data, optionWidth, id }) {
  const [datatype, setDataType] = useState(0);
  const [page, setPage] = useState(0);
  const [year, setYear] = useState(new Date().getFullYear());
  const [title] = useState(convertTitle(type));
  const [listRegulation, setlistRegulation] = useState([]);
  const [listType, setListType] = useState([]);

  const getTypeRegulation = async _type => {
    const res = await getTypeRegulationByIDServices(_type);
    if (res && res.status === 200) {
      setListType(res.data);
    }
  };

  useEffect(() => {
    getTypeRegulation(type);
    const width = window.innerWidth;
    if (width < 768) {
      seachRegulation(type, 0, 5, 0, year, setlistRegulation);
    } else {
      seachRegulation(type, 0, 10, 0, year, setlistRegulation);
    }
  }, [id]);

  // useEffect(() => {
  //   const width = window.innerWidth;
  //   if (width < 768) {
  //     seachRegulation(type, datatype, 5, page, year, setlistRegulation);
  //   } else {
  //     seachRegulation(type, datatype, 10, page, year, setlistRegulation);
  //   }
  // }, [page, year, datatype]);

  const onChangeYear = _year => {
    setYear(_year);
    const width = window.innerWidth;
    if (width < 768) {
      seachRegulation(type, datatype, 5, page, _year, setlistRegulation);
    } else {
      seachRegulation(type, datatype, 10, page, _year, setlistRegulation);
    }
  };

  const onChangeType = _type => {
    setDataType(_type);
    const width = window.innerWidth;
    if (width < 768) {
      seachRegulation(type, _type, 5, page, year, setlistRegulation);
    } else {
      seachRegulation(type, _type, 10, page, year, setlistRegulation);
    }
  };

  const onChangePage = _page => {
    setPage(_page);
    const width = window.innerWidth;
    if (width < 768) {
      seachRegulation(type, datatype, 5, _page, year, setlistRegulation);
    } else {
      seachRegulation(type, datatype, 10, _page, year, setlistRegulation);
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
    <div className={`accodion accodion-2 ${padding} downloadvideo`} id={id}>
      <div className="container">
        {data && (
          <div
            className={
              data.url && data.url !== ''
                ? 'entry-head text-center title-padding'
                : 'entry-head text-center'
            }
          >
            {data && data.title && data.title !== '' && (
              <h2 className="ht efch-1 ef-img-l">{data.title}</h2>
            )}
            {data.url !== undefined && data.url !== '' && (
              <a className="viewall" href={data.url === '' ? '!#' : data.url}>
                {t('view')} <i className="icon-arrow-1"></i>
              </a>
            )}
          </div>
        )}

        <Fillter
          center
          year={year}
          type={listType}
          setDate={event => onChangeYear(event.target.value)}
          setType={event => onChangeType(event.target.value)}
        />

        <div className="sec-tb">
          {listRegulation.investors && listRegulation.investors.length > 0 && (
            <DowloadVideo data={listRegulation.investors} year={year} isChecked={true} fileIcon />
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
