import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import { getFormbuilderByIdService } from '../../services/form';
import { map } from 'lodash';
import ReactHtmlParser from 'react-html-parser';

const propTypes = {
  data: Proptypes.array.isRequired,
  getPageBlock: Proptypes.func
};

function MenuIntro({ data }) {
  const [listdata, setData] = useState([{}]);
  const [formdata, setFormData] = useState({});
  const getFormByID = async () => {
    const res = await getFormbuilderByIdService(Number(listdata[0].formdata));
    if (res && res.status === 200) {
      setFormData(res.data);
    }
  };

  useEffect(() => {
    setData(data);
    if (listdata[0].formdata !== undefined) {
      getFormByID();
    }
  }, [data, listdata[0].formdata]);
  return (
    <div>
      <section className=" sec-menu">
        <div className="container">
          <ul>
            {map(listdata, (values, index) => (
              <li className={index === 0 ? 'active' : null} key={index}>
                <a href="#">{values.tabtitle}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className=" sec-tb sec-ab-1">
        <div className="container">
          <div className="row list-item ">
            <div className="col-lg-8">
              <div className="boxwidget">
                <h2 className="widget-title">{listdata[0].tabtitle}</h2>
                <p>{listdata[0].content}</p>
              </div>
              <div className="boxwidget-2">
                <p>{listdata[0].contact}</p>
              </div>
            </div>
            <div className="col-lg-4 sidebar">
              <div className="widget widget-tuvan">
                <div>{ReactHtmlParser(formdata.embedded)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

MenuIntro.propTypes = propTypes;

export default MenuIntro;
