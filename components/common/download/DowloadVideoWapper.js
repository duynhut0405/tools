import React, { useState, useEffect } from 'react';
import { Fillter, DowloadVideo } from './index';
import { map } from 'lodash';
import { Pagination } from '../index';
import { getRegulationListYear, getTypeRegulationServices } from '../../../services/regulation';
import Proptypes from 'prop-types';

const propTypes = {
  listRegulation: Proptypes.array,
  typeRegulation: Proptypes.array,
  seachRegulation: Proptypes.func,
  getTypeRegulation: Proptypes.func,
  searByYear: Proptypes.func
};

function DowloadFileWapper() {
  const [datatype, setDataType] = useState(1);
  const [page, setPage] = useState(0);
  const [year, setYear] = useState(0);
  const [listRegulation, setListRegulation] = useState([]);
  const [typeRegulation, setTypeRegulation] = useState([]);

  const seachRegulation = async (_datatype, _page, _year) => {
    const res = await getRegulationListYear(_datatype, _page, _year);
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
    seachRegulation(datatype, page, year);
    getTypeRegulation();
  }, [getTypeRegulation, seachRegulation]);

  useEffect(() => {
    seachRegulation(datatype, page, year);
  }, [datatype, page, year]);

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
        {listRegulation.size > 1 && (
          <Pagination size={listRegulation.size} setPage={pageNumber => setPage(pageNumber)} />
        )}
      </div>
    </div>
  );
}

DowloadFileWapper.propTypes = propTypes;

export default DowloadFileWapper;
