import React from 'react';
import { rate } from '../../../utils/currency';
import Proptypes from 'prop-types';
import ReactNumeric from 'react-numeric';
// import CurrencyFormat  from 'react-currency-format';

const propTypes = {
  label: Proptypes.string,
  maxValue: Proptypes.number,
  value: Proptypes.string,
  onChange: Proptypes.func,
  note: Proptypes.bool
};

function FieldInput({ label, maxValue, value, onChange, note }) {
  return (
    <div className="row">
      <div className="col-md-7">
        <h5 className="title">
          {label}
          <br /> <span className="note">{note ? '(THÁNG)' : '(VNĐ)'} </span>
        </h5>
      </div>

      <div className="col-md-5">
        <div>
          <ReactNumeric
            type="tel"
            className="input"
            value={value}
            allowDecimalPadding={false}
            onChange={event => onChange(event.target.value)}
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
