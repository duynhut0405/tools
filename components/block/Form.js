import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import { getFormbuilderByIdService } from '../../services/form';
import ReactHtmlParser from 'react-html-parser';

const propTypes = {
  data: Proptypes.object.isRequired,
  getPageBlock: Proptypes.func
};

function Form({ data }) {
  const [input, setInput] = useState(null);

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
  console.log(input);
  return (
    <section className=" sec-tb sec-tuvan ">
      <div className="container">
        <form action="/action_page.php">
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

Form.propTypes = propTypes;

export default Form;
