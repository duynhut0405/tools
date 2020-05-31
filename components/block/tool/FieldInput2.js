import React from 'react';
import { rate } from '../../../utils/currency';
import Proptypes from 'prop-types';
import ReactNumeric from 'react-numeric';
import t from '../../../translation';

import { Input } from 'reactstrap';

const propTypes = {
  label: Proptypes.string,
  maxValue: Proptypes.number,
  value: Proptypes.string,
  onChange: Proptypes.func,
  note: Proptypes.bool,
  onBlur: Proptypes.func,
  type: Proptypes.string
};

function FieldInput2({ label, value, onChange, onBlur, type }) {
  const FormatNumber = number => {
    if (number === null) {
      return '';
    }
    return new Intl.NumberFormat().format(number);
  };
  return (
    <div className="row">
      <label className="col-md-7">
        <h5 className="title">{label}</h5>
      </label>

      <div className="col-md-5">
        <div>
          {type === 'tel' && (
            <input
              className="input"
              placeholder={label}
              name="from"
              value={FormatNumber(value)}
              required={true}
              onChange={e => {
                onChange(Number(e.target.value.replace(/[^0-9.-]+/g, '')));
              }}
            />
          )}
          {type === 'text' && (
            <Input
              placeholder={label}
              className="custom-tool"
              value={value}
              onChange={event => onChange(event.target.value)}
              required={true}
            />
          )}
        </div>
      </div>
    </div>
  );
}

FieldInput2.propTypes = propTypes;

export default FieldInput2;
