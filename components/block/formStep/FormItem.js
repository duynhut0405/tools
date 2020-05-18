import React, { useState, useEffect } from 'react';
import { getFormbuilderByIdService } from '../../../services/form';
import ReactHtmlParser from 'react-html-parser';
import map from 'lodash/map';
import t from '../../../translation';
import { LinkPage } from '../../common/link';
import { getLang } from '../../../utils/cookie';
import Proptypes from 'prop-types';

const propTypes = {
  data: Proptypes.object,
  step: Proptypes.number,
  totalStep: Proptypes.number,
  formActive: Proptypes.number,
  onNext: Proptypes.func,
  t: Proptypes.func
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
                        value={items.value}
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
                  <img data-src="/static/images/ico-dangky.svg" alt="images" />
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
                    <LinkPage lang={lang} name="/">
                      <a className="btn">{t('form_step_go_home')}</a>
                    </LinkPage>
                  )}
                  {lang === 'en' && (
                    <LinkPage lang={lang} name="/en">
                      <a className="btn">{t('form_step_go_home')}</a>
                    </LinkPage>
                  )}
                </div>
              </div>
            </React.Fragment>
          )}
          {data.type !== 'result' && (
            <div className="col-12 text-center">
              <a className="btn" onClick={() => onNext(step + 1, formState)}>
                {t('form_step_continue')}
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
