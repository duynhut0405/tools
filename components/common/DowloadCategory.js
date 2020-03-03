import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { map } from 'lodash';
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
  const [checked, setChecked] = useState(true);
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
    <div className="accodion accodion-2 container sec-tb">
      <div className="">
        <div className="filter-category">
          <select className="select mr-2" onChange={event => setYear(event.target.value)}>
            <option value={2020}>2020</option>
            <option value={2021}>2021</option>
          </select>
          <select className="select" onChange={event => setDataType(event.target.value)}>
            {map(typeRegulation, item => {
              return (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="accodion-tab ">
        <input type="checkbox" id="chck_2" checked={checked} />
        <label className="accodion-title h2" onClick={() => setChecked(!checked)}>
          <span> {year} </span>
          <span className="triangle">
            <i className="icon-plus"></i>
          </span>
        </label>
        <div className="accodion-content">
          <div className="inner">
            <ul className="list-download">
              {map(listRegulation, item => {
                return (
                  <li key={item.id}>
                    <span className="title">
                      <i className="icon-date-2"></i>
                      {item.name}
                    </span>
                    <span className="data">{moment(item.createdAt).format('DD-MM-YYYY')}</span>
                    <span className="down">
                      <a href={item.urlFile}>
                        <i className="icon-arrow-6 ib"></i>
                      </a>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProp = state => {
  return {
    listRegulation: state.regulationReducer.data,
    typeRegulation: state.regulationReducer.type
  };
};

const mapDispatchToProps = {
  seachRegulation: RegulationActions.searchRegulationAction,
  getTypeRegulation: RegulationActions.getTypeRegulationAction
};

DowloadCategory.propTypes = propTypes;

export default connect(mapStateToProp, mapDispatchToProps)(DowloadCategory);
