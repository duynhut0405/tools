import React, { useEffect, useState } from 'react';
import BoxSearch from './BoxSearch';
import Map from '../common/Map';
import debounce from 'lodash/debounce';
import ProppTypes from 'prop-types';
import { getAddressServices } from '../../services/google.api';
import { searchBranchesService, getProvinceService, getDistrictService } from '../../services/map';

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
    setData(res.data);
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
    searchBranches(
      {
        // districtCity: district,
        networkCategory: branches_type,
        provinceCity: provinceItem.value,
        search: query
      },
      setListBranches
    );
    setZoom(8);
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
    searchBranches(
      {
        districtCity: district,
        networkCategory: type,
        provinceCity: province,
        search: query
      },
      setListBranches
    );
    setZoom(10);
    setBranchesType(type);
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
    <session className="sec-tb sec-locations">
      <div className="container">
        <div className={`wrap-list-map ${padding} transaction`} id={id} style={{marginBottom:"70px"}}>
          <div className="row grid-space-0" style={{height:"inherit"}}>
            <div className="col-md-5">
              <BoxSearch
                listBranches={listBranches}
                listDistrict={listDistrict}
                listProvince={listProvince}
                branches_type={branches_type}
                handleProvince={handleProvince}
                setQuery={onChange}
                query={query}
                onSearch={onSearch}
                districtValue={districtValue}
                setBranchesType={handleBranchesType}
                setDistrict={handleDistrict}
                getDetail={getDetail}
              />
            </div>
            <div className="col-md-7">
              <Map data={listBranches} location={location} zoom={zoom} id={locationId} />
            </div>
          </div>
        </div>
      </div>
    </session>
  );
}

Transaction.propTypes = propTypes;

export default Transaction;
