import { DatePicker } from 'antd';
import Axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import React, { Fragment, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

function FormAdmin({ data }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();
  const router = useRouter();
  const [form, setForm] = useState();
  const [elements, setElements] = useState();

  useEffect(() => {
    if (!router?.query?.id) return;
    async function getData() {
      const { data } = await Axios.get(
        'https://acb-backend-api.mangoads.com.vn/api/front/v1/form-builder/' + router?.query?.id,
        {
          headers: {
            Authorization: 'OIz5jGFkF2QF6p5GvfhtgtgKSQvvHoAZ',
            'X-CHANNEL': 'sctv9'
          }
        }
      );

      const el = await Axios.get(
        'https://acb-backend-api.mangoads.com.vn/api/front/v1/form-builder/' +
          router?.query?.id +
          '/elements',
        {
          headers: {
            Authorization: 'OIz5jGFkF2QF6p5GvfhtgtgKSQvvHoAZ',
            'X-CHANNEL': 'sctv9'
          }
        }
      );
      setForm(data.data.jsonschemaform.jsonschema.properties);
      setElements(el.data);
    }

    getData();
  }, [router?.query?.id]);

  const onSubmit = async data => {
    await Axios.post(
      `https://acb-backend-api.mangoads.com.vn/api/front/v1/form-builder/${router?.query?.id}/embedded`,
      data,
      {
        headers: {
          Authorization: 'OIz5jGFkF2QF6p5GvfhtgtgKSQvvHoAZ',
          'X-CHANNEL': 'sctv9'
        }
      }
    );
  };

  const _renderWidget = ({ type, id, field }) => {
    if (type === 'shortAnswer' || type === 'numberInput') {
      return (
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          {...register(id)}
        />
      );
    }

    if (type === 'date') {
      return (
        <Controller
          name={id}
          control={control}
          defaultValue={new Date()}
          render={({ field: { onChange, value } }) => {
            return <DatePicker selected={value} onChange={onChange} />;
          }}
        />
      );
    }

    if (type === 'radio') {
      return (
        <>
          {field.choices?.map(item => {
            return (
              <div className="mt-4 space-y-4">
                <div className="flex items-start justify-start">
                  <input
                    key={item.value}
                    id={item.key}
                    value={item.value}
                    name={id}
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    {...register(id)}
                  />
                  <label
                    htmlFor="push-everything"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    {item.key}
                  </label>
                </div>
              </div>
            );
          })}
        </>
      );
    }

    if (type === 'select') {
      return (
        <>
          <select
            id="country"
            name="country"
            autoComplete="country-name"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            {...register(id)}
          >
            {field.choices?.map(item => (
              <option>{item.key}</option>
            ))}
          </select>
        </>
      );
    }
  };

  const _renderField = field => {
    const id = elements[field.title];
    return (
      <>
        <div className="col-span-6 sm:col-span-6">
          <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {field.title}
          </label>
          {_renderWidget({ type: field.widget, id, field })}
        </div>
        {errors[id] && touched[id] && errors[id]}
      </>
    );
  };

  return form && elements ? (
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-6 gap-6">
                {Object.keys(form).map(item => {
                  return _renderField(form[item]);
                })}
              </div>

              <button
                type="submit"
                className="mt-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  ) : (
    <></>
  );
}

export default FormAdmin;
