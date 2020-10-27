import React, { useEffect, useState } from 'react';
import BoxSearch from './BoxSearch';
import BoxSearchMobile from './BoxSearchMobile';
import Map from '../common/Map';
import debounce from 'lodash/debounce';
import ProppTypes from 'prop-types';
import { getAddressServices } from '../../services/google.api';
import { searchBranchesService, getProvinceService, getDistrictService } from '../../services/map';
import LazyLoad from 'react-lazyload';


function array_move(arr, old_index, new_index) {
  if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
          arr.push(undefined);
      }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing
};

const propTypes = {
  listBranches: ProppTypes.array,
  data: ProppTypes.object,
  id: ProppTypes.number,
};

const searchBranches = async (query, setData) => {
  const res = await searchBranchesService(query);

  setData(res.data);
  // if (res && res !== undefined && res.status === 200) {
  //   setData(res.data);
  // }
};

const getProvince = async setData => {
  const res = await getProvinceService();
  if (res && res !== undefined && res.status === 200) {
    let result = res.data;
    result = array_move(res.data, 53, 0);
    result = array_move(res.data, 54, 1);
    // console.log(result);
    setData(result);
  }
};

const getDistrict = async (id, setData) => {
  const res = await getDistrictService(id);
  if (res && res !== undefined && res.status === 200) {
    setData(res.data);
  }
};

const getAddress = async (lat, long, setData, setListBranches) => {
  const res = await getAddressServices(lat, long);
  if (res && res.status === 200) {
    setData(res.data.results[0].address_components[3].short_name);
    searchBranches(
      {
        districtCity: null,
        networkCategory: 'all',
        provinceCity: null,
        search: res.data.results[0].address_components[3].short_name
      },
      setListBranches
    );
  }
};

let firstLoad = true;

