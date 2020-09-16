import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

const propTypes = {
  index: PropTypes.number,
  item: PropTypes.object,
  isCheck: PropTypes.any,
  onCloseClick: PropTypes.func,
  onOpenCLick: PropTypes.func
};

function Markers({ index, item, isCheck, onOpenCLick, onCloseClick }) {
  // const [isCheck, setIsChecK] = useState(false);
  return (
    <Marker
      position={{ lat: Number(item.latitude), lng: Number(item.longitude) }}
      key={index}
      onClick={onOpenCLick}
      icon={'static/images/pin-2.png'}
    >
      {isCheck && (
        <InfoWindow onCloseClick={onCloseClick}>
          <div className="gm-style-iw-d">
            <div className="infoWindow">
              <div className="divtext">
                <h5 className="title">{item.address_name}</h5>
                <div className="address">
                  <i className="icon-map">{item.address}</i>
                </div>
                <div>{ReactHtmlParser(item.description)}</div>
              </div>
            </div>
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
}

Markers.propTypes = propTypes;

export default Markers;
