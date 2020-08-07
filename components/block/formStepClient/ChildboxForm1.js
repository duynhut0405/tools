/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import Proptypes from 'prop-types';
import BaseSelect from 'react-select';
import FixRequiredSelect from './FixRequiredSelect';
import NumberFormat from 'react-number-format';

const propTypes = {
  setFormState: Proptypes.func,
  formState: Proptypes.object,
  item: Proptypes.object,
  index: Proptypes.number,
  removeItem: Proptypes.func
  // formikProps: Proptypes.object
};

const ChildboxForm1 = ({ formState, setFormState, index, item, removeItem, formikProps }) => {
  const [name, setName] = useState(item.name_componion ? item.name_componion : '');
  const [relationship, setRelationship] = useState(item.rela_componion ? item.rela_componion : '');
  const [typeProfile, setTypeProfile] = useState(item.prof_componion ? item.prof_componion : '');
  // const form02 = useRef(null);

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

  const Select = props => (
    <FixRequiredSelect {...props} SelectComponent={BaseSelect} options={props.options || options} />
  );

  useEffect(() => {
    if (checkExitItem(item.id, formState.nuComponion)) {
      const object = {
        id: index,
        name_componion: name,
        rela_componion: relationship,
        prof_componion: typeProfile
      };
      setFormState({ ...formState, nuComponion: updateItem(object, formState.nuComponion) });
    }
  }, [name, relationship, typeProfile]);

  const listPartner = [
    { value: 'Vợ/ chồng KH', label: 'Vợ/ chồng KH' },
    { value: 'Bố mẹ đẻ KH', label: 'Bố mẹ đẻ KH' },
    { value: 'Bố mẹ chồng/bố mẹ vợ', label: 'Bố mẹ chồng/bố mẹ vợ' },
    { value: 'Con cái con đẻ, con dâu, con rể', label: 'Con cái con đẻ, con dâu, con rể' }
  ];

  return (
    <div className="c-form1__child1">
      <span
        className="btn-close close-js"
        onClick={() => {
          removeItem(index);
          formikProps.setFieldValue('nuComponion', removeItem(index));
        }}
      >
        <i className="icon-close"> </i>
      </span>
      <section className="child1_box1">
        <div className="row">
          <div className="col-12 col-md-12 form-control">
            <h6 className="title1">
              Họ và tên (<span className="red">*</span>)
            </h6>
            <input
              className="input"
              type="text"
              name="name_componion"
              maxLength="40"
              placeholder="Nhập đầy đủ họ tên vợ/ chồng"
              value={name ? name.toUpperCase() : ''}
              onChange={e => {
                setName(e.target.value.toUpperCase());
                formikProps.setFieldValue(`nuComponion.${index}.name_componion`, e.target.value);
              }}
              style={{ width: '100%' }}
              required
            />
            {formikProps.touched.nuComponion &&
              formikProps.errors.nuComponion &&
              formikProps.touched.nuComponion[index] &&
              formikProps.errors.nuComponion[index] && (
                <p className="red error">{formikProps.errors.nuComponion[index].name_componion}</p>
              )}
          </div>
          <div className="col-12 col-md-6">
            <h6 className="title1">
              Quan hệ (<span className="red">*</span>)
            </h6>
            <Select
              options={listPartner}
              name="rela_componion"
              defaultValue={relationship ? relationship : {}}
              onChange={e => {
                // formVal(e);
                formikProps.setFieldValue(`nuComponion.${index}.rela_componion`, e);
                setRelationship(e);
              }}
            />
            {formikProps.touched.nuComponion &&
              formikProps.errors.nuComponion &&
              formikProps.touched.nuComponion[index] &&
              formikProps.errors.nuComponion[index] && (
                <p className="red error">{formikProps.errors.nuComponion[index].rela_componion}</p>
              )}
          </div>
          <div className="col-12 col-md-6">
            <h6 className="title1">
              Số giấy tờ tuỳ thân (<span className="red">*</span>)
            </h6>
            <input
              className="input"
              type="text"
              id="prof_componion"
              name="prof_componion"
              placeholder="Nhập giấy tờ tùy thân"
              value={typeProfile ? typeProfile : ''}
              onChange={e => {
                setTypeProfile(e.target.value);
                formikProps.setFieldValue(`nuComponion.${index}.prof_componion`, e.target.value);
              }}
              style={{ width: '100%' }}
            />
            {formikProps.touched.nuComponion &&
              formikProps.errors.nuComponion &&
              formikProps.touched.nuComponion[index] &&
              formikProps.errors.nuComponion[index] && (
                <p className="red error">{formikProps.errors.nuComponion[index].prof_componion}</p>
              )}
          </div>
        </div>
      </section>
    </div>
  );
};

ChildboxForm1.propTypes = propTypes;

export default ChildboxForm1;
