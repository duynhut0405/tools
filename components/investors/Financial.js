import React, { useEffect, useState } from 'react';
import File from '../common/download/File';
import moment from 'moment';
import { getRegulationListYear } from '../../services/regulation';
import PropTypes from 'prop-types';
import t from '../../translation';
import { getLang } from '../../utils/cookie';
import { LinkPage } from '../common/link';

const propTypes = {
  padding: PropTypes.string
};
function Financial({ padding }) {
  const [list, setList] = useState({});
  const date = new Date();
  const lang = getLang();
  const getList = () => {
    getRegulationListYear(1, 0, 10, 0, moment(date).format('YYYY')).then(res => {
      if (res && res.data !== null && res.status === 200) {
        setList(res.data);
      }
    });
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <section className={`${padding} investors`}>
      <div className="container">
        <div className="entry-head title-padding">
          <h2 className="ht efch-1 ef-img-l">{t('financial_report')}</h2>
          <LinkPage lang={lang} name="/page/nha-dau-tu/bao-cao-tai-chinh">
            <a className="viewall">
              {t('view')} <i className="icon-arrow-1"></i>
            </a>
          </LinkPage>
        </div>
        {list.investors && list.investors.length > 0 && <File data={list.investors} />}
      </div>
    </section>
  );
}

Financial.propTypes = propTypes;

export default Financial;
