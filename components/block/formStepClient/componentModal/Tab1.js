import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { getDistrictService, searchBranchesService } from '../../../../services/map';
import ReactHtmlParser from 'react-html-parser';
import { debounce, isNumber } from 'lodash';

const Tab1 = props => {
  /* eslint-disable no-debugger, no-console */
  const { branchs, setBranchs, provinces, formState, setFormState } = props;
  const [district, setDistrict] = useState([]);
  const [idCityDefauft, setidCityDefauft] = useState(
    formState.address && formState.address.city_address && formState.address.city_address.value.id
  );
  const [selectedBranch, setSelectedBranch] = useState(0);
  const [selectProvince, setSelectProvince] = useState(
    formState.address ? formState.address.city_address : 0
  );
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
      provinceCity: isNumber(selectProvince.value)
        ? selectProvince.value
        : selectProvince.value && selectProvince.value.id,
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

  useEffect(() => {
    if (formState.address) {
      getDistrictService(formState.address.city_address.value.id)
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
    }
  }, []);

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
    console.log(item);
    setidCityDefauft('');
    setFormState(() => ({
      ...formState,
      address_name: item.address_name,
      address_branch: item.address
    }));
  };

  const handleChange = useCallback(
    debounce(e => {
      setSearchKey(e);
    }, 500),
    []
  );

  return (
    <div className="block1" data-tabname="name1">
      <div className="col-12">
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="form-search-focus mb-20">
              <input
                type="text"
                placeholder="?????a ??i???m"
                onChange={event => {
                  setSelectProvince({});
                  handleChange(event.target.value);
                }}
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
              <h6 className="block1_title1">T???nh/ Th??nh ph???</h6>
              <Select
                options={dataProvince}
                styles={customStyles}
                value={selectProvince}
                onChange={item => {
                  setSearchKey('');
                  handleSelectProvince(item);
                }}
                placeholder="Ch???n TP"
                // defaultValue={formState.address ? formState.address.city_address : {}}
                className="selectpicker"
              />
            </div>
            <div className="mb-20">
              <h6 className="block1_title1">Qu???n/Huy???n</h6>
              <Select
                options={district}
                onChange={item => {
                  setSearchKey('');
                  handleSelectDistrict(item);
                }}
                placeholder="Ch???n qu???n/ huy???n"
                className="selectpicker"
              />
            </div>
            <div className="mb-20">
              <p className="gray1">
                Ghi ch??: Tr?????ng h???p Chi nh??nh Qu?? Kh??ch l???a ch???n b??? qu?? t???i. Vui l??ng cho ph??p MB
                ??i???u ph???i cho Chi nh??nh g???n nh???t ????? ?????m b???o th???i gian x??? l?? h??? s?? nhanh nh???t.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="block1_list1">
              {branchs.map((item, key) => (
                <div className="item" key={key}>
                  <div className="location" data-latlng="">
                    <label className="radio">
                      {/* {console.log(item)} */}
                      <strong>{item.address_name}</strong>
                      <input
                        type="radio"
                        name="search_location"
                        value={item.id}
                        onChange={() => handleSelect(item)}
                        checked={item.address_name === formState.address_name}
                        // defaultChecked={item.address_name === formState.address_name}
                      />
                      <span></span>
                    </label>
                    <div className="address">
                      {item.address}
                      <br />
                      {ReactHtmlParser(item.description)}
                    </div>
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
