import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import { getFormbuilderByIdService } from '../../services/form';
import { map } from 'lodash';
import ReactHtmlParser from 'react-html-parser';
import { Input, Label } from 'reactstrap';
import { sendMailService } from '../../services/form';

const propTypes = {
  data: Proptypes.object.isRequired,
  pageId: Proptypes.number,
  getPageBlock: Proptypes.func
};

function Form({ data, pageId }) {
  const [formdata, setFormData] = useState([]);
  const [formState, setFormState] = useState({});
  const getFormByID = async () => {
    const res = await getFormbuilderByIdService(data.formdata);
    if (res && res.status === 200) {
      setFormData(JSON.parse(res.data.list));
    }
  };

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

  const onSend = event => {
    event.preventDefault();
    const dataSend = {
      content: JSON.stringify(formState),
      email: formState.email,
      idForm: data.formdata,
      idPage: pageId
    };

    sendMailService(dataSend);
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

  return (
    <section className={`${padding} sec-tuvan`}>
      <div className="container">
        <form onSubmit={onSend} autoComplete="on" className="row">
          {map(formdata, (item, index) => {
            if (item.type === 'header') {
              return (
                <React.Fragment>
                  <div className={`col-12`}>
                    <h2 className={`text-center ${item.className}`}>
                      {ReactHtmlParser(item.label)}
                    </h2>
                  </div>
                </React.Fragment>
              );
            }
            if (item.type === 'paragraph') {
              return (
                <div className={`col-12`}>
                  <div className={`form-desc ${item.className}`} key={index}>
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
                    <Input
                      className="input"
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
                <React.Fragment>
                  <div className={`col-12 ${item.className}`}>
                    {item.label && <Label>{item.label}</Label>}
                    <Input
                      className="input"
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
            if (item.type === 'button') {
              return (
                <React.Fragment>
                  <div className={`col-12 text-center `}>
                    <button className={`btn`} type={item.subtype}>
                      {item.label}
                    </button>
                  </div>
                </React.Fragment>
              );
            }

            return null;
          })}
        </form>
      </div>
      {data.image && (
        <img
          className=" br  loaded"
          data-lazy-type="image"
          alt=""
          src={`${process.env.DOMAIN}${data.urlImage}`}
        ></img>
      )}
    </section>
  );
}

Form.propTypes = propTypes;

export default Form;
