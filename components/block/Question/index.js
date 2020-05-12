import React, { useState, useEffect } from 'react';
import { map, isEmpty } from 'lodash';
import Question from './Item';
import Proptypes from 'prop-types';
import t from '../../../translation';
import { findAllNewsByCategory } from '../../../services/news';
import Pagination from '../../common/Pagination';

const propTypes = {
  data: Proptypes.object,
  id: Proptypes.number
};

function Questions({ data, id }) {
  const [page, setPage] = useState(1);
  const [active, setActive] = useState(false);
  const [newsAnswer, setNewsAnswer] = useState({});

  const list = data.listBlock;

  const show = () => {
    setActive(!active);
  };

  const getNewsByCategories = async (value, page, number) => {
    const res = await findAllNewsByCategory(value, page, number);
    if (res && res.status === 200) {
      setNewsAnswer(res.data);
    }
  };

  let padding = '';
  if (data.listBlock[0].optionWidth === '2') {
    padding = 'sec-tb';
  } else if (data.listBlock[0].optionWidth === '3') {
    padding = 'sec-t';
  } else if (data.listBlock[0].optionWidth === '4') {
    padding = 'sec-b';
  } else {
    padding = 'sec-';
  }

  useEffect(() => {
    if (Number(data.optionChoose) === 2) {
      getNewsByCategories(data.listBlock[0].category.value, page, 5);
    }
  }, [page]);

  if (data.listBlock && data.listBlock.length > 0) {
    return (
      <React.Fragment>
        <section className={`${padding} sec-cauhoi question`} id={id}>
          <div className="container">
            <div className="entry-head text-center block-question-index">
              {data.listBlock && data.listBlock[0].title !== undefined && (
                <h2 className="ht ">{data.listBlock[0].title || ''}</h2>
              )}
            </div>
            <div className="accodion accodion-1 accodion-1-2">
              {Number(data.optionChoose) === 1 &&
                map(list, (item, index) => (
                  <Question
                    key={index}
                    index={index}
                    answer={item.answer}
                    question={item.question}
                    allactive={active}
                  />
                ))}
              {Number(data.optionChoose) === 2 &&
                map(newsAnswer.news, (item, index) => (
                  <Question
                    key={index}
                    index={`1-${index}`}
                    answer={item.description}
                    question={item.title}
                    allactive={active}
                  />
                ))}
            </div>
            {data.listBlock.length > 4 && (
              <div className="text-center">
                <button className="btn lg" onClick={() => show()}>
                  {active === false ? t('view_more') : t('collapse')}
                </button>
              </div>
            )}
          </div>
        </section>
        {!isEmpty(newsAnswer) && (
          <Pagination setPage={setPage} page={page} size={newsAnswer.size} />
        )}
      </React.Fragment>
    );
  }
  return null;
}

Questions.propTypes = propTypes;

export default Questions;
