import React, { useState, useEffect } from 'react';
import { getFormbuilderByIdService } from '../../../services/form';
import ReactHtmlParser from 'react-html-parser';
import map from 'lodash/map';
import t from '../../../translation';
import Link from 'next/link';
import { getLang } from '../../../utils/cookie';
import Proptypes from 'prop-types';

const propTypes = {
  data: Proptypes.object,
  step: Proptypes.number,
  totalStep: Proptypes.number,
  formActive: Proptypes.number,
  onNext: Proptypes.func,
  onGoBack: Proptypes.func,
  t: Proptypes.func
};

const getFormByID = async (id, setData) => {
  const res = await getFormbuilderByIdService(id);
  if (res && res.status === 200) {
    setData(JSON.parse(res.data.list));
  }
};

function FormItems({ data, step, totalStep, formActive, onNext, onGoBack }) {
  const [formdata, setFormData] = useState([]);
  const [formState, setFormState] = useState({});
  const lang = getLang();

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
    onNext(step + 1, formState);
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
                <div className="col-12" key={index}>
                  <div className={`form-desc ${item.className}`} key={index}>
                    {ReactHtmlParser(item.label)}
                  </div>
                </div>
              );
            }
            if (item.type === 'radio-group') {
              return (
                <div className={`col-12 mb-30  ${item.className}`} key={index}>
                  {map(item.values, (items, key) => (
                    <label className="radio" key={key}>
                      {items.label || ''}
                      <input
                        type="radio"
                        name={item.name}
                        required={item.required}
                        value={formState[items.name]}
                        onChange={e => handleChange(e)}
                      />
                      <span></span>
                    </label>
                  ))}
                </div>
              );
            }
            if (item.type === 'text') {
              return (
                <React.Fragment key={index}>
                  <div className={`col-12 ${item.className}`}>
                    {item.label && <label>{item.label}</label>}
                    <input
                      style={{ width: '100%' }}
                      className="input"
                      name={item.name}
                      required={item.required}
                      type={item.subtype}
                      value={formState[item.name]}
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
                    {item.label && <label>{item.label}</label>}
                    <input
                      style={{ width: '100%' }}
                      className="input"
                      type={item.subtype}
                      name={item.name}
                      required={item.required}
                      rows={item.rows}
                      value={formState[item.name]}
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
                  <img className="lazyload" data-src="/static/images/ico-dangky.svg" alt="images" />
                </div>
              </div>

              <div className="col-12">
                <div className="text-center">
                  <p className="desc mg-0">{t('form_step_success')}</p>
                  <p className="desc mg-0">{t('form_step_title')}</p>
                </div>
              </div>

              <div className="col-12 ">
                <div className="text-center">
                  {lang === 'vi' && (
                    <Link href="/">
                      <a className="btn">{t('form_step_go_home')}</a>
                    </Link>
                  )}
                  {lang === 'en' && (
                    <Link href="/en">
                      <a className="btn">{t('form_step_go_home')}</a>
                    </Link>
                  )}
                </div>
              </div>
            </React.Fragment>
          )}
          {data.type !== 'result' && (
            <React.Fragment>
              {step > 1 && (
                <div className="col-6">
                  <button className="btn" onClick={onGoBack} type="button">
                    {t('form_step_back')}
                  </button>
                </div>
              )}
              <div className={step === 1 ? 'col-12 text-center' : 'col-6 text-right'}>
                <button className="btn" type="submit">
                  {t('form_step_continue')}
                </button>
              </div>
            </React.Fragment>
          )}
        </form>
      )}
    </React.Fragment>
  );
}

FormItems.propTypes = propTypes;

export default FormItems;
