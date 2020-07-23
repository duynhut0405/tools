import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import BaseSelect from 'react-select';
import FixRequiredSelect from './FixRequiredSelect';

const propTypes = {
  setFormState: Proptypes.func,
  formState: Proptypes.object,
  item: Proptypes.object,
  index: Proptypes.number,
  removeItem: Proptypes.func
};

const ChildboxForm1 = ({ formState, setFormState, index, item, removeItem }) => {
  const [name, setName] = useState(item.name_componion);
  const [relationship, setRelationship] = useState(item.rela_componion);
  const [typeProfile, setTypeProfile] = useState(item.prof_componion);

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
        id: item.id,
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
      <span className="btn-close close-js" onClick={() => removeItem(index)}>
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
              //required
              placeholder="Nhập đầy đủ họ tên vợ/ chồng"
              defaultValue={item.name_componion}
              onChange={e => setName(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <div className="col-12 col-md-6">
            <h6 className="title1">
              Quan hệ (<span className="red">*</span>)
            </h6>
            <Select
              options={listPartner}
              //required
              value={relationship}
              onChange={e => setRelationship(e)}
            />
          </div>
          <div className="col-12 col-md-6">
            <h6 className="title1">
              Số giấy tờ tuỳ thân (<span className="red">*</span>)
            </h6>
            <input
              className="input"
              type="text"
              //required
              placeholder="Nhập đầy đủ họ tên vợ/ chồng"
              defaultValue={item.prof_componion}
              onChange={e => setTypeProfile(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

ChildboxForm1.propTypes = propTypes;

export default ChildboxForm1;
