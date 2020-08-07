import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { getDistrictService, searchBranchesService } from '../../../../services/map';
import { debounce } from 'lodash';

const Tab1 = props => {
  /* eslint-disable no-debugger, no-console */
  const { branchs, setBranchs, provinces, formState, setFormState } = props;
  const [district, setDistrict] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState(0);
  const [selectProvince, setSelectProvince] = useState(0);
  const [selectDistrict, setSelectDistrict] = useState(0);
  const [searchKey, setSearchKey] = useState('');
  const dataProvince = [];
  useEffect(() => {
    for (const province of provinces) {
      dataProvince.push({
        value: province.id,
        label: province.name
      });
    }
  }, [dataProvince]);

  useEffect(() => {
    const query = {
      districtCity: selectDistrict.value || null,
      networkCategory: 'transaction',
      provinceCity: selectProvince.value || null,
      search: searchKey
    };
    searchBranchesService(query).then(res => {
      setBranchs(res.data);
    });
  }, [selectProvince, selectDistrict, searchKey]);

  const customStyles = {
    menu: () => ({
      zIndex: '999px'
    })
  };

  const handleSelectProvince = item => {
    setSelectProvince(item);
    getDistrictService(item.value)
      .then(res => {
        const arr = [];
        for (const dt of res.data) {
          arr.push({
            value: dt.id,
            label: dt.name
          });
        }
        setDistrict(arr);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSelectDistrict = item => {
    setSelectDistrict(item);
  };

  const handleSelect = item => {
    setSelectedBranch(item.id);
    setFormState(() => ({
      ...formState,
      address_name: item.address_name,
      address_branch: item.address
    }));
  };

  const handleChange = useCallback(
    debounce(e => {
      setSearchKey(e);
    }, 1000),
    []
  );

  return (
    <div className="block1" data-tabname="name1">
      <div className="col-12">
        <div className="row">
          {console.log(branchs)}
          <div className="col-12 col-sm-6">
            <div className="form-search-focus mb-20">
              <input
                type="text"
                placeholder="Địa điểm"
                onChange={event => handleChange(event.target.value)}
              />
              <button
                onClick={e => {
                  e.preventDefault();
                }}
              >
                <i className="icon-search-2"></i>
              </button>
            </div>
            <div className="mb-20">
              <h6 className="block1_title1">Tỉnh/ Thành phố</h6>
              <Select
                options={dataProvince}
                styles={customStyles}
                onChange={item => handleSelectProvince(item)}
                placeholder="Chọn TP"
                className="selectpicker"
              />
            </div>
            <div className="mb-20">
              <h6 className="block1_title1">Quận/Huyện</h6>
              <Select
                options={district}
                onChange={item => handleSelectDistrict(item)}
                placeholder="Chọn quận/ huyện"
                className="selectpicker"
              />
            </div>
            <div className="mb-20">
              <p className="gray1">
                Ghi chú: Trường hợp Chi nhánh Quý Khách lựa chọn bị quá tải. Vui lòng cho phép MB
                điều phối cho Chi nhánh gần nhất để đảm bảo thời gian xử lý hồ sơ nhanh nhất.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="block1_list1">
              {branchs.map((item, key) => (
                <div className="item" key={key}>
                  <div className="location" data-latlng="">
                    <label className="radio">
                      <strong>{item.address_name}</strong>
                      <input
                        type="radio"
                        name="search_location"
                        required
                        value={item.id}
                        onChange={() => handleSelect(item)}
                        checked={selectedBranch === item.id}
                      />
                      <span></span>
                    </label>
                    <div className="address">{item.address}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Tab1.propTypes = {
  branchs: PropTypes.array,
  formState: PropTypes.object,
  provinces: PropTypes.array,
  setBranchs: PropTypes.func,
  setFormState: PropTypes.func
};

export default Tab1;
