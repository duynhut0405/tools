import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import BaseSelect from 'react-select';
import FixRequiredSelect from './FixRequiredSelect';

const propTypes = {
  setFormState: Proptypes.func,
  formState: Proptypes.object,
  item: Proptypes.object,
  removeItem: Proptypes.func
};

const ChildboxForm2 = ({ formState, setFormState, item, removeItem }) => {
  const [decription, setDecription] = useState(item.decription);
  const [estimate, setEstimate] = useState(item.estimate);
  const [relaValue, setRelaValue] = useState(item.relaValue);

  const listPartner = [
    { value: 'Vợ/ chồng KH', label: 'Vợ/ chồng KH' },
    { value: 'Bố mẹ đẻ KH', label: 'Bố mẹ đẻ KH' },
    { value: 'Bố mẹ chồng/bố mẹ vợ', label: 'Bố mẹ chồng/bố mẹ vợ' },
    { value: 'Con cái con đẻ, con dâu, con rể', label: 'Con cái con đẻ, con dâu, con rể' }
  ];
  const Select = props => (
    <FixRequiredSelect {...props} SelectComponent={BaseSelect} options={props.options || options} />
  );

  const checkExitItem = (id, list) => {
    if (list.filter(value => value.id === id).length > 0) {
      return true;
    }
    return false;
  };

  const updateItem = (object, list) => {
    return list.map(value => {
      if (object.id === value.id) {
        return object;
      }
      return value;
    });
  };

  useEffect(() => {
    if (decription && estimate && relaValue) {
      if (checkExitItem(item.id, formState.collateral)) {
        const object = {
          id: item.id,
          decription: decription,
          estimate: estimate,
          relaValue: relaValue
        };
        setFormState({ ...formState, collateral: updateItem(object, formState.collateral) });
      } else {
        setFormState({
          ...formState,
          collateral: [
            ...formState.collateral,
            {
              id: item.id,
              decription: decription,
              estimate: estimate,
              relaValue: relaValue
            }
          ]
        });
      }
    }
  }, [decription, estimate, relaValue]);

  return (
    <div className="c-form1__child1">
      <span
        className="btn-close close-js"
        onClick={() => {
          removeItem(item.id);
          setDecription();
          setEstimate();
          setRelaValue();
        }}
      >
        <i className="icon-close"> </i>
      </span>
      <section className="child1_box1">
        <div className="row">
          <div className="col-12 col-md-12 form-control">
            <h6 className="title1">
              Mô tả tài sản (<span className="red">*</span>)
            </h6>
            <input
              className="input"
              name="decriptiom"
              type="text"
              required
              defaultValue={decription}
              onChange={e => setDecription(e.target.value)}
              style={{ position: 'relative !important', opacity: 1 }}
              placeholder="Nhập địa chỉ, diện tích…."
            />
          </div>
          <div className="col-12 col-md-6">
            <h6 className="title1">
              Giá trị ước tính (<span className="red">*</span>)
            </h6>
            <div className="c-form1__control1">
              <input
                className="input"
                name="profileNumber"
                type="text"
                required
                placeholder="Nhập giá trị"
                defaultValue={estimate}
                onChange={e => setEstimate(e.target.value)}
              />
              <span className="text1">VNĐ</span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h6 className="title1">
              Mối quan hệ chủ tài sản với khách hàng (<span className="red">*</span>)
            </h6>
            <Select
              options={listPartner}
              required
              value={relaValue}
              onChange={e => setRelaValue(e)}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

ChildboxForm2.propTypes = propTypes;

export default ChildboxForm2;
