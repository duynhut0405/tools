import React, { useEffect, useState } from 'react';
import { map } from 'lodash';
import { getUrlVideoService } from '../../../services/regulation';
import moment from 'moment';
import PropTypes from 'prop-types';

const propTypes = {
  year: PropTypes.string,
  data: PropTypes.array,
  fileIcon: PropTypes.bool,
  showYear: PropTypes.bool
};

function DowloadVideo({ year, data, fileIcon, showYear }) {
  const [urlVideo, setURlVideo] = useState(null);
  const [urlImage, setUrlImage] = useState(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    getUrlVideoService(year).then(res => {
      //
      if (res !== null && res !== undefined && res.status === 200) {
        setURlVideo(res.data.urlVideo);
        setUrlImage(res.data.imageVideo);
      }
    });
  }, [year]);
  return (
    <div className="boxwidget box-download-2">
      <h2 className="widget-title">{year}</h2>
      <div className="row grid-space-60">
        <div className="col-lg-6">
          {!active && (
            <div
              className={urlVideo !== null ? 'single_video  tRes_16_9 max750' : ''}
              data-id="2UrWPUAr68A"
              data-video="autoplay=1&amp;controls=1&amp;mute=0"
            >
              <img
                className="lazyload"
                data-lazy-data-src={`${process.env.DOMAIN}${urlImage}`}
                data-src={`${process.env.DOMAIN}${urlImage}`}
                src={`${process.env.DOMAIN}${urlImage}`}
                alt="images"
              />
              {urlVideo !== null && (
                <span
                  className="btnvideo"
                  onClick={() => {
                    setActive(!active);
                  }}
                >
                  {urlVideo !== null || urlVideo !== '' ? <i className="icon-play"></i> : ''}
                </span>
              )}
            </div>
          )}
          {active && (
            <div
              className="single_video  tRes_16_9 max750"
              data-id="2UrWPUAr68A"
              data-video="autoplay=1&amp;controls=1&amp;mute=0"
            >
              <iframe
                frameBorder="0"
                allowFullScreen="1"
                allow="autoplay; encrypted-media;"
                src={`${urlVideo}?rel=0&autoplay=1`}
              ></iframe>
            </div>
          )}
        </div>
        <div className="col-lg-6">
          <ul className="list-download ">
            {map(data, item => {
              return (
                <li key={item.id}>
                  <span className="title">
                    <i className={fileIcon ? 'icon-t14' : 'icon-date-2'}></i>
                    {item.name}
                  </span>
                  {showYear && (
                    <span className="data">{moment(item.createdAt).format('DD-MM-YYYY')}</span>
                  )}
                  <span className="down">
                    <a
                      href={`${process.env.DOMAIN.substring(
                        0,
                        process.env.DOMAIN.length - 1
                      )}/uploads${item.urlFile}`}
                      download
                    >
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

// <div
//             className="single_video  tRes_16_9"
//             data-id="2UrWPUAr68A"
//             data-video="autoplay=1&amp;controls=1&amp;mute=0"
//           >
//             <iframe src={urlVideo}></iframe>
//           </div>
