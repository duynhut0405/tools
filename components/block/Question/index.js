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
    <div className="question">
      <div className="title mb-4">
        <h2>{data[0].title}</h2>
      </div>
      {map(list, (item, index) => (
        <Question key={index} answer={item.answer} question={item.question} />
      ))}
      {data.length > 4 && (
        <div className="btn">
          <button onClick={() => show()}>{active === false ? 'Xem thêm' : 'Thu gọn'}</button>
        </div>
      )}
    </div>
  );
}

Questions.propTypes = propTypes;

export default Questions;
