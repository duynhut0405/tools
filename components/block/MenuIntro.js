import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import { getFormbuilderByIdService } from '../../services/form';
import ReactHtmlParser from 'react-html-parser';

const propTypes = {
  data: Proptypes.object.isRequired,
  getPageBlock: Proptypes.func
};

function MenuIntro({ data }) {
  const [formdata, setFormData] = useState([]);
  const getFormByID = async () => {
    const res = await getFormbuilderByIdService(data.formdata);
    if (res && res.status === 200) {
      setFormData(res.data.embedded);
    }
  };

  useEffect(() => {
    getFormByID();
  }, []);
  console.log(formdata);
  return (
    <section className=" sec-tb sec-tuvan ">
      <div className="container">
        <form>
          <div>{ReactHtmlParser(formdata)}</div>
        </form>
      </div>
      <img
        className=" br loaded loaded"
        data-lazy-type="image"
        data-lazy-src={data.image}
        alt
        src={data.image}
      ></img>
    </section>
  );
}

MenuIntro.propTypes = propTypes;

export default MenuIntro;
