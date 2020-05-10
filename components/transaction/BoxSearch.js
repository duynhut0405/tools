import React from 'react';
import Select from 'react-select';
import { map, debounce } from 'lodash';
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
  getDetail: PropTypes.func
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
  getDetail
}) {
  const onSearch = debounce(value => {
    setQuery(value);
  }, 3000);
  return (
    <div className="ajax-content-map">
      <ul className="menu row grid-space-0">
        <li
          className={branches_type === 'branch' ? 'col-4 active' : 'col-4'}
          onClick={() => setBranchesType('branch')}
        >
          <span className="item">{t('branch')}</span>
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
      </ul>

      <div className="form-search-focus mb-20">
        <input
          type="text"
          placeholder={t('place')}
          onChange={event => onSearch(event.target.value)}
        />
        <button>
          <i className="icon-search-2"></i>
        </button>
      </div>
      <div className="mb-20">
        <div>{t('province')}</div>
        <Select
          className="fix-select"
          placeholder={t('province')}
          options={map([{ id: '', name: 'Tất cả' }, ...listProvince], province => ({
            value: province.id,
            label: province.name
          }))}
          onChange={handleProvince}
        />
      </div>
      <div className="mb-20">
        <div>{t('district')}</div>
        <Select
          className="fix-select1"
          placeholder={t('district')}
          options={map([{ id: '', name: 'Tất cả' }, ...listDistrict], district => ({
            value: district.id,
            label: district.name
          }))}
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
