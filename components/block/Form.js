import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import { getFormbuilderByIdService } from '../../services/form';
import { map } from 'lodash';
import ReactHtmlParser from 'react-html-parser';
import { Input, Label, CustomInput } from 'reactstrap';
import { sendMailService } from '../../services/form';

const propTypes = {
  data: Proptypes.object.isRequired,
  getPageBlock: Proptypes.func
};

function Form({ data }) {
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
      idForm: data.formdata
    };
    sendMailService(dataSend);
  };
  console.log(formdata)
  return (
    <section className="sec-tb sec-tuvan">
      <div className="container">
        <div className="max750">
          <form onSubmit={onSend} autoComplete="on">
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
                  <div className={item.className} key={index}>
                    {ReactHtmlParser(item.label)}
                  </div>
                );
              }
              if (item.type === 'radio-group') {
                return (
                  <div className="mb-30 text-center">
                    {map(item.values, (items, key) => (
                      <CustomInput
                        type="radio"
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
                  <React.Fragment>
                    <div className="col-12">
                      {item.label && <Label>{item.label}</Label>}
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
                    <div className="col-12">
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
                    <div className="col-12 text-center">
                      <button className="btn" type={item.subtype}>
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
      </div>
      {data.image && (
        <img className=" br loaded loaded" data-lazy-type="image" alt="" src={data.image}></img>
      )}
    </section>
  );
}

Form.propTypes = propTypes;

export default Form;
