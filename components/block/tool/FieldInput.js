import React from 'react';
import { rate } from '../../../utils/currency';
import Proptypes from 'prop-types';
import ReactNumeric from 'react-numeric';
import t from '../../../translation';
// import CurrencyFormat  from 'react-currency-format';

const propTypes = {
  label: Proptypes.string,
  maxValue: Proptypes.number,
  value: Proptypes.string,
  onChange: Proptypes.func,
  note: Proptypes.bool,
  onBlur: Proptypes.func
};

function FieldInput({ label, maxValue, value, onChange, note, onBlur }) {
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
            placeholder="Nhập số tiền (*)"
          />
        </div>
        <div className="price">{rate(maxValue)}</div>
      </div>
    </div>
  );
}

FieldInput.propTypes = propTypes;

export default FieldInput;
