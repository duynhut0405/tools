import React from 'react';
import { withTranslation } from '../../i18n';
import Proptypes from 'prop-types';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const propTypes = {
  changeDate: Proptypes.func,
  onSubmit: Proptypes.func,
  t: Proptypes.func
};

function Search({ t, changeDate, onSubmit, date }) {//
  return (
    <div className="search tigia mb-30 max950">
      <h3 className="ctext mg-0">{t('table_rate.search')}</h3>
      <DatePicker selected={date} onChange={changeDate}></DatePicker>
      <button className="btn lg" onClick={onSubmit}>
        {t('table_rate.submit')}
      </button>
    </div>
  );
}

Search.propTypes = propTypes;

export default withTranslation('common')(Search);
