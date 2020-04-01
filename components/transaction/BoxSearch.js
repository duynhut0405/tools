import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import { MapActions } from '../../store/actions';
import { connect } from 'react-redux';

const propTypes = {
  listBranches: PropTypes.array,
  listProvince: PropTypes.array,
  listDistrict: PropTypes.array,
  searchBranches: PropTypes.func,
  getProvince: PropTypes.func,
  getDistrict: PropTypes.func
};

function BoxSearch({
  listBranches,
  listProvince,
  listDistrict,
  searchBranches,
  getProvince,
  getDistrict
}) {
  const [district, setDistrict] = useState('');
  const [branches_type, setBranchesType] = useState('Branch');
  const [province, setProvince] = useState('');
  const [query, setQuery] = useState('');

  // district, branches_type, province, query

  useEffect(() => {
    searchBranches({
      districtCity: district,
      networkCategory: branches_type,
      provinceCity: province,
      search: query
    });
    getProvince();
  }, [getProvince, searchBranches]);

  useEffect(() => {
    searchBranches({
      districtCity: district,
      networkCategory: branches_type,
      provinceCity: province,
      search: query
    });
  }, [district, branches_type, province, query]);

  const handleProvince = provinceItem => {
    setProvince(provinceItem.value);
    getDistrict(provinceItem.value);
  };

  return (
    <div className="ajax-content-map" style={{ position: 'unset', padding: '15px' }}>
      <ul className="menu row grid-space-0">
        <li
          className={branches_type === 'Branch' ? 'col-6 active' : 'col-6'}
          onClick={() => setBranchesType('Branch')}
        >
          <span className="item">Chi nhánh</span>
        </li>
        <li
          className={branches_type === 'ATM' ? 'col-6 active' : 'col-6'}
          onClick={() => setBranchesType('ATM')}
        >
          <span className="item">ATM</span>
        </li>
      </ul>

      <div className="form-search-focus mb-20">
        <input
          type="text"
          placeholder="Địa điểm"
          onChange={event => setQuery(event.target.value)}
        />
        <button>
          <i className="icon-search-2"></i>
        </button>
      </div>
      <div className="mb-20">
        <div>Tỉnh/ Thành phố</div>
        <Select
          className="fix-select"
          placeholder="Tỉnh/ Thành phố"
          options={listProvince}
          onChange={handleProvince}
        />
      </div>
      <div className="mb-20">
        <div>Quận/Huyện</div>
        <Select
          className="fix-select1"
          placeholder="Quận/Huyện"
          options={listDistrict}
          onChange={provinceItem => setDistrict(provinceItem.value)}
        />
      </div>
      <div className="map-list-store" style={{ position: 'unset' }}>
        {map(listBranches, (branches, index) => (
          <div
            className={
              (index + 1) % 2 === 0
                ? 'item color-2'
                : (index + 1) % 3 === 0
                ? 'item color-3'
                : 'item color-1'
            }
            key={index}
          >
            <div className="location">
              <h5 className="title">{branches.address_name}</h5>
              <div className="address">{branches.address}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    listBranches: state.mapReducer.listBranches,
    listProvince: state.mapReducer.listProvince,
    listDistrict: state.mapReducer.listDistrict
  };
};

const mapDispatchToProps = {
  searchBranches: MapActions.searchBranchesAction,
  getProvince: MapActions.getProvinceAction,
  getDistrict: MapActions.getDistrictAction
};

BoxSearch.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(BoxSearch);
