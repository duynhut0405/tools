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
  getTypeRegulation: Proptypes.func.isRequired,
  getUrlVideo: Proptypes.func.isRequired,
  urlVideo: Proptypes.object.isRequired
};

function DowloadCategory({
  listRegulation,
  typeRegulation,
  seachRegulation,
  getTypeRegulation,
  getUrlVideo,
  urlVideo
}) {
  const date = new Date();

  const [checked, setChecked] = useState(true);
  const [year, setYear] = useState(moment(date).format('YYYY'));
  const [datatype, setDataType] = useState(1);

  useEffect(() => {
    getUrlVideo(year);
    seachRegulation({ idSearch: datatype, year: year });
    getTypeRegulation();
  }, [getTypeRegulation, seachRegulation, getUrlVideo]);

  useEffect(() => {
    seachRegulation({ idSearch: datatype, year: year });
  }, [year, datatype]);

  useEffect(() => {
    getUrlVideo(year);
  }, [year]);

  return (
    <React.Fragment>
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
        <div className="boxwidget box-download-2">
          <h2 className="widget-title">2019</h2>
          <div className="row grid-space-60">
            <div className="col-lg-6">
              <div
                className="single_video  tRes_16_9"
                data-id="2UrWPUAr68A"
                data-video="autoplay=1&amp;controls=1&amp;mute=0"
              >
                <iframe src={urlVideo.urlVideo}></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="list-download ">
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
