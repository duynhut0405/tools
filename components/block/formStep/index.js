import React, { useState, useEffect } from 'react';
import find from 'lodash/find';
import Step from './Step';
import FormWapper from './FormWapper';
import { sendMailService } from '../../../services/form';
import map from 'lodash/map';
import Proptypes from 'prop-types';

const propTypes = {
  data: Proptypes.object,
  pageId: Proptypes.number,
  id: Proptypes.number
};

function FormStep({ data, pageId, id }) {
  const [formActive, setFormActive] = useState(1);
  const [formSate, setFormState] = useState({ content: [], email: '', idForm: '', idPage: null });

  const convertContent = value => {
    let result = '';
    map(value, item => {
      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          result += `<p>${item[key]}</p>`;
        }
      }
    });
    return result;
  };

  useEffect(() => {
    if (data.form !== null && formActive > data.form.length) {
      const email = find(formSate.content, value => value).email;
      const idForm = find(data.form, value => value).value;
      const body = {
        content: JSON.stringify(formSate.content),
        contentMail: convertContent(formSate.content),
        email: email,
        idForm: idForm,
        idPage: pageId
      };
      sendMailService(body);
    }
  }, [formActive]);
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
    <section className={`form-step-wapper ${padding} formStep`} id={id}>
      <div className="container">
        <div className="text-center">
          <h1>{data.name}</h1>
          <p className="desc max750">{data.description}</p>
        </div>
      </div>
      {data.form !== null && (
        <React.Fragment>
          <Step
            data={[
              ...data.form,
              { type: 'result', label: 'Hoàn tất đăng ký trực tuyến', value: null }
            ]}
            formActive={formActive}
          />
          <FormWapper
            padding={padding}
            data={[
              ...data.form,
              { type: 'result', label: 'Hoàn tất đăng ký trực tuyến', value: null }
            ]}
            formActive={formActive}
            setFormActive={(value, formdata) => {
              setFormActive(value);
              setFormState(() => ({
                ...formSate,
                content: [...formSate.content, formdata]
              }));
            }}
          />
        </React.Fragment>
      )}
    </section>
  );
}

FormStep.propTypes = propTypes;

export default FormStep;
