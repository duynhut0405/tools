import React, { useEffect, useState } from 'react';
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
  districtValue: PropTypes.any,
  onLoad1: PropTypes.func
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
  onLoad1,
  query,
  districtValue
}) {

  const [queryCustom, setQueryCustom] = useState('');

  return (
    <div className="ajax-content-map-custom">
      <h5 class="uppercase">{t('net_work')}</h5>
      <div className="form-search-focus mb-20">
          <input
            type="text"
            // value={query}
            placeholder={t('place')}
            onChange={event => setQueryCustom(event.target.value)}
          />
          <button type="submit" onClick={event => onLoad1(queryCustom)}>
            <i className="icon-search-2"></i>
          </button>
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
      <div className="wrap-scroll">
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
    </div>
  );
}

BoxSearch.propTypes = propTypes;

export default BoxSearch;
