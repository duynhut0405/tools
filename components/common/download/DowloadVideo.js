import React, { useEffect, useState } from 'react';
import { map } from 'lodash';
import { getUrlVideoService } from '../../../services/regulation';
import moment from 'moment';
import PropTypes from 'prop-types';

const propTypes = {
  year: PropTypes.number,
  data: PropTypes.array
};

function DowloadVideo({ year, data }) {
  const [urlVideo, setURlVideo] = useState(null);
  useEffect(() => {
    getUrlVideoService(year).then(res => {
      if (res !== null && res.data !== undefined) {
        setURlVideo(res.data.urlVideo);
      }
    });
  }, [year]);
  return (
    <div className="boxwidget box-download-2">
      <h2 className="widget-title">{year}</h2>
      <div className="row grid-space-60">
        <div className="col-lg-6">
          <div
            className="single_video  tRes_16_9"
            data-id="2UrWPUAr68A"
            data-video="autoplay=1&amp;controls=1&amp;mute=0"
          >
            <iframe src={urlVideo}></iframe>
          </div>
        </div>
        <div className="col-lg-6">
          <ul className="list-download ">
            {map(data, item => {
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
  );
}

DowloadVideo.propTypes = propTypes;

export default DowloadVideo;
