import React, { useState, useEffect } from 'react';
import { Fillter, DowloadFile } from './index';
import { Pagination } from '../index';
import moment from 'moment';
import { getRegulationPagation, getTypeRegulationServices } from '../../../services/regulation';
import Proptypes from 'prop-types';

const propTypes = {
  listRegulation: Proptypes.array,
  typeRegulation: Proptypes.array,
  seachRegulation: Proptypes.func,
  getTypeRegulation: Proptypes.func
};

function DowloadFileWapper() {
  const date = new Date();
  const [year, setYear] = useState(moment(date).format('YYYY'));
  const [datatype, setDataType] = useState(1);
  const [page, setPage] = useState(1);
  const [listRegulation, setListRegulation] = useState([]);
  const [typeRegulation, setTypeRegulation] = useState([]);

  const seachRegulation = async (_datatype, _year, _page) => {
    const res = await getRegulationPagation(_datatype, _year, _page);
    if (res && res.status === 200) {
      setListRegulation(res.data);
    }
  };

  const getTypeRegulation = async () => {
    const res = await getTypeRegulationServices();
    if (res && res.status === 200) {
      setTypeRegulation(res.data);
    }
  };

  useEffect(() => {
    seachRegulation(datatype, year, page);
    getTypeRegulation();
  }, [getTypeRegulation, seachRegulation]);

  useEffect(() => {
    seachRegulation(datatype, year, page);
  }, [year, datatype, page]);

  return (
    <div className="accodion accodion-2 sec">
      <div className="container">
        <Fillter
          center
          year={year}
          type={typeRegulation}
          setDate={event => setYear(event.target.value)}
          setType={event => setDataType(event.target.value)}
        />
        <DowloadFile data={listRegulation.investors} year={year} isChecked />
        {listRegulation.size > 1 && (
          <Pagination size={listRegulation.size} setPage={pageNumber => setPage(pageNumber)} />
        )}
      </div>
    </div>
  );
}

DowloadFileWapper.propTypes = propTypes;

export default DowloadFileWapper;
