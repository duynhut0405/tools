import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { getStockServices } from '../../services/mb.services';

const getStock = setData => {
  const res = getStockServices();
  if (res && res !== undefined && res.status === 200) {
    setData(res.data);
  }
};

function Stock() {
  const [stock, setStock] = useState({});
  useEffect(() => {
    getStock(setStock);
  }, [getStock]);
  return (
    <div className="col-md-4">
      <div className="widget-ndt">
        <div>
          <a href="./">
            <img height="50" src="/static/images/logo-blue.svg" alt="" />
          </a>
        </div>

        <div className="numbs">
          <span className="t1">
            <i className="icon-t13"></i> 20,900
          </span>
          <span className="t2">
            +100 <br />
            +0.2%
          </span>
        </div>

        <p className="desc">Ngày cập nhật {moment(stock.TradingDate).format('DD/MM/YYYY')}</p>

        <ul className="list">
          <li>
            <span className="t1">Sàn</span>{' '}
            <span className="t2">
              HOSE <span className="t3">(MBB)</span>{' '}
            </span>
          </li>
          <li>
            <span className="t1">KLGD</span>{' '}
            <span className="t2">
              722.680 <span className="t3">(CP)</span>{' '}
            </span>
          </li>
          <li>
            <span className="t1">GTGD</span>{' '}
            <span className="t2">
              33.862,00 <span className="t3">(Triệu VND)</span>{' '}
            </span>
          </li>
          <li>
            <span className="t1">Vốn hoá</span>{' '}
            <span className="t2">
              189.437,05 <span className="t3">(Tỷ VND)</span>{' '}
            </span>
          </li>
          <li>
            <span className="t1">KLCP</span>{' '}
            <span className="t2">
              4.022.018.040 <span className="t3">(CP)</span>{' '}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Stock;
