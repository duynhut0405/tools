import map from 'lodash/map';
import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { sendMailService } from '../../services/form';
import PropTypes from 'prop-types';
import { getFormbuilderByIdService } from '../../services/form';
import ReactLoading from 'react-loading';
import PopupThankyou from './Popup/PopupThankyou';
import ReCAPTCHA from 'react-google-recaptcha';
import UseWindowResize from '../common/Resize';

const propTypes = {
  data: PropTypes.object,
  getPageBlock: PropTypes.func,
  type: PropTypes.string,
  pageId: PropTypes.number,
  optionWidth: PropTypes.string
};

const getFormByID = async (data, setData) => {
  const res = await getFormbuilderByIdService(Number(data.formdata));
  if (res && res.status === 200) {
    setData(JSON.parse(res.data.list));
  }
};

function MenuIntro({ data, pageId, optionWidth }) {
  const [formdata, setFormData] = useState({});
  const [formState, setFormState] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [capcha, setCapcha] = useState(false);
  const recaptchaRef = React.createRef();
  const size = UseWindowResize();

  let padding = '';
  if (optionWidth === '2') {
    padding = 'sec-tb';
  } else if (optionWidth === '3') {
    padding = 'sec-t';
  } else if (optionWidth === '4') {
    padding = 'sec-b';
  } else {
    padding = 'sec-';
  }

  useEffect(() => {
    getFormByID(data, setFormData);
  }, [getFormByID]);

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

  const onKeyPress = e => {
    const reg = /^[0-9]/;
    if (!reg.test(e.key)) {
      e.preventDefault();
    }
  };

  function onScroll(id) {
    const elmnt = document.getElementById(id);
    if (elmnt !== null) {
      elmnt.scrollIntoView({behavior: 'smooth'});
    }
  }

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

  return (
    <React.Fragment>
      <section className={`sec-menu"`}>
        {/* style={{backgroundColor:"#fff", padding: "0px 15px 0"}}> */}
        <div className="container"> 
        {/* style={{backgroundColor:"#fff", height:"82px",display:"flex",justifyContent:"space-between",alignItems:"center"}}> */}
          <div className="convert-grid-to-scroll">
          <div className="row-custom list-item grid-space-20" style={{borderBottom:"1px solid rgb(214, 214, 214)"}}>
          
                {map(data.listBlock, (values, index) => (
                  <div
                  className="li-menu-custom"
                  key={index}
                  onClick={() => {
                    onScroll(values.id);
                  }}>
                    {index === 0 && (
                    <div className="menu-custom-0" >
                              
                    <div
                            className="menu-div-custom-1"
                            key={index}
                            onClick={() => {
                              onScroll(values.id);
                            }}
                            style={{minWidth: "75px",borderBottom: "2px solid #141ED2",
                            fontWeight: "bold",color:"#333333"}}>
                    <a className="item efch-0 ef-img-l"  >{values.title}</a>
                  </div>
                  </div>
                  )}
                  {index != 0 && (
                    <div className="menu-custom-1" >
                              
                    <div
                            className="menu-div-custom-1"
                            key={index}
                            onClick={() => {
                              onScroll(values.id);
                            }}
                            >
                    <a className="item efch-0 ef-img-l">{values.title}</a>
                  </div>
                  </div>
                  )}
                  </div>
                ))}
          </div>
        </div>
          {/* {size.width > 768 && data.button_title != null && (
                      <div className="button-menu-custom">
                        <button className="btn" type="submit"><a href={data.url_button_title}>{data.button_title}</a></button>
                      </div>
                    )} */}
          </div>
            {size.width <= 768 && data.button_title != null && (
              <div className="center-custom" style={{marginTop:"24px"}}>
                <button className="btn" type="submit"><a href={data.url_button_title}>{data.button_title}</a></button>
              </div>
            )}
      </section>
      <section className={`${padding} menuIntro sec-ab-1 sec-form-tuvan`} style={{paddingTop: "75px"}}>
        <div className="container">
          <div className="row list-item">
            <div className={!data.isForm || data.isForm === 0 ? 'col-lg-7' : 'col-lg-7'}>
              <div className="entry-content entry-content-custom" style={{fontSize:"16px"}}>
                {ReactHtmlParser(data.descriptionTop)}
                {ReactHtmlParser(data.description)}
              </div>
              {(data.descriptionBot !== null & data.descriptionBot !== undefined & data.descriptionBot !== '' ) ? (
                <div className="custom-content-1">
                  <div style={{
                    fontWeight: "600",
                    borderBottom: "1px solid #ddd",
                    paddingBottom:"10px"
                  }}>
                    {ReactHtmlParser(data.descriptionBot)}
                  </div>
                  <a className="btnPhone-Custom" href="tel:1900545426" style={{paddingTop: "10px"}}>
                    {data.contact_1}
                  </a>
                  <a className="btnPhone-Custom" href="tel:+8437674050" style={{paddingTop: "0px"}}>
                    {data.contact_2}
                  </a>
                </div>
              ) : null }
            </div>
            <div
              className={data.isForm || data.isForm === 1 ? 'd-none' : 'col-lg-5'}
              style={{textAlign:"center"}}
            >
              {(data.urlImage !== null & data.urlImage !== undefined ) ? (
                <a className={`item`} href={data.url_image} style={{}}>
                  <img
                    className="lazyload"
                    data-src={
                      data.urlImage === null || data.urlImage === undefined 
                        ? `/images/imgdefault.jpg`
                        : `${process.env.DOMAIN}${data.urlImage}`
                    }
                    alt="images"
                  />
                </a>
              ) : (
                <a className={`item`} href={data.url_image} style={{}}>
                  <img
                    className="lazyload"
                    data-src={`/images/09.jpg`}
                    alt="images"
                  />
                </a>
              )}



              {/* <div className="widget widget-tuvan">
                <form onSubmit={onSend} autoComplete="on" className="form-tuvan">
                  {map(formdata, (item, index) => {
                    if (item.type === 'header') {
                      return (
                        <React.Fragment key={index}>
                          <div className="max600 entry-head text-center">
                            {ReactHtmlParser(item.label)}
                          </div>
                        </React.Fragment>
                      );
                    }
                    if (item.type === 'paragraph') {
                      return (
                        <p className={item.className} key={index}>
                          {ReactHtmlParser(item.label)}
                        </p>
                      );
                    }
                    if (item.type === 'radio-group') {
                      return (
                        <div className="mb-30 text-center" key={index}>
                          {map(item.values, (items, key) => (
                            <label className="radio" key={key} style={{ marginLeft: '20px' }}>
                              <input
                                type="radio"
                                name={item.name}
                                value={items.value}
                                required={item.required}
                                onChange={e => handleChange(e)}
                              />
                              <span></span>
                              {items.label}
                            </label>
                          ))}
                        </div>
                      );
                    }
                    if (item.type === 'text') {
                      return (
                        <React.Fragment key={index}>
                          <div className="col-12">
                            {item.label && <label>{item.label}</label>}
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
                        <React.Fragment key={index}>
                          <div className="col-12">
                            {item.label && <label>{item.label}</label>}
                            <input
                              className="input"
                              type={item.subtype}
                              required={item.required}
                              name={item.name}
                              rows={item.rows}
                              placeholder={item.placeholder}
                              onBlur={e => handleChange(e)}
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
                            <div style={{ position: 'relative' }}>
                              <button className="btn" type={item.subtype}>
                                {item.label}
                              </button>
                              {isLoading && (
                                <ReactLoading
                                  style={{
                                    width: '20px',
                                    height: '20px',
                                    position: 'absolute',
                                    left: '82%',
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
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <PopupThankyou modal={modal} setModal={() => setModal(false)} />
    </React.Fragment>
  );
}

MenuIntro.propTypes = propTypes;

export default MenuIntro;
