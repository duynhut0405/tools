import React, { useState, useEffect } from 'react';
import map from 'lodash/map';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import Marker from './Marker';
import PropTypes from 'prop-types';
import axios from 'axios';
import { link } from 'fs';
import { NonceProvider } from 'react-select';

const propTypes = {
  data: PropTypes.array,
  location: PropTypes.object,
  text: PropTypes.string,
  zoom: PropTypes.number,
  id: PropTypes.number,
  GoogleAPI: PropTypes.string
};
const mapOptionsCreator = {
  scrollwheel: true,
  // zoomControlOptions: {
  //     position: map.ControlPosition.RIGHT_CENTER,    // as long as this is not set it works
  //     style: map.ZoomControlStyle.SMALL
  // },
  // mapTypeControlOptions: {
  //     position: map.ControlPosition.BOTTOM_RIGHT     // this makes the map type control disappear
  // },
  mapTypeControl: false,
  zoomControl: false,
  draggable: true,
  rotateControl: true,
  scaleControl: true,
  streetViewControl: false,
  panControl: false,
};


function Map({ data, location, zoom, id }) {
                                             const [isCheck, setIsCheck] = useState(null);
                                             // const [GoogleAPI, setGoogleAPI] = useState('https://maps.googleapis.com/maps/api/js?key=?');

                                             // async function getGoogleAPI(){
                                             //   // while(GoogleAPI == 'null'){
                                             //     const APIURL = 'https://ACB3.mangoads.com.vn:8443/vi/api/common/googleMapConfig';
                                             //     const AuthStr = 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlcyI6IlF14bqjbiB0cuG7iyBjYW8gbmjhuqV0LFJPTEVfQUNDRVBUIE5FV1MsUk9MRV9BQ0NFUFQgUEFHRVMsUk9MRV9BREQgQkxPQ0ssUk9MRV9BREQgRElTVFJJQ1RTLFJPTEVfQUREIEZPUk0sUk9MRV9BREQgR1JPVVAsUk9MRV9BREQgSU5WRVNUT1JTLFJPTEVfQUREIE1FRElBLFJPTEVfQUREIFBST1ZJTkNFUyxST0xFX0FERCBST0xFLFJPTEVfQUREIFRBRyxST0xFX0FERCBVU0VSLFJPTEVfQ0jhu4hOSCBT4busQSBEQU5IIE3hu6RDLFJPTEVfQ0jhu4hOSCBT4busQSBNQUlMVEVNUExBVEUsUk9MRV9DSOG7iE5IIFPhu6xBIE1FTlUsUk9MRV9DSOG7iE5IIFPhu6xBIE1FTlVJVEVNLFJPTEVfQ0jhu4hOSCBT4busQSBQQUdFLFJPTEVfQ0jhu4hOSCBT4busQSBTTElERVIsUk9MRV9DSOG7iE5IIFPhu6xBIFRJTiBU4buoQyxST0xFX0NI4buITkggU-G7rEEgVuG7iiBUUsONIERBTkggTeG7pEMsUk9MRV9DSOG7iE5IIFPhu6xBIFbhu4ogVFLDjSBNRU5VSVRFTSxST0xFX0NI4buITkggU-G7rEEgVuG7iiBUUsONIFBBR0UsUk9MRV9DUkVBVEUgQ0FURUdPUlksUk9MRV9DUkVBVEUgRVhDSEFOR0VfUkFURSxST0xFX0NSRUFURSBJTlRFUkVTVF9SQVRFLFJPTEVfQ1JFQVRFIE1BSUxURU1QTEFURSxST0xFX0NSRUFURSBNRU5VLFJPTEVfQ1JFQVRFIE1FTlVJVEVNLFJPTEVfQ1JFQVRFIE5FVFdPUktTLFJPTEVfQ1JFQVRFIE5FV1MsUk9MRV9DUkVBVEUgUEFHRSxST0xFX0NSRUFURSBTTElERVIsUk9MRV9ERUxFVEUgQkxPQ0ssUk9MRV9ERUxFVEUgQ0FURUdPUlksUk9MRV9ERUxFVEUgRElTVFJJQ1RTLFJPTEVfREVMRVRFIEVYQ0hBTkdFX1JBVEUsUk9MRV9ERUxFVEUgRk9STSxST0xFX0RFTEVURSBHUk9VUCxST0xFX0RFTEVURSBJTlRFUkVTVF9SQVRFLFJPTEVfREVMRVRFIElOVkVTVE9SUyxST0xFX0RFTEVURSBNQUlMVEVNUExBVEUsUk9MRV9ERUxFVEUgTUVESUEsUk9MRV9ERUxFVEUgTUVOVSxST0xFX0RFTEVURSBNRU5VSVRFTSxST0xFX0RFTEVURSBORVRXT1JLUyxST0xFX0RFTEVURSBORVdTLFJPTEVfREVMRVRFIFBBR0UsUk9MRV9ERUxFVEUgUFJPVklOQ0VTLFJPTEVfREVMRVRFIFJPTEUsUk9MRV9ERUxFVEUgU0xJREVSLFJPTEVfREVMRVRFIFRBRyxST0xFX0RFTEVURSBVU0VSLFJPTEVfRFVZ4buGVCBUSU4gVOG7qEMsUk9MRV9EVVnhu4ZUIFRSQU5HLFJPTEVfRURJVCBCTE9DSyxST0xFX0VESVQgQ0FURUdPUlksUk9MRV9FRElUIEVYQ0hBTkdFX1JBVEUsUk9MRV9FRElUIEZFRURCQUNLLFJPTEVfRURJVCBGT1JNLFJPTEVfRURJVCBHUk9VUCxST0xFX0VESVQgSU5URVJFU1RfUkFURSxST0xFX0VESVQgSU5WRVNUT1JTLFJPTEVfRURJVCBNQUlMVEVNUExBVEUsUk9MRV9FRElUIE1FRElBLFJPTEVfRURJVCBNRU5VLFJPTEVfRURJVCBNRU5VSVRFTSxST0xFX0VESVQgTkVUV09SS1MsUk9MRV9FRElUIE5FV1MsUk9MRV9FRElUIFBBR0UsUk9MRV9FRElUIFBST1ZJTkNFUyxST0xFX0VESVQgUk9MRSxST0xFX0VESVQgU0VUVElORyxST0xFX0VESVQgU0xJREVSLFJPTEVfRURJVCBTVE9SRSxST0xFX0VESVQgVEFHLFJPTEVfRURJVCBVU0VSLFJPTEVfR0VUIEJMT0NLLFJPTEVfR0VUIENBVEVHT1JZLFJPTEVfR0VUIERJU1RSSUNUUyxST0xFX0dFVCBFWENIQU5HRV9SQVRFLFJPTEVfR0VUIEZFRURCQUNLLFJPTEVfR0VUIEZPUk0sUk9MRV9HRVQgR1JPVVAsUk9MRV9HRVQgSU5URVJFU1RfUkFURSxST0xFX0dFVCBJTlZFU1RPUlMsUk9MRV9HRVQgTUFJTFRFTVBMQVRFLFJPTEVfR0VUIE1FRElBLFJPTEVfR0VUIE1FTlUsUk9MRV9HRVQgTUVOVUlURU0sUk9MRV9HRVQgTkVUV09SS1MsUk9MRV9HRVQgTkVXUyxST0xFX0dFVCBQQUdFLFJPTEVfR0VUIFBST1ZJTkNFUyxST0xFX0dFVCBST0xFLFJPTEVfR0VUIFNFVFRJTkcsUk9MRV9HRVQgU0xJREVSLFJPTEVfR0VUIFNUT1JFLFJPTEVfR0VUIFRBRyxST0xFX0dFVCBVU0VSLFJPTEVfU-G7rEEgQkxPQ0ssUk9MRV9T4busQSBDw4BJIMSQ4bq2VCxST0xFX1Phu6xBIEZPUk0sUk9MRV9T4busQSBJTlZFU1RPUlMsUk9MRV9T4busQSBMw4NJIFNV4bqkVCxST0xFX1Phu6xBIE1FRElBLFJPTEVfU-G7rEEgTeG6oE5HIEzGr-G7mkksUk9MRV9T4busQSBOSMOCTiBWScOKTixST0xFX1Phu6xBIE5Iw5NNLFJPTEVfU-G7rEEgUFJPVklOQ0VTLFJPTEVfU-G7rEEgUVXhuqxOX0hVWeG7hk4sUk9MRV9T4busQSBTVE9SRSxST0xFX1Phu6xBIFRBRyxST0xFX1Phu6xBIFRIxq8gUEjhuqJOIEjhu5JJLFJPTEVfU-G7rEEgVOG7iCBHScOBLFJPTEVfU-G7rEEgVkFJIFRSw5IsUk9MRV9USMOKTSBCTE9DSyxST0xFX1RIw4pNIEZPUk0sUk9MRV9USMOKTSBNRURJQSxST0xFX1RIw4pNIE5Iw4JOIFZJw4pOLFJPTEVfVEjDik0gTkjDk00sUk9MRV9USMOKTSBQUk9WSU5DRVMsUk9MRV9USMOKTSBUQUcsUk9MRV9USMOKTSBWQUkgVFLDkixST0xFX1ThuqBPIERBTkggTeG7pEMsUk9MRV9U4bqgTyBJTlZFU1RPUlMsUk9MRV9U4bqgTyBMw4NJIFNV4bqkVCxST0xFX1ThuqBPIE1BSUxURU1QTEFURSxST0xFX1ThuqBPIE1FTlUsUk9MRV9U4bqgTyBNRU5VSVRFTSxST0xFX1ThuqBPIE3huqBORyBMxq_hu5pJLFJPTEVfVOG6oE8gUEFHRSxST0xFX1ThuqBPIFNMSURFUixST0xFX1ThuqBPIFRJTiBU4buoQyxST0xFX1ThuqBPIFThu4ggR0nDgSxST0xFX1VQREFURSBQT1NJVElPTiBDQVRFR09SWSxST0xFX1VQREFURSBQT1NJVElPTiBNRU5VSVRFTSxST0xFX1VQREFURSBQT1NJVElPTiBQQUdFLFJPTEVfWEVNIEJMT0NLLFJPTEVfWEVNIEPDgEkgxJDhurZULFJPTEVfWEVNIERBTkggTeG7pEMsUk9MRV9YRU0gRk9STSxST0xFX1hFTSBJTlZFU1RPUlMsUk9MRV9YRU0gTMODSSBTVeG6pFQsUk9MRV9YRU0gTUFJTFRFTVBMQVRFLFJPTEVfWEVNIE1FRElBLFJPTEVfWEVNIE1FTlUsUk9MRV9YRU0gTUVOVUlURU0sUk9MRV9YRU0gTeG6oE5HIEzGr-G7mkksUk9MRV9YRU0gTkjDgk4gVknDik4sUk9MRV9YRU0gTkjDk00sUk9MRV9YRU0gUEFHRSxST0xFX1hFTSBQUk9WSU5DRVMsUk9MRV9YRU0gUVXhuqxOX0hVWeG7hk4sUk9MRV9YRU0gU0xJREVSLFJPTEVfWEVNIFNUT1JFLFJPTEVfWEVNIFRBRyxST0xFX1hFTSBUSMavIFBI4bqiTiBI4buSSSxST0xFX1hFTSBUSU4gVOG7qEMsUk9MRV9YRU0gVOG7iCBHScOBLFJPTEVfWEVNIFZBSSBUUsOSLFJPTEVfWMOTQSBCTE9DSyxST0xFX1jDk0EgREFOSCBN4bukQyxST0xFX1jDk0EgRk9STSxST0xFX1jDk0EgSU5WRVNUT1JTLFJPTEVfWMOTQSBMw4NJIFNV4bqkVCxST0xFX1jDk0EgTUFJTFRFTVBMQVRFLFJPTEVfWMOTQSBNRURJQSxST0xFX1jDk0EgTUVOVSxST0xFX1jDk0EgTUVOVUlURU0sUk9MRV9Yw5NBIE3huqBORyBMxq_hu5pJLFJPTEVfWMOTQSBOSMOCTiBWScOKTixST0xFX1jDk0EgTkjDk00sUk9MRV9Yw5NBIFBBR0UsUk9MRV9Yw5NBIFBST1ZJTkNFUyxST0xFX1jDk0EgUVXhuqxOX0hVWeG7hk4sUk9MRV9Yw5NBIFNMSURFUixST0xFX1jDk0EgVEFHLFJPTEVfWMOTQSBUSU4gVOG7qEMsUk9MRV9Yw5NBIFThu4ggR0nDgSxST0xFX1jDk0EgVkFJIFRSw5IscXXhuqNuIHRy4buLIiwiaWF0IjoxNjAzNzYzMjEwLCJleHAiOjE2MDM4NDk2MTB9.vXVG0f21e4SCFRFR8wsZqkGWGgg0TWSFQOJn8OsM4WA';
                                             //     try{
                                             //       const data = await axios.get(APIURL, { 'headers': { 'authorization': AuthStr } });
                                             //       const link = 'https://maps.googleapis.com/maps/api/js?key=' + data.data.googleMapConfig.api;
                                             //       // console.log(link);
                                             //       setGoogleAPI(link);
                                             //       return link;
                                             //     } catch (error) {
                                             //       // console.log(error.response); // this is the main part. Use the response property from the error object
                                             //       return null;
                                             //     }
                                             //     // }
                                             //   // console.log(link);
                                             // };

                                             useEffect(() => {
                                               setIsCheck(id);
                                             }, [id]);

                                             // useEffect(() => {
                                             //   getGoogleAPI();
                                             // });

                                             const MyMapComponent = compose(
                                               withProps({
                                                 googleMapURL:
                                                   'https://maps.googleapis.com/maps/api/js?key=AIzaSyB6tAEdYaa2z4sVRRJ2UXqM9KqXQ7wKfRE',
                                                 loadingElement: <div style={{ height: `100%` }} />,
                                                 containerElement: (
                                                   <div style={{ height: `500px` }} />
                                                 ),
                                                 mapElement: <div style={{ height: `100%` }} />
                                               }),
                                               withScriptjs,
                                               withGoogleMap
                                             )(() => (
                                               <GoogleMap
                                                 defaultZoom={zoom}
                                                 defaultCenter={location}
                                                 options={mapOptionsCreator}
                                                 mapTypeControl="true"
                                                 className="lazyload"
                                               >
                                                 {map(data, (item, index) => {
                                                   return (
                                                     <Marker
                                                       item={item}
                                                       index={index}
                                                       key={index}
                                                       isCheck={isCheck === item.id}
                                                       onOpenCLick={() => setIsCheck(item.id)}
                                                       onCloseClick={() => setIsCheck(null)}
                                                     />
                                                   );
                                                 })}
                                               </GoogleMap>
                                             ));
                                             return (
                                               <div style={{ width: '100.5%' }}>
                                                 {MyMapComponent()}
                                               </div>
                                             );
                                           }

Map.propTypes = propTypes;

export default Map;
