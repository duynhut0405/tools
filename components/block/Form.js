import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import { getFormbuilderByIdService } from '../../services/form';
import map from 'lodash/map';
import ReactHtmlParser from 'react-html-parser';
import { sendMailService } from '../../services/form';
import ReactLoading from 'react-loading';
import PopupThankyou from './Popup/PopupThankyou';
import ReCAPTCHA from 'react-google-recaptcha';

const propTypes = {
  data: Proptypes.object.isRequired,
  pageId: Proptypes.number,
  id: Proptypes.number,
  getPageBlock: Proptypes.func
};

function Form({ data, pageId, id }) {
  const [formdata, setFormData] = useState([]);
  const [formState, setFormState] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const [capcha, setCapcha] = useState(false);
  const recaptchaRef = React.createRef();
  const getFormByID = async () => {
    const res = await getFormbuilderByIdService(data.formdata);
    if (res && res.status === 200) {
      setFormData(JSON.parse(res.data.list));
    }
  };

  useEffect(() => {
    getFormByID();
  }, [id]);

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
  const handleChangeCapcha = value => {
    if (value) {
      setCapcha(true);
    }
  };
  const onSend = async event => {
    event.preventDefault();
    if (capcha) {
      setIsLoading(true);

      const dataSend = {
        content: JSON.stringify(formState),
        contentMail: convertContent(formState),
        email: formState.email,
        idForm: data.formdata,
        idPage: pageId
      };
      //recaptchaRef.current.execute();
      const send = await sendMailService(dataSend);
      if (send && send !== undefined && send.status === 200) {
        setIsLoading(false);
        setModal(!modal);
        setFormState({});
      } else {
        setIsLoading(false);
      }
    }
  };

  const onKeyPress = e => {
    const reg = /^[0-9]/;
    if (!reg.test(e.key)) {
      e.preventDefault();
    }
  };

  let padding = '';
  if (data.optionWidth === '2') {
    padding = 'sec-tb';
  } else if (data.optionWidth === '3') {
    padding = 'sec-t';
  } else if (data.optionWidth === '4') {
    padding = 'sec-b';
  } else {
    padding = 'sec-';
  }

  const styleImg = {
    backgroundImage: `url(${process.env.DOMAIN}${data.urlImage})`,
    padding: "46px",
    borderRadius: "5px",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    border: "1px solid rgb(221, 221, 221)"
  };

  return (
    <section className={`${padding} sec-tuvan form-register`} id={id} style={{boxShadow: "none"}}>
      <div className="container" style={styleImg}>
        <form onSubmit={onSend} autoComplete="on" className="row">
          {map(formdata, (item, index) => {
            if (item.type === 'header') {
              return (
                <React.Fragment>
                  <div className={`col-12`}>
                    <h2 className={`text-center__ ${item.className}`} style={{marginBottom: "5px"}}>
                      {ReactHtmlParser(item.label)}
                    </h2>
                  </div>
                </React.Fragment>
              );
            }
            if (item.type === 'paragraph') {
              return (
                <div className={`col-12`}>
                  <div className={`form-desc ${item.className}`} key={index} style={{fontSize: "16px", color: "#686868"}}>
                    {ReactHtmlParser(item.label)}
                  </div>
                </div>
              );
            }
            if (item.type === 'radio-group') {
              return (
                <div className={`col-12 ${item.className}`}>
                  {map(item.values, (items, key) => (
                    <label className="radio" key={key}>
                      {items.label || ''}
                      <input
                        type="radio"
                        name={item.name}
                        value={items.value}
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
                <React.Fragment>
                  <div className={`col-12 ${item.className}`}>
                    {item.subtype !== 'tel' && (
                      <input
                        className="input"
                        name={item.name}
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
                <React.Fragment>
                  <div className={`col-12 ${item.className}`}>
                    {item.label && <label>{item.label}</label>}
                    <textarea
                      className="input"
                      type={item.subtype}
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
                <React.Fragment>
                  <div className="col-12 wrecaptchar">
                    {/* <ReCAPTCHA
                      style={{ display: 'inline-block' }}
                      ref={recaptchaRef}
                      onChange={handleChangeCapcha}
                      sitekey="6LdlyvoUAAAAAPKjNQN7Zk3YI-21ZaDLstM76POz"
                      // sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    /> */}
                  </div>
                  <div className={`d-flex col-12 text-center__ `}>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                      <button className={`btn`} type={item.subtype}>
                        {item.label}
                      </button>
                      {isLoading && (
                        <ReactLoading
                          style={{
                            width: '20px',
                            height: '20px',
                            position: 'absolute',
                            left: '105%',
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
                  </div>
                </React.Fragment>
              );
            }
            return null;
          })}
        </form>
      </div>
      <PopupThankyou modal={modal} setModal={() => setModal(false)} />
    </section>
  );
}

Form.propTypes = propTypes;

export default Form;
