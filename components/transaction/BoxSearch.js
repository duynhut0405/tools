import React from 'react';
import Select from 'react-select';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import t from '../../translation';

const propTypes = {
  listBranches: PropTypes.array,
  listProvince: PropTypes.array,
  listDistrict: PropTypes.array,
  branches_type: PropTypes.string,
  setDistrict: PropTypes.func,
  setQuery: PropTypes.func,
  setBranchesType: PropTypes.func,
  handleProvince: PropTypes.func,
  t: PropTypes.func,
  getDetail: PropTypes.func,
  onSearch: PropTypes.func,
  query: PropTypes.string,
  districtValue: PropTypes.any
};

function BoxSearch({
  listBranches,
  listProvince,
  listDistrict,
  branches_type,
  handleProvince,
  setBranchesType,
  setQuery,
  setDistrict,
  getDetail,
  onSearch,
  query,
  districtValue
}) {

  return (
    <div className="ajax-content-map">
      <h5 class="uppercase">{t('net_work')}</h5>
      {/* <ul className="menu row grid-space-0">
        <li
          className={branches_type === 'all' ? 'col-4 active' : 'col-4'}
          onClick={() => setBranchesType('all')}
        >
          <span className="item">{t('all')}</span>
        </li>
        <li
          className={branches_type === 'transaction' ? 'col-4 active' : 'col-4'}
          onClick={() => setBranchesType('transaction')}
        >
          <span className="item">{t('transaction')}</span>
        </li>
        <li
          className={branches_type === 'atm' ? 'col-4 active' : 'col-4'}
          onClick={() => setBranchesType('atm')}
        >
          <span className="item">{t('atm')}</span>
        </li>
      </ul> */}

      <div className="form-search-focus mb-20">
        <form onSubmit={onSearch}>
          <input
            type="text"
            value={query}
            placeholder={t('place')}
            onChange={event => setQuery(event.target.value)}
          />
          <button type="submit">
            <i className="icon-search-2"></i>
          </button>
        </form>
      </div>
      <div className="mb-20">
        {/* <div>{t('province')}</div> */}
        <Select
          className="fix-select"
          placeholder={t('province')}
          options={map(listProvince, province => ({
            value: province.id,
            label: province.name,
            latitude: province.latitude,
            longitude: province.longitude
          }))}
          onChange={handleProvince}
        />
      </div>
      {/* <div className="mb-20">
        <div>{t('district')}</div>
        <Select
          className="fix-select1"
          placeholder={t('district')}
          value={districtValue}
          options={map(listDistrict, district => ({
            value: district.id,
            label: district.name,
            latitude: district.latitude,
            longitude: district.longitude
          }))}
          onChange={provinceItem => setDistrict(provinceItem.value, provinceItem.label)}
        />
      </div> */}
      <div className="map-list-store">
        {map(listBranches, (branches, index) => (
          <div
            className={
              branches.network_category === 'atm'
                ? 'item'
                : branches.network_category === 'transaction' ||
                  branches.network_category === 'transaction_online'
                ? 'item'
                : 'item'
            }
            key={index}
          >
            <div className="location" onClick={() => getDetail(branches)}>
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
