import React, { useEffect, useState } from 'react';
import { map } from 'lodash';
import { getRegulationListYear } from '../../services/regulation';

function Financial() {
  const [list, setList] = useState([]);

  const getList = () => {
    getRegulationListYear(1, 0, 10, 0, 0).then(res => {
      if (res.data !== undefined && res.data !== null && res.status === 200) {
        setList(res.data);
      }
    });
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <section className="sec-tb">
      {list.length > 0 && (
        <div className="container">
          <div className="entry-head">
            <h2 className="ht efch-1 ef-img-l">Báo cáo tài chính</h2>
            <a className="viewall" href="//page/nha-dau-tu/bao-cao-tai-chinh">
              Xem tất cả <i className="icon-arrow-1"></i>
            </a>
          </div>
          <div className="row grid-space-60">
            {map(
              list.sort((a, b) => a.year - b.year),
              items => {
                return (
                  <div className="col-md-6" key={items.year}>
                    <ul className="list-download">
                      {map(items.investors, item => (
                        <li key={item.id}>
                          <span className="title">
                            <i className="icon-t14"></i> {item.name}
                          </span>
                          <span className="down">
                            <a href={item.urlFile} download>
                              <i className="icon-arrow-6 ib"></i>
                            </a>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Financial;