function Transaction({ data, id }) {
  const [location, setLocation] = useState({ lat: 21.027763, lng: 105.83416 });
  const [locationId, setID] = useState(null);
  const [zoom, setZoom] = useState(14);
  const [district, setDistrict] = useState(null);
  const [branches_type, setBranchesType] = useState('all');
  const [province, setProvince] = useState(null);
  const [query, setQuery] = useState('');
  const [listBranches, setListBranches] = useState([]);
  const [listProvince, setListProvince] = useState([]);
  const [listDistrict, setListDistrict] = useState([]);
  const [districtValue, setDistrictValue] = useState(null);

  const searchBranches1 = async (query, setData) => {
    const res = await searchBranchesService(query);
    if (res.data.length !== 0) {
      setListBranches(res.data);
      let data1 = {lat: Number(res.data[0].latitude), lng: Number(res.data[0].longitude)};
      setLocation(data1)
      setProvince(null)
    } else {
      setListBranches([]);
    }
  };

  const searchBranches2 = async (query, setData) => {
    const res = await searchBranchesService(query);
    if (res.data.length !== 0) {
      setListBranches(res.data);
      let data1 = {lat: Number(res.data[0].latitude), lng: Number(res.data[0].longitude)};
      setLocation(data1)
      // setProvince(null)
    } else {
      setListBranches([]);
    }
  };

  const showPosition = position => {
    setLocation(() => ({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }));
    getAddress(position.coords.latitude, position.coords.longitude, setQuery, setListBranches);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
    getProvince(setListProvince);
    onLoad();
  }, []);

  const handleProvince = provinceItem => {
    if (provinceItem.latitude !== null && provinceItem.longitude !== null) {
      setLocation(() => ({
        lat: Number(provinceItem.latitude),
        lng: Number(provinceItem.longitude)
      }));
    }
    
    setProvince(provinceItem.value);
    setDistrict(null);
    // setQuery('');
    setDistrictValue(null);
    searchBranches2(
      {
        districtCity: district,
        networkCategory: branches_type,
        provinceCity: provinceItem.value,
        search: query
      },
      setListBranches
    );
    if (listBranches.length !== 0) {
      let data1 = {lat: Number(listBranches[0].latitude), lng: Number(listBranches[0].longitude)};
      setLocation(data1)
    }
    setZoom(10);
    // getDetail(listBranches);
    // console.log("listBranches");
    // console.log(listBranches);
    // setLocation(() => ({
    //   lat: Number(listBranches[0].latitude),
    //   lng: Number(listBranches[0].longitude)
    // }));
    getDistrict(provinceItem.value, setListDistrict);
  };

  const handleDistrict = (city, name) => {
    setDistrictValue({ value: city, label: name });
    setDistrict(city);
    searchBranches(
      {
        districtCity: city,
        networkCategory: branches_type,
        provinceCity: province,
        search: query
      },
      setListBranches
    );
    setZoom(14);
  };

  const handleBranchesType = type => {
    setListBranches([])
    setBranchesType(type);
    searchBranches(
      {
        districtCity: district,
        networkCategory: type,
        provinceCity: province,
        search: query
      },
      setListBranches
    );
    setZoom(14);
    // setBranchesType(type);
  };

  const getDetail = branches => {
    setLocation(() => ({
      lat: Number(branches.latitude),
      lng: Number(branches.longitude)
    }));
    setID(branches.id);
    setZoom(14);
  };

  // const onChange = debounce(value => {
  //   setQuery(value);
  // }, 500);

  const onChange = value => {
    setQuery(value);
  };

  const onSearch = event => {
    event.preventDefault();
    searchBranches(
      {
        districtCity: district,
        networkCategory: branches_type,
        provinceCity: province,
        search: query
      },
      setListBranches
    );
  };

  const onLoad1 = (value) => {
    searchBranches1(
      {
        districtCity: null,
        networkCategory: 'all',
        provinceCity: null,
        search: value
      },
      setListBranches
    );
    firstLoad = false;
  };
  
  const onLoad = () => {
    searchBranches(
      {
        districtCity: null,
        networkCategory: 'all',
        provinceCity: null,
        search: 'Hà Nội'
      },
      setListBranches
    );
    firstLoad = false;
  };

  let padding = '';
  if (data.optionWidth === '2') {
    padding = 'sec-tb';
  } else if (data.optionWidth === '3') {
    padding = 'sec-t';
  } else if (data.optionWidth === '4') {
    padding = 'sec-b';
  } else {
    padding = 'sec-';
  }


  return (
    <LazyLoad>
    <session className="sec-tb sec-locations">
      <div className="container">
        <div className={`wrap-list-map ${padding} transaction`} id={id} style={{marginBottom:"70px", minHeight: "500px"}}>
          <div className="row grid-space-0" style={{height:"inherit"}}>
            <div className="col-md-5 show-768">
              <BoxSearch
                listBranches={listBranches}
                listDistrict={listDistrict}
                listProvince={listProvince}
                branches_type={branches_type}
                handleProvince={handleProvince}
                setQuery={setQuery}
                query={query}
                onLoad1={onLoad1}
                onSearch={onSearch}
                districtValue={districtValue}
                setBranchesType={handleBranchesType}
                setBranchesType2={handleBranchesType}
                setDistrict={handleDistrict}
                getDetail={getDetail}
              />
            </div>
            <div className="col-md-5 show-767">
              <BoxSearchMobile
                listBranches={listBranches}
                listDistrict={listDistrict}
                listProvince={listProvince}
                branches_type={branches_type}
                handleProvince={handleProvince}
                setQuery={setQuery}
                query={query}
                onLoad1={onLoad1}
                onSearch={onSearch}
                districtValue={districtValue}
                setBranchesType={handleBranchesType}
                setDistrict={handleDistrict}
                getDetail={getDetail}
              />
            </div>
            <div className="col-md-7 lazyload">
              <Map data={listBranches} location={location} zoom={zoom} id={locationId} />
            </div>
          </div>
        </div>
      </div>
    </session>
    </LazyLoad>
  );
}

Transaction.propTypes = propTypes;

export default Transaction;
