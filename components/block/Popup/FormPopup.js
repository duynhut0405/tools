import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import { getFormbuilderByIdService, sendMailService } from '../../../services/form';
import ReactLoading from 'react-loading';
import map from 'lodash/map';
import ReactHtmlParser from 'react-html-parser';

const propTypes = {
  item: Proptypes.object,
  modal: Proptypes.bool,
  setModal: Proptypes.func,
  idPage: Proptypes.number,
  mail: Proptypes.string
};

function FormPopup({ modal, setModal, idPage, mail }) {
  const [formdata, setFormData] = useState([]);
  const [formState, setFormState] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getFormByID = async () => {
    const res = await getFormbuilderByIdService(233752);
    if (res && res.status === 200) {
      setFormData(JSON.parse(res.data.list));
    }
  };

  useEffect(() => {
    getFormByID();
  }, [modal]);

  useEffect(() => {
    setFormState(() => ({
      ...formState,
      email: mail
    }));
  }, [mail]);

  const handleChange = event => {
    event.persist();
    setFormState(() => ({
      ...formState,
      [event.target.name]: event.target.value
    }));
  };

  const convertContent = value => {
    let result = '';
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        result += `<p>${value[key]}</p>`;
      }
    }
    return result;
  };

  const onSend = async event => {
    event.preventDefault();
    setIsLoading(true);
    const dataSend = {
      content: JSON.stringify(formState),
      contentMail: convertContent(formState),
      email: formState.email,
      idForm: 233752,
      idPage: 1
      //   idPage: idPage
    };

    const send = await sendMailService(dataSend);
    if (send && send !== undefined && send.status === 200) {
      setIsLoading(false);
      setModal(!modal);
      setFormState({});
      setFormData([]);
    } else {
      setIsLoading(false);
    }
  };

  const onKeyPress = e => {
    const reg = /^[0-8]/;
    if (!reg.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <React.Fragment>
      <div id="formModal" className={`myModal formModal ${modal ? `active` : null}`}>
        <span
          className="btnModal overlay"
          onClick={() => {
            setModal(!modal);
            document.body.classList.remove('showModal');
          }}
        ></span>
        <div className="container  max750 middle">
          <div className="contentModal">
            <span
              className="btnModal btn-close"
              onClick={() => {
                setModal(!modal);
                document.body.classList.remove('showModal');
              }}
            >
              <i className="icon-close"> </i>
            </span>

            <form onSubmit={onSend} autoComplete="on" className="row">
              {map(formdata, (item, index) => {
                if (item.type === 'header') {
                  return (
                    <div className={`col-12`} key={index}>
                      <h2 className={`text-center ${item.className}`}>
                        {ReactHtmlParser(item.label)}
                      </h2>
                    </div>
                  );
                }
                if (item.type === 'paragraph') {
                  return (
                    <div className={`col-12`} key={index}>
                      <div className={`form-desc ${item.className}`}>
                        {ReactHtmlParser(item.label)}
                      </div>
                    </div>
                  );
                }
                if (item.type === 'radio-group') {
                  return (
                    <div className={`col-12 ${item.className}`} key={index}>
                      {map(item.values, (items, key) => (
                        <label className="radio" key={key}>
                          {items.label || ''}
                          <input
                            type="radio"
                            name={item.name}
                            required={item.required}
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
                        {item.subtype !== 'tel' && (
                          <input
                            className="input"
                            name={item.name}
                            value={formState[item.name]}
                            type={item.subtype}
                            required={item.required}
                            placeholder={item.placeholder}
                            onChange={e => handleChange(e)}
                          />
                        )}
                        {item.subtype === 'tel' && (
                          <input
                            className="input"
                            name={item.name}
                            value={formState[item.name]}
                            type={item.subtype}
                            required={item.required}
                            placeholder={item.placeholder}
                            onKeyPress={onKeyPress}
                            onChange={e => handleChange(e)}
                          />
                        )}
                      </div>
                    </React.Fragment>
                  );
                }
                if (item.type === 'textarea') {
                  return (
                    <React.Fragment key={index}>
                      <div className={`col-12 ${item.className}`}>
                        {item.label && <label>{item.label}</label>}
                        <textarea
                          className="input"
                          type={item.subtype}
                          value={formState[item.name]}
                          name={item.name}
                          rows={item.rows}
                          required={item.required}
                          placeholder={item.placeholder}
                          onChange={e => handleChange(e)}
                        />
                      </div>
                    </React.Fragment>
                  );
                }
                if (item.type === 'button') {
                  return (
                    <React.Fragment key={index}>
                      <div className="d-flex col-12 text-center">
                        <button className={`btn`} type={item.subtype}>
                          {item.label}
                        </button>
                        {isLoading && (
                          <ReactLoading
                            style={{
                              width: '20px',
                              height: '20px',
                              position: 'absolute',
                              left: '65%',
                              transform: 'translateY(-50%)',
                              top: '50%'
                            }}
                            type={'spin'}
                            color={'primary'}
                            height={'15px'}
                            width={'15px'}
                          />
                        )}
                      </div>
                    </React.Fragment>
                  );
                }
                return null;
              })}
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

FormPopup.propTypes = propTypes;

export default FormPopup;
