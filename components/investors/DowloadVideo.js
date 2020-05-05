import React, { useEffect, useState } from 'react';
import { DowloadVideo } from '../common/download';
import { getRegulationListYear } from '../../services/regulation';
import moment from 'moment';
import Proptypes from 'prop-types';

const propTypes = {
  listRegulation: Proptypes.array,
  seachRegulation: Proptypes.func,
  padding: Proptypes.string
};

const seachRegulation = async (datatype, page, year, setData) => {
  const res = await getRegulationListYear(datatype, 0, 10, page, year);
  if (res && res !== undefined && res.status === 200) {
    setData(res.data);
  }
};

function DowloadVideos({ padding }) {
  const date = new Date();
  const [listRegulation, setListRegulation] = useState({});
  const [datatype] = useState(2);
  const [page] = useState(1);
  const [year] = useState(moment(date).format('YYYY'));

  useEffect(() => {
    seachRegulation(datatype, page, year, setListRegulation);
  }, [seachRegulation]);
  return (
    <section className={`${padding} investors sec-tb`}>
      <div className="container">
        <div className="entry-head">
          <h2 className="ht efch-1 ef-img-l">Họp cổ đông</h2>
          <a className="viewall" href="/page/nha-dau-tu/dai-hoi-co-dong">
            Xem tất cả <i className="icon-arrow-1"></i>
          </a>
        </div>
        <div>
          {listRegulation.investors && listRegulation.investors.length > 0 && (
            <DowloadVideo data={listRegulation.investors} year={year} isChecked fileIcon />
          )}
        </div>
      </div>
    </section>
  );
}

DowloadVideos.propTypes = propTypes;

export default DowloadVideos;
