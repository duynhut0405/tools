import React, { useState, useEffect } from 'react';
import { map, isEmpty, slice } from 'lodash';
import Question from './Item';
import Proptypes from 'prop-types';
import t from '../../../translation';
import { findAllNewsByCategory } from '../../../services/news';
import Pagination from '../../common/Pagination';
import ReactPaginate from 'react-paginate';

const propTypes = {
  data: Proptypes.object,
  id: Proptypes.number
};

function Questions({ data, id }) {
  //
  const [page, setPage] = useState(1);
  const [newsAnswer, setNewsAnswer] = useState({});

  //const list = data.listBlock;
  const [list, setList] = useState(data.listBlock);
  const [listPagination, setlistPagination] = useState(data.listBlock);

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

  useEffect(() => {
    setlistPagination(slice(list, (page - 1) * 5, (page - 1) * 5 + 5));
  }, [page]);

  const sizeList = Math.ceil(list && list.length / 5);

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
                map(listPagination, (
                  item,
                  index //
                ) => (
                  <Question
                    key={index}
                    index={`1-${index}`}
                    id={index}
                    answer={item.answer}
                    question={item.question}
                  />
                ))}
              {Number(data.optionChoose) === 2 &&
                map(newsAnswer.news, (item, index) => (
                  <Question
                    key={index}
                    index={`2-${index}`}
                    id={index}
                    answer={item.description}
                    question={item.title}
                  />
                ))}
            </div>
          </div>
        </section>
        {!isEmpty(list) && Number(data.optionChoose) === 1 && (
          <div className="page pb-3 sec-b">
            <ReactPaginate
              previousLabel={<i className="icon-arrow-2 ix"></i>}
              nextLabel={<i className="icon-arrow-2"></i>}
              breakLabel={'...'}
              breakLinkClassName="page-numbers"
              pageCount={sizeList || 1}
              containerClassName="page-numbers"
              previousLinkClassName="prev page-numbers"
              nextLinkClassName="next page-numbers"
              pageLinkClassName="page-numbers"
              marginPagesDisplayed={4}
              pageRangeDisplayed={4}
              onPageChange={value => setPage(value.selected + 1)}
              activeLinkClassName="page-numbers current"
            />
          </div>
        )}
        {!isEmpty(newsAnswer) && Number(data.optionChoose) === 2 && (
          <Pagination setPage={setPage} page={page} size={newsAnswer.size} />
        )}
      </React.Fragment>
    );
  }
  return null;
}

Questions.propTypes = propTypes;

export default Questions;
