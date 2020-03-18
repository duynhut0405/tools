import React from 'react';
import RangeSlider from 'react-rangeslider';
import ReactNumeric from 'react-numeric';
import { withTranslation } from '../../../i18n';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.number,
  month: PropTypes.bool,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  title: PropTypes.string,
  oneHandle: PropTypes.func
};

function Fields({ title, value, month, minValue, maxValue, oneHandle }) {
  const { t } = useTranslation();
  return (
    <div className="group-range-prcie">
      <div className="gtitle">
        <span className="title">{title}</span>
        <span className="title2">
          <span className="price">
            <ReactNumeric value={value} decimalPlaces="0" />
          </span>
          {month ? t('month') : 'VNĐ'}
        </span>
      </div>
      <div className="slider-vertical">
        <RangeSlider
          step={month ? 1 : 1000000}
          value={value}
          tooltip={false}
          onChange={data => oneHandle(data)}
          min={minValue}
          max={maxValue}
          readOnly
        />
      </div>
    </div>
  );
}

Fields.propTypes = propTypes;

Fields.defaultProps = {
  maxValue: 100000000,
  minValue: 5000000
};

Fields.getInitialProps = async () => ({
  namespacesRequired: ['common', 'common']
});

export default withTranslation('common')(Fields);