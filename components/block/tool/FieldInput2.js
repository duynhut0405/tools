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
  return (
    <div className="row">
      <div className="col-md-7">
        <h5 className="title">{label}</h5>
      </div>

      <div className="col-md-5">
        <div>
          {type === 'tel' && (
            <ReactNumeric
              type="tel"
              className="input"
              value={value}
              minimumValue="0"
              decimalPlaces={0}
              onChange={event => onChange(event.target.value)}
              onBlur={onBlur}
              // placeholder="Nhập số tiền (*)"
            />
          )}
          {type === 'text' && (
            <Input
              className="custom-tool"
              value={value}
              onChange={event => onChange(event.target.value)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

FieldInput2.propTypes = propTypes;

export default FieldInput2;
