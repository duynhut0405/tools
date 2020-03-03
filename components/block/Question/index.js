import React, { useState, useEffect } from 'react';
import { map, slice } from 'lodash';
import Question from './Item';
import Proptypes from 'prop-types';

const propTypes = {
  data: Proptypes.array
};

function Questions({ data }) {
  const [page, setPage] = useState(4);
  const [active, setActive] = useState(false);
  const list = slice(data, 0, page);

  useEffect(() => {
    if (list.length === data.length) {
      setActive(true);
    }
  }, [page]);

  const show = () => {
    setActive(false);
    setPage(page + 4);
    if (active) {
      setPage(4);
    }
  };
  return (
    <section className="sec-b sec-cauhoi">
      <div className="container">
        <div className="entry-head text-center block-question-index">
          <h2 className="ht ">{data[0].title || ''}</h2>
        </div>
        <div className="accodion accodion-1">
          {map(list, (item, index) => (
            <Question key={index} answer={item.answer} question={item.question} />
          ))}
        </div>
        {data.length > 4 && (
          <div className="text-center">
            <button className="btn lg" onClick={() => show()}>
              {active === false ? 'Xem thêm' : 'Thu gọn'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

Questions.propTypes = propTypes;

export default Questions;
