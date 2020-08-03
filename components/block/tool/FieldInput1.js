import React from 'react';
import { rate } from '../../../utils/currency';
import Proptypes from 'prop-types';
import ReactNumeric from 'react-numeric';
import t from '../../../translation';

const propTypes = {
  label: Proptypes.string,
  maxValue: Proptypes.number,
  minValue: Proptypes.number,
  value: Proptypes.string,
  onChange: Proptypes.func,
  note: Proptypes.bool,
  onBlur: Proptypes.func,
  placeholder: Proptypes.string
};

function FieldInput({ label, maxValue, minValue, value, onChange, note, onBlur, placeholder }) {
  return (
    <div className="row">
      <div className="col-md-7">
        <h5 className="title">
          {label}
          <br /> <span className="note">{note ? `(${t('month')})` : '(VNĐ)'} </span>
        </h5>
      </div>

      <div className="col-md-5">
        <div>
          <ReactNumeric
            type="tel"
            className="input"
            value={value}
            minimumValue="0"
            decimalPlaces={0}
            onChange={event => onChange(event.target.value)}
            onBlur={onBlur}
            placeholder={placeholder}
          />
        </div>
        {maxValue && <div className="price">{rate(maxValue)}</div>}
        {minValue && <div className="price">{rate(minValue)}</div>}
      </div>
    </div>
  );
}

FieldInput.propTypes = propTypes;

export default FieldInput;
