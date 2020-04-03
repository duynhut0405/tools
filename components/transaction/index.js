import React, { useEffect, useState } from 'react';
import BoxSearch from './BoxSearch';
import Map from '../common/Map';
import ProppTypes from 'prop-types';
import { searchBranchesService, getProvinceService, getDistrictService } from '../../services/map';

const propTypes = {
  listBranches: ProppTypes.array
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

function Transaction() {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [district, setDistrict] = useState('');
  const [branches_type, setBranchesType] = useState('Branch');
  const [province, setProvince] = useState('');
  const [query, setQuery] = useState('');
  const [listBranches, setListBranches] = useState([]);
  const [listProvince, setListProvince] = useState([]);
  const [listDistrict, setListDistrict] = useState([]);

  const showPosition = position => {
    setLocation(() => ({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }));
  };

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
    getProvince(setListProvince);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }, [searchBranches, getProvince]);

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
  }, [district, branches_type, province, query]);

  const handleProvince = provinceItem => {
    setProvince(provinceItem.value);
    getDistrict(provinceItem.value, setListDistrict);
  };
  return (
    <div className="wrap-list-map">
      <div className="row grid-space-0">
        <div className="col-md-4 ">
          <BoxSearch
            listBranches={listBranches}
            listDistrict={listDistrict}
            listProvince={listProvince}
            branches_type={branches_type}
            handleProvince={handleProvince}
            setQuery={setQuery}
            setBranchesType={setBranchesType}
            setDistrict={setDistrict}
          />
        </div>
        <div className="col-md-8">
          <Map data={listBranches} location={location} />
        </div>
      </div>
    </div>
  );
}

Transaction.propTypes = propTypes;

export default Transaction;
