import { map } from 'lodash';
import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Input, Label } from 'reactstrap';
import { sendMailService } from '../../services/form';
import PropTypes from 'prop-types';
import { getFormbuilderByIdService } from '../../services/form';
import ReactLoading from 'react-loading';

const propTypes = {
  data: PropTypes.object,
  getPageBlock: PropTypes.func,
  type: PropTypes.string,
  pageId: PropTypes.func,
  optionWidth: PropTypes.string
};

function MenuIntro({ data, pageId, optionWidth }) {
  const [formdata, setFormData] = useState({});
  const [formState, setFormState] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const getFormByID = async () => {
    const res = await getFormbuilderByIdService(Number(data.formdata));
    if (res && res.status === 200) {
      setFormData(JSON.parse(res.data.list));
    }
  };

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
    getFormByID();
  }, []);

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
      idForm: data.formdata,
      idPage: pageId
    };

    //sendMailService(dataSend);
    const send = await sendMailService(dataSend);
    if (send && send !== undefined && send.status === 200) {
      setIsLoading(false);
      setFormState({});
    } else {
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <section className=" menuIntro sec-menu">
        <div className="container">
          <ul>
            <li className="active">
              <a href="#">{data.title}</a>
            </li>
            {map(data.listBlock, (values, index) => (
              <li key={index}>
                <a href={`#${values.id}`}>{values.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className={`${padding} menuIntro sec-ab-1`}>
        <div className="container">
          <div className="row list-item ">
            <div className="col-lg-8">
              <div className="boxwidget entry-content">
                <h2 className="widget-title">{ReactHtmlParser(data.title)}</h2>
                {ReactHtmlParser(data.descriptionTop)}
              </div>
              <div className="boxwidget-2">
                <div>{ReactHtmlParser(data.descriptionBot)}</div>
                {/* {data.contact_1 !== undefined && (
                  <Row>
                    <Col xs="5">
                      <div className="contact">
                        <h3 className="">{data.contact_1}</h3>
                        <i className="icon-arrow-1"></i>
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="contact">
                        <h3 className="">{data.contact_2}</h3>
                        <i className="icon-arrow-1"></i>
                      </div>
                    </Col>
                  </Row>
               
                )} */}
                <div className="row">
                  <div className="col-md-5">
                    <a className="btnPhone" href="tel:1900545426">
                      {data.contact_1} <i className="icon-arrow-2"></i>{' '}
                    </a>
                  </div>
                  <div className="col-md-7">
                    <a className="btnPhone" href="tel:+8437674050">
                      {data.contact_2} <i className="icon-arrow-2"></i>{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 sidebar">
              <div className="widget widget-tuvan">
                <form onSubmit={onSend} autoComplete="on" className="form-tuvan">
                  {map(formdata, (item, index) => {
                    if (item.type === 'header') {
                      return (
                        <React.Fragment>
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
                        <div className="mb-30 text-center">
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
                        <React.Fragment>
                          <div className="col-12">
                            {item.label && <Label>{item.label}</Label>}
                            <Input
                              className="input"
                              name={item.name}
                              type={item.subtype}
                              required={item.required}
                              placeholder={item.placeholder}
                              onBlur={e => handleChange(e)}
                            />
                          </div>
                        </React.Fragment>
                      );
                    }
                    if (item.type === 'textarea') {
                      return (
                        <React.Fragment>
                          <div className="col-12">
                            {item.label && <Label>{item.label}</Label>}
                            <Input
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
                        <React.Fragment>
                          <div className="col-12 text-center">
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
                        </React.Fragment>
                      );
                    }
                    return null;
                  })}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

MenuIntro.propTypes = propTypes;

export default MenuIntro;
