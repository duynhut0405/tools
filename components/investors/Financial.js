import React, { useEffect, useState } from 'react';
import File from '../common/download/File';
import moment from 'moment';
import { getRegulationListYear } from '../../services/regulation';
import PropTypes from 'prop-types';

const propTypes = {
  padding: PropTypes.string
};
function Financial({ padding }) {
  const [list, setList] = useState({});
  const date = new Date();
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
    <section className={`${padding}`}>
      <div className="container">
        <div className="entry-head">
          <h2 className="ht efch-1 ef-img-l">Báo cáo tài chính</h2>
          <a className="viewall" href="/page/nha-dau-tu/bao-cao-tai-chinh">
            Xem tất cả <i className="icon-arrow-1"></i>
          </a>
        </div>
        {list.investors && list.investors.length > 0 && <File data={list.investors} />}
      </div>
    </section>
  );
}

Financial.propTypes = propTypes;

export default Financial;
