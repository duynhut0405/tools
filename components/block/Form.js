import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import { getFormbuilderByIdService } from '../../services/form';
import { map } from 'lodash';
import ReactHtmlParser from 'react-html-parser';
import { Button, FormGroup, Input } from 'reactstrap';

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
    setFormState(formState => ({
      ...formState,
      [event.target.name]: event.target.value
    }));
  };

  console.log(formState);
  return (
    <section className="sec-tb">
      <div className="container">
        <div className="max750">
          {map(formdata, (item, index) => {
            if (item.type === 'header') {
              return (
                <React.Fragment>
                  <div className="max600 entry-head text-center">{ReactHtmlParser(item.label)}</div>
                </React.Fragment>
              );
            }
            if (item.type === 'paragraph') {
              return <p className={item.className}>{ReactHtmlParser(item.label)}</p>;
            }
            if (item.type === 'radio-group') {
              return (
                <div className="mb-30 text-center">
                  {map(item.values, (items, key) => (
                    <label className="radio" key={key} style={{ marginLeft: '20px' }}>
                      <input type="radio" name="check1" />
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
                    <label className="block">
                      <span className="title">{item.label}</span>
                      <Input
                        className="input"
                        name={item.name}
                        type="text"
                        placeholder={item.placeholder}
                        style={{ width: '100%' }}
                        onChange={e => handleChange(e)}
                      />
                    </label>
                  </div>
                </React.Fragment>
              );
            }
            if (item.type === 'textarea') {
              return (
                <React.Fragment>
                  <div className="col-12">
                    <label className="block">
                      <span className="title">
                        {item.label}(<span className="require">*</span>)
                      </span>
                      <textarea className="input"></textarea>
                    </label>
                  </div>
                </React.Fragment>
              );
            }
            if (item.type === 'button') {
              return (
                <React.Fragment>
                  <div className="col-12 text-center">
                    <button className="btn">{item.label}</button>
                  </div>
                </React.Fragment>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}

Form.propTypes = propTypes;

export default Form;
