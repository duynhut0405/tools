import React, { useEffect, useState } from 'react';
import BoxSearch from './BoxSearch';
import Map from '../common/Map';
import ProppTypes from 'prop-types';
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

function Transaction({ data, id }) {
  const [location, setLocation] = useState({ lat: 21.32284, lng: 105.399727 });
  const [locationId, setID] = useState(null);
  const [zoom, setZoom] = useState(8);
  const [district, setDistrict] = useState('');
  const [branches_type, setBranchesType] = useState('all');
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
    getProvince(setListProvince);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
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
  }, [district, branches_type, province]);

  const handleProvince = provinceItem => {
    setProvince(provinceItem.value);
    setDistrict('');
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
            setQuery={setQuery}
            onSearch={onSearch}
            setBranchesType={setBranchesType}
            setDistrict={setDistrict}
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
