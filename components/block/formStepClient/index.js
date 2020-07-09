import React, { useState } from 'react';
// import find from 'lodash/find';
import Step from './Step';
// import FormWapper from './FormWapper';
// import { sendMailService } from '../../../services/form';
// import map from 'lodash/map';
import StepForm01 from './StepForm01';
import StepForm02 from './StepForm02';
import StepForm03 from './StepForm03';
import Proptypes from 'prop-types';

const propTypes = {
  data: Proptypes.object,
  pageId: Proptypes.number,
  id: Proptypes.number
};

function FormStep({ data, id }) {
  const [formActive, setFormActive] = useState(1);
  const [formState, setFormState] = useState({ nuComponion: [], collateral: [] });
  data = {
    ...data,
    form: [
      { value: 223002, label: 'Thông tin dịch vụ' },
      { value: 73602, label: 'Form Menu Intro' }
    ]
  };

  const nextForm = () => {
    if (formActive < 3) {
      setFormActive(formActive + 1);
    }
  };

  const backForm = () => {
    if (formActive > 1) {
      setFormActive(formActive - 1);
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

  return (
    <section className={`form-step-wapper ${padding} formStep`} id={id}>
      {console.log(formState)}
      <div className="container">
        <div className="text-center" id="form_step_top">
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
        </React.Fragment>
      )}
      {formActive === 1 && (
        <StepForm01 setFormState={setFormState} formState={formState} nextForm={nextForm} />
      )}
      {formActive === 2 && (
        <StepForm02
          nextForm={nextForm}
          formState={formState}
          setFormState={setFormState}
          backFrom={backForm}
        />
      )}
      {formActive === 3 && <StepForm03 backFrom={backForm} formState={formState} />}
    </section>
  );
}

FormStep.propTypes = propTypes;

export default FormStep;
