import React, { useState, useEffect } from 'react';
import { map } from 'lodash';
import Proptypes from 'prop-types';
import { getPagesByIdService } from '../../services/page';

const propTypes = {
  data: Proptypes.object.isRequired
};

function MiniTabItem({ data }) {
  const [listPage, setListPage] = useState([]);

  const getPageBlock = async () => {
    const ids = map(data.pages, values => values.value);
    const res = await getPagesByIdService(ids);
    if (res && res.status === 200) {
      setListPage(res.data);
    }
  };

  useEffect(() => {
    getPageBlock();
  }, []);

  return (
    <div className="container">
      <div className="list-7  list-item row style-table-menu">
        {map(listPage, item => (
          <div className="col-md-6 style-colum1" key={item.newsId}>
            <a href={`/page/${item.slug}`} className="item item-inline-table">
              <div className="img">
                <img
                  className="lazy-hidden"
                  data-lazy-type="image"
                  src={item.baseImage}
                  alt="icon"
                />
              </div>
              <div className="divtext">
                <h4 className="title line2">{item.name}</h4>
                <div className="desc line4">{item.meta_description}..</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
MiniTabItem.propTypes = propTypes;

export default MiniTabItem;
