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
  id: ProppTypes.number
};

const searchBranches = async (query, setData) => {
  const res = await searchBranchesService(query);
  if (res && res !== undefined && res.status === 200) {
    setData(res.data);
  }
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

const getAddress = async (lat, long, setData) => {
  const res = await getAddressServices(lat, long);
  if (res && res.status === 200) {
    setData(res.data.results[0].address_components[3].short_name);
  }
};

function Transaction({ data, id }) {
  const [location, setLocation] = useState({ lat: 21.027763, lng: 105.83416 });
  const [locationId, setID] = useState(null);
  const [zoom, setZoom] = useState(8);
  const [district, setDistrict] = useState(null);
  const [branches_type, setBranchesType] = useState('all');
  const [province, setProvince] = useState(null);
  const [query, setQuery] = useState(null);
  const [listBranches, setListBranches] = useState([]);
  const [listProvince, setListProvince] = useState([]);
  const [listDistrict, setListDistrict] = useState([]);
  const [districtValue, setDistrictValue] = useState(null);

  const showPosition = position => {
    setLocation(() => ({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }));
    getAddress(position.coords.latitude, position.coords.longitude, setQuery);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
    getProvince(setListProvince);
  }, []);

  useEffect(() => {
    searchBranches(
      {
        districtCity: district,
        networkCategory: branches_type,
        provinceCity: province,
        search: query
      },
      setListBranches
    );
    setZoom(8);
  }, [district, branches_type, province, query]);

  const handleProvince = provinceItem => {
    setProvince(provinceItem.value);
    setDistrict('');
    setQuery(null);
    setDistrictValue(null);
    getDistrict(provinceItem.value, setListDistrict);
  };

  const getDetail = branches => {
    setLocation(() => ({
      lat: Number(branches.latitude),
      lng: Number(branches.longitude)
    }));
    setID(branches.id);
    setZoom(14);
  };

  const onChange = debounce(value => {
    setQuery(value);
  }, 2000);

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
    <div className={`wrap-list-map ${padding} transaction`} id={id}>
      <div className="row grid-space-0">
        <div className="col-md-4 ">
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
            setBranchesType={type => {
              setQuery(null);
              setBranchesType(type);
            }}
            setDistrict={city => {
              setQuery(null);
              setDistrict(city);
            }}
            getDetail={getDetail}
          />
        </div>
        <div className="col-md-8">
          <Map data={listBranches} location={location} zoom={zoom} id={locationId} />
        </div>
      </div>
    </div>
  );
}

Transaction.propTypes = propTypes;

export default Transaction;
