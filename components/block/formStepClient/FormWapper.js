import React from 'react';
import map from 'lodash/map';
import FormItem from './FormItem';
import Proptypes from 'prop-types';

const propTypes = {
  data: Proptypes.array,
  formActive: Proptypes.number,
  setFormActive: Proptypes.func,
  padding: Proptypes.string,
  onGoBack: Proptypes.func
};

function FormWapper({ data, formActive, setFormActive, padding, onGoBack }) {
  return (
    <section className={padding}>
      <div className="container">
        <div className="max750">
          {map(data, (form, index) => {
            return (
              <FormItem
                data={form}
                step={index + 1}
                totalStep={data.length}
                key={index}
                formActive={formActive}
                onNext={(value, formdata) => setFormActive(value, formdata)}
                onGoBack={() => onGoBack(data.length)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

FormWapper.propTypes = propTypes;

export default FormWapper;
