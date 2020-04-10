import React from 'react';
import { withTranslation } from '../../i18n';
import Proptypes from 'prop-types';

const propTypes = {
  changeDate: Proptypes.func,
  onSubmit: Proptypes.func,
  t: Proptypes.func
};

function Search({ t, changeDate, onSubmit }) {
  return (
    <div className="search tigia mb-30 max950">
      <h3 className="ctext mg-0">{t('table_rate.search')}</h3>
      <input type="date" className="input cl5" onChange={changeDate} />
      <button className="btn lg" onClick={onSubmit}>
        {t('table_rate.submit')}
      </button>
    </div>
  );
}

Search.propTypes = propTypes;

export default withTranslation('common')(Search);
