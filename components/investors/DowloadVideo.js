import React, { useEffect, useState } from 'react';
import { map } from 'lodash';
import { DowloadVideo } from '../common/download';
import { getRegulationListYear } from '../../services/regulation';
import moment from 'moment';
import Proptypes from 'prop-types';

const propTypes = {
  listRegulation: Proptypes.array.isRequired,
  seachRegulation: Proptypes.func.isRequired
};

const seachRegulation = async (datatype, page, year, setData) => {
  const res = await getRegulationListYear(datatype, 0, 10, page, year);
  if (res && res !== undefined && res.status === 200) {
    setData(res.data);
  }
};

function DowloadVideos() {
  const date = new Date();
  const [listRegulation, setListRegulation] = useState([]);
  const [datatype] = useState(2);
  const [page] = useState(1);
  const [year] = useState(moment(date).format('YYYY'));

  useEffect(() => {
    seachRegulation(datatype, page, year, setListRegulation);
  }, [seachRegulation]);

  return (
    <section className="sec-tb ">
      <div className="container sec-tb">
        <div className="entry-head">
          <h2 className="ht efch-1 ef-img-l">Họp cổ đông</h2>
          <a className="viewall" href="/page/nha-dau-tu/dai-hoi-co-dong">
            Xem tất cả <i className="icon-arrow-1"></i>
          </a>
        </div>
        {map(listRegulation, item => {
          if (item.investors.length > 0) {
            return (
              <div key={item.year}>
                <DowloadVideo data={item.investors} year={item.year} isChecked />
              </div>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
}

DowloadVideos.propTypes = propTypes;

export default DowloadVideos;
