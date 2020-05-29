import React, { useState, useEffect } from 'react';
import { Fillter, DowloadFile, DowloadVideo } from './download';
import moment from 'moment';
import { fillRegulationServices, getTypeRegulationServices } from '../../services/regulation';
import Proptypes from 'prop-types';

const propTypes = {
  listRegulation: Proptypes.array,
  typeRegulation: Proptypes.array,
  seachRegulation: Proptypes.func,
  getTypeRegulation: Proptypes.func,
  optionWidth: Proptypes.string,
  id: Proptypes.number
};

function DowloadCategory({ optionWidth, id }) {
  const date = new Date();
  const [year, setYear] = useState(moment(date).format('YYYY'));
  const [datatype, setDataType] = useState(1);
  const [listRegulation, setListRegulation] = useState([]);
  const [typeRegulation, setTypeRegulation] = useState([]);

  const seachRegulation = async data => {
    const res = await fillRegulationServices(data);
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
      <div className={`accodion accodion-2 ${padding} downloadcategory`} id={id}>
        <div className="container">
          <Fillter
            type={typeRegulation}
            setDate={event => setYear(event.target.value)}
            setType={event => setDataType(event.target.value)}
          />
          <DowloadFile data={listRegulation} year={year} isChecked />
          <DowloadVideo data={listRegulation} year={year} />
        </div>
      </div>
    </React.Fragment>
  );
}

DowloadCategory.propTypes = propTypes;

export default DowloadCategory;
