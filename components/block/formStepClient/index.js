import React, { useState, useEffect } from 'react';
// import find from 'lodash/find';
import Step from './Step';
// import FormWapper from './FormWapper';
// import { sendMailService } from '../../../services/form';
// import map from 'lodash/map';
import StepForm01 from './StepForm01';
import StepForm02 from './StepForm02';
import StepForm03 from './StepForm03';
import Proptypes from 'prop-types';
import { getProvinceService } from '../../../services/map';
import { getItemForm } from '../../../services/common';
import { useRouter } from 'next/router';

const propTypes = {
  data: Proptypes.object,
  pageId: Proptypes.number,
  id: Proptypes.number
};

function FormStep({ data, id, pageId }) {
  const [formActive, setFormActive] = useState(1);
  const router = useRouter();
  const isUpdate = router.query.link ? true : false;
  // console.log(router.query.link);
  const [formState, setFormState] = useState({
    full_name: '',
    profileType: 'Chứng minh nhân dân',
    // profileNumber: '',
    nuComponion: [],
    collateral: [
      {
        id: 0,
        decription: '',
        estimate: '',
        relaValue: ''
      }
    ],
    partner_pay_type: false,
    dif_payee_type: false,
    partner_pay: 0,
    salary: 0,
    dif_payee: 0
  });
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    getProvinceService()
      .then(res => {
        return res.data.map(value => {
          return { label: value.name, value: value };
        });
      })
      .then(res => {
        setProvinces(res);
      })
      .catch(error => {});
    if (isUpdate) {
      getItemForm(
        window.location.href
        // 'http://localhost:8080/page/trang-test-new?link=2341234123/0'
        // 'https://mbbank6.mangoads.com.vn/page/trang-test-new/?link=1231231231/2020-08-06T02:06:06+07:00'
        // 'https://mbbank6.mangoads.com.vn/page/trang-test-new?link=1231231231/2020-08-06T02:06:06+07:00'
      )
        .then(res => {
          // console.log(res);
          // console.log(window.location.href);
          if (res.data.content !== '') {
            setFormState(JSON.parse(res.data.content));
          }
          return res;
        })
        .catch(error => {});
    }
  }, []);

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
      <div className="container">
        <div className="text-center" id="form_step_top">
          <h1>{data.name}</h1>
          <p className="desc max750">{data.description}</p>
        </div>
      </div>
      {data.form !== null && (
        <React.Fragment>
          <Step formActive={formActive} setFormActive={setFormActive} />
        </React.Fragment>
      )}
      {formActive === 1 && (
        <StepForm01
          setFormState={setFormState}
          formState={formState}
          nextForm={nextForm}
          provinces={provinces}
          isUpdate={isUpdate}
        />
      )}
      {formActive === 2 && (
        <StepForm02
          nextForm={nextForm}
          formState={formState}
          setFormState={setFormState}
          backFrom={backForm}
          isUpdate={isUpdate}
        />
      )}
      {formActive === 3 && (
        <StepForm03
          backFrom={backForm}
          formState={formState}
          setFormState={setFormState}
          setFormActive
          data={data}
          pageId={pageId}
          isUpdate={isUpdate}
        />
      )}
    </section>
  );
}

FormStep.propTypes = propTypes;

export default FormStep;
