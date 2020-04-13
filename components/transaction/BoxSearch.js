import React from 'react';
import Select from 'react-select';
import { map } from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
  listBranches: PropTypes.array,
  listProvince: PropTypes.array,
  listDistrict: PropTypes.array,
  branches_type: PropTypes.string,
  setDistrict: PropTypes.func,
  setQuery: PropTypes.func,
  setBranchesType: PropTypes.func,
  handleProvince: PropTypes.func
};

function BoxSearch({
  listBranches,
  listProvince,
  listDistrict,
  branches_type,
  handleProvince,
  setBranchesType,
  setQuery,
  setDistrict
}) {
  return (
    <div className="ajax-content-map">
      <ul className="menu row grid-space-0">
        <li
          className={branches_type === 'branch' ? 'col-4 active' : 'col-4'}
          onClick={() => setBranchesType('branch')}
        >
          <span className="item">Chi nhánh</span>
        </li>
        <li
          className={branches_type === 'transaction_online' ? 'col-4 active' : 'col-4'}
          onClick={() => setBranchesType('transaction_online')}
        >
          <span className="item">ATM</span>
        </li>
        <li
          className={branches_type === 'transaction' ? 'col-4 active' : 'col-4'}
          onClick={() => setBranchesType('transaction')}
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
          options={map(listProvince, province => ({ value: province.id, label: province.name }))}
          onChange={handleProvince}
        />
      </div>
      <div className="mb-20">
        <div>Quận/Huyện</div>
        <Select
          className="fix-select1"
          placeholder="Quận/Huyện"
          options={map(listDistrict, district => ({ value: district.id, label: district.name }))}
          onChange={provinceItem => setDistrict(provinceItem.value)}
        />
      </div>
      <div className="map-list-store">
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

BoxSearch.propTypes = propTypes;

export default BoxSearch;
