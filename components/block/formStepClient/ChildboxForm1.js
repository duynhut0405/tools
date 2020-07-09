import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import Select from 'react-select';

const propTypes = {
  setFormState: Proptypes.func,
  formState: Proptypes.object,
  index: Proptypes.number,
  removeItem: Proptypes.func
};

const ChildboxForm1 = ({ formState, setFormState, index, removeItem }) => {
  const [name, setName] = useState();
  const [relationship, setRelationship] = useState();
  const [typeProfile, setTypeProfile] = useState();

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
    if (name && relationship && typeProfile) {
      if (checkExitItem(index, formState.nuComponion)) {
        const object = {
          id: index,
          name_componion: name,
          rela_componion: relationship,
          prof_componion: typeProfile
        };
        setFormState({ ...formState, nuComponion: updateItem(object, formState.nuComponion) });
      } else {
        setFormState({
          ...formState,
          nuComponion: [
            ...formState.nuComponion,
            {
              id: index,
              name_componion: name,
              rela_componion: relationship,
              prof_componion: typeProfile
            }
          ]
        });
      }
    }
  }, [name, relationship, typeProfile]);

  const listPartner = [
    { value: 'Vợ/ chồng KH', label: 'Vợ/ chồng KH' },
    { value: 'Bố mẹ đẻ KH', label: 'Bố mẹ đẻ KH' },
    { value: 'Bố mẹ chồng/bố mẹ vợ', label: 'Bố mẹ chồng/bố mẹ vợ' },
    { value: 'Con cái con đẻ, con dâu, con rể', label: 'Con cái con đẻ, con dâu, con rể' }
  ];

  const listType = [
    { value: 'Chứng minh nhân dân', label: 'Chứng minh nhân dân' },
    { value: 'Căn cước', label: 'Căn cước' },
    { value: 'Hộ chiếu', label: 'Hộ chiếu' },
    { value: 'Chứng minh quân đội', label: 'Chứng minh quân đội' }
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
              required
              placeholder="Nhập đầy đủ họ tên vợ/ chồng"
              onChange={e => setName(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <div className="col-12 col-md-6">
            <h6 className="title1">
              Quan hệ (<span className="red">*</span>)
            </h6>
            <Select
              className="fix-select"
              // placeholder={listPartner[0]}
              options={listPartner}
              onChange={e => setRelationship(e.value)}
            />
          </div>
          <div className="col-12 col-md-6">
            <h6 className="title1">
              Số giấy tờ tuỳ thân (<span className="red">*</span>)
            </h6>
            <Select
              className="fix-select"
              // placeholder={listPartner[0]}
              options={listType}
              onChange={e => setTypeProfile(e.value)}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

ChildboxForm1.propTypes = propTypes;

export default ChildboxForm1;
