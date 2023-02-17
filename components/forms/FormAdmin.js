import Axios from 'axios';
import React, { Fragment, useEffect } from 'react';

function FormAdmin({ data }) {
  useEffect(() => {
    async function getData() {
      const data = await Axios.get(
        'https://acb-backend-api.mangoads.com.vn/api/front/v1/form-builder/71',
        {
          headers: {
            Authorization: 'OIz5jGFkF2QF6p5GvfhtgtgKSQvvHoAZ',
            'X-CHANNEL': 'sctv9'
          }
        }
      );
    }

    getData();
  }, []);

  const submitContact = async event => {
    event.preventDefault();
    console.log('🚀 ~ file: FormAdmin.js:24 ~ submitContact ~ data', event.target);
    // let data = {};

    // await Axios.get(
    //   'https://acb-backend-api.mangoads.com.vn/api/front/v1/form-builder/71/embedded',
    //   { data },
    //   {
    //     headers: {
    //       Authorization: 'OIz5jGFkF2QF6p5GvfhtgtgKSQvvHoAZ',
    //       'X-CHANNEL': 'sctv9'
    //     }
    //   }
    // );
  };
  return (
    <Fragment>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Thông tin liên hệ</h3>
              <p className="mt-1 text-sm text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <Formik
              initialValues={{ email: '', password: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && errors.password}
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default FormAdmin;
