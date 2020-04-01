import React, { useState, useEffect } from 'react';
import { Input, Label, CustomInput } from 'reactstrap';
import { getFormbuilderByIdService } from '../../../services/form';
import ReactHtmlParser from 'react-html-parser';
import map from 'lodash/map';
import Proptypes from 'prop-types';

const propTypes = {
  data: Proptypes.object,
  step: Proptypes.number,
  totalStep: Proptypes.number,
  formActive: Proptypes.number,
  onNext: Proptypes.func
};

const getFormByID = async (id, setData) => {
  const res = await getFormbuilderByIdService(id);
  if (res && res.status === 200) {
    setData(JSON.parse(res.data.list));
  }
};

function FormItems({ data, step, totalStep, formActive, onNext }) {
  const [formdata, setFormData] = useState([]);
  const [formState, setFormState] = useState({});

  useEffect(() => {
    getFormByID(data.value, setFormData);
  }, [getFormByID]);

  const handleChange = event => {
    event.persist();
    setFormState(() => ({
      ...formState,
      [event.target.name]: event.target.value
    }));
  };

  const onSend = event => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      {formActive === step && (
        <form onSubmit={onSend} autoComplete="on" className="row list-item form-contact">
          <div className="col-12">
            <div className="text-center">
              <h3 className="ctext mg-0 fs24">{`Bước ${step}/${totalStep}: ${data.label}`}</h3>
            </div>
          </div>
          {map(formdata, (item, index) => {
            if (item.type === 'header') {
              return (
                <React.Fragment key={index}>
                  <div className="col-12">
                    <div className="text-center">
                      <h3 className={`ctext mg-0 pt-10 pb-10 bg-1 ${item.className}`}>
                        {ReactHtmlParser(item.label)}
                      </h3>
                    </div>
                  </div>
                </React.Fragment>
              );
            }
            if (item.type === 'paragraph') {
              return (
                <div className={`col-12`} key={index}>
                  <div className={`form-desc ${item.className}`} key={index}>
                    {ReactHtmlParser(item.label)}
                  </div>
                </div>
              );
            }
            if (item.type === 'radio-group') {
              return (
                <div className={`col-12 mb-30 text-center ${item.className}`} key={index}>
                  {map(item.values, (items, key) => (
                    <CustomInput
                      type="radio"
                      className="radio"
                      inline={item.inline !== undefined ? true : false}
                      name={item.name}
                      id={key}
                      label={items.label}
                      value={items.value}
                      onChange={e => handleChange(e)}
                    />
                  ))}
                </div>
              );
            }
            if (item.type === 'text') {
              return (
                <React.Fragment key={index}>
                  <div className={`col-12 ${item.className}`}>
                    {item.label && <Label>{item.label}</Label>}
                    <Input
                      style={{ width: '100%' }}
                      className={`input`}
                      name={item.name}
                      type={item.subtype}
                      placeholder={item.placeholder}
                      onChange={e => handleChange(e)}
                    />
                  </div>
                </React.Fragment>
              );
            }
            if (item.type === 'textarea') {
              return (
                <React.Fragment key={index}>
                  <div className={`col-12 ${item.className}`}>
                    {item.label && <Label>{item.label}</Label>}
                    <Input
                      style={{ width: '100%' }}
                      className={`input`}
                      type={item.subtype}
                      name={item.name}
                      rows={item.rows}
                      placeholder={item.placeholder}
                      onChange={e => handleChange(e)}
                    />
                  </div>
                </React.Fragment>
              );
            }
            // if (item.type === 'button') {
            //   return (
            //     <React.Fragment key={index}>
            //       <div className={`col-12 text-center `}>
            //         <button className={`btn`} type={item.subtype}>
            //           {item.label}
            //         </button>
            //       </div>
            //     </React.Fragment>
            //   );
            // }
            return null;
          })}
          {data.type === 'result' && (
            <React.Fragment>
              <div className="col-12">
                <div className="text-center">
                  <img src="/static/images/ico-dangky.svg" alt="" />
                </div>
              </div>

              <div className="col-12">
                <div className="text-center">
                  <p className="desc mg-0">Chúc mừng bạn đã đăng ký thành công</p>
                  <p className="desc mg-0">
                    Vui lòng đến chi nhánh đã đăng ký để xác thực thông tin tài khoản
                  </p>
                </div>
              </div>

              <div className="col-12 ">
                <div className="text-center">
                  <a className="btn" href="/">
                    Về trang chủ
                  </a>
                </div>
              </div>
            </React.Fragment>
          )}
          {data.type !== 'result' && (
            <div className="col-12 text-center">
              <a className="btn" onClick={() => onNext(step + 1, formState)}>
                Tiếp tục
              </a>
            </div>
          )}
        </form>
      )}
    </React.Fragment>
  );
}

FormItems.propTypes = propTypes;

export default FormItems;
