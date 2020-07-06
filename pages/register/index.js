import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getFormbuilderByIdService, sendMailService } from '../../services/form';
import ReactLoading from 'react-loading';
import map from 'lodash/map';
import ReactHtmlParser from 'react-html-parser';
import ReCAPTCHA from 'react-google-recaptcha';
import Proptypes from 'prop-types';

const propTypes = {
  item: Proptypes.object,
  modal: Proptypes.bool,
  setModal: Proptypes.func,
  idPage: Proptypes.number,
  mail: Proptypes.string
};

const getFormByID = async setFormData => {
  const res = await getFormbuilderByIdService(233752);
  if (res && res.status === 200) {
    setFormData(JSON.parse(res.data.list));
  }
};

function Register() {
  const router = useRouter();
  const [formdata, setFormData] = useState([]);
  const [formState, setFormState] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [capcha, setCapcha] = useState(false);
  const recaptchaRef = React.createRef();

  useEffect(() => {
    getFormByID(setFormData);
  }, []);

  useEffect(() => {
    setFormState(() => ({
      ...formState,
      email: router.query.mail
    }));

    const elmnt = document.getElementById(`#form`);
    if (elmnt !== null) {
      elmnt.scrollIntoView();
    }
  }, [router.query]);

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
    }
  };

  const onKeyPress = e => {
    const reg = /^[0-8]/;
    if (!reg.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <section className="sec-t" id="#form">
      <Head>
        <title>Đăng ký</title>
        <meta name="title" content="Đăng ký" />
        <meta
          property="og:image"
          itemProp="thumbnaiUrl"
          content={`${process.env.DOMAIN}uploads/resources/files/icon/imgDefault.png`}
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="354" />
      </Head>
      <div className="container">
        <div className="max750">
          <form onSubmit={onSend} autoComplete="on" className="row list-item form-contact">
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
                          value={items.value}
                          checked={items.value === formState[item.name] ? true : false}
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
                          style={{ width: '100%' }}
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
                          style={{ width: '100%' }}
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
                        style={{ width: '100%' }}
                      />
                    </div>
                  </React.Fragment>
                );
              }
              if (item.type === 'button') {
                return (
                  <React.Fragment key={index}>
                    <div className="col-12 text-center">
                      <ReCAPTCHA
                        style={{ display: 'inline-block' }}
                        ref={recaptchaRef}
                        onChange={handleChangeCapcha}
                        sitekey="6LdlyvoUAAAAAPKjNQN7Zk3YI-21ZaDLstM76POz"
                        // sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                      />
                    </div>
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
    </section>
  );
}

Register.propsTypes = propTypes;

export default Register;
