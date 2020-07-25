import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import BaseSelect from 'react-select';
import FixRequiredSelect from './FixRequiredSelect';

const propTypes = {
  errors: Proptypes.shape({
    decriptiom: Proptypes.any,
    profileNumber: Proptypes.any,
    relaValue: Proptypes.any
  }),
  formState: Proptypes.shape({
    collateral: Proptypes.any
  }),
  handleChange: Proptypes.func,
  item: Proptypes.shape({
    decription: Proptypes.any,
    estimate: Proptypes.any,
    id: Proptypes.any,
    relaValue: Proptypes.any
  }),
  removeItem: Proptypes.func,
  setFormState: Proptypes.func,
  touched: Proptypes.shape({
    decriptiom: Proptypes.any,
    profileNumber: Proptypes.any,
    relaValue: Proptypes.any
  })
};

const ChildboxForm2 = ({
  formState,
  setFormState,
  item,
  removeItem,
  touched,
  errors,
  setFieldValue
}) => {
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
              // required
              defaultValue={decription}
              onChange={e => {
                setFieldValue('decriptiom', e.target.value);
                setDecription(e.target.value);
              }}
              style={{ position: 'relative !important', opacity: 1 }}
              placeholder="Nhập địa chỉ, diện tích…."
            />
            {touched.decriptiom && errors.decriptiom && (
              <p className="red error">{errors.decriptiom}</p>
            )}
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
                // required
                placeholder="Nhập giá trị"
                defaultValue={estimate}
                onChange={e => {
                  setFieldValue('profileNumber', e.target.value);
                  setEstimate(e.target.value);
                }}
              />
              <span className="text1">VNĐ</span>
            </div>
            {touched.profileNumber && errors.profileNumber && (
              <p className="red error">{errors.profileNumber}</p>
            )}
          </div>
          <div className="col-12 col-md-6">
            <h6 className="title1">
              Mối quan hệ chủ tài sản với khách hàng (<span className="red">*</span>)
            </h6>
            <Select
              options={listPartner}
              value={relaValue}
              onChange={e => {
                setFieldValue('relaValue', e.value);
                setRelaValue(e);
              }}
            />
            {touched.relaValue && errors.relaValue && (
              <p className="red error">{errors.relaValue}</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

ChildboxForm2.propTypes = propTypes;

export default ChildboxForm2;
