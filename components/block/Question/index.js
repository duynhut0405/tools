import React, { useState, useEffect } from 'react';
import { map, isEmpty, slice } from 'lodash';
import Question from './Item';
import Question2 from './Item2';
import Question3 from './Item3';
import Proptypes from 'prop-types';
import t from '../../../translation';
import { findAllNewsByCategory } from '../../../services/news';
import Pagination from '../../common/Pagination';
import ReactPaginate from 'react-paginate';

import ReactHtmlParser from 'react-html-parser';


const propTypes = {
  question: Proptypes.string,
  answer: Proptypes.string,
  index: Proptypes.number,
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
  if (data?.listBlock[0]?.optionWidth === '2') {
    padding = 'sec-tb';
  } else if (data?.listBlock[0]?.optionWidth === '3') {
    padding = 'sec-t';
  } else if (data?.listBlock[0]?.optionWidth === '4') {
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
  const [active, setAcive] = useState(false);
  const [active_title, setAciveTitle] = useState(true);
  

  if (data.listBlock && data.listBlock.length > 0) {
    
    return (
      <React.Fragment>
        <section className={`${padding} sec-cauhoi question`} id={id} style={{paddingBottom: data.optionChoose == 5 ? "50px" : "0px"}}>
          <div className="container">
            {(((Number(data.optionChoose) === 1) || (Number(data.optionChoose) === 2)) && (data.listBlock[0].title !== '')) &&
              <div className="entry-head text-center block-question-index">
               {data.listBlock && data.listBlock[0].title !== undefined && (
                 <h2 className="ht ">{data.listBlock[0].title || ''}</h2>
               )}
              </div>
            }

                  {Number(data.optionChoose) === 5 &&
                  map(listPagination, (
                    item,
                    index //
                  ) => (
                    <Question3
                      key={index}
                      index={`1-${index}`}
                      id={index}
                      answer={item.answer}
                      question={item.question}
                    />
                  ))}
            
            {(Number(data.optionChoose) === 3)    && 
              <div className="accodion-tab">
                <input
                  id={`checkbox_${id}`}
                  type="checkbox"
                  checked={active_title}
                  onClick={() => setAciveTitle(!active_title)}
                />
                <label htmlFor={`checkbox_${id}`} className="entry-head text-center block-question-index"
                >
                  {data.listBlock && data.listBlock[0].title !== undefined && (
                    <h2 className="ht ">{data.listBlock[0].title || ''}</h2>
                  )}
                  <span className="triangle">
                    <i className="icon-plus"></i>
                  </span>
                </label>
                
              <div className="accodion-content entry-content">
                <div className="inner">
                  <div className="accodion accodion-1 accodion-1-3">
                  {(data.listBlock[0].optionFullWidth === '0') &&
                <div className="inner-full">
                  <div className="accodion accodion-1 accodion-1-3">
                  {Number(data.optionChoose) === 3 &&
                    map(listPagination, (
                      item,
                      index //
                    ) => (
                      <Question2
                        key={index}
                        index={`1-${index}`}
                        id={index}
                        answer={item.answer}
                        question={item.question}
                      />
                    ))}
                  </div>
                </div>}
                {(data.listBlock[0].optionFullWidth != '0') &&
                <div className="inner">
                  <div className="accodion accodion-1 accodion-1-3">
                  {Number(data.optionChoose) === 3 &&
                    map(listPagination, (
                      item,
                      index //
                    ) => (
                      <Question2
                        key={index}
                        index={`1-${index}`}
                        id={index}
                        answer={item.answer}
                        question={item.question}
                      />
                    ))}
                  </div>
                </div>}
                  </div>
                </div>
              </div>
             </div>
            }
            {(Number(data.optionChoose) === 4) && 
              <div className="accodion-tab">
                <input
                  id={`checkbox_${id}`}
                  type="checkbox"
                  checked={active_title}
                  onClick={() => setAciveTitle(!active_title)}
                />
                <label htmlFor={`checkbox_${id}`} className="entry-head text-center block-question-index">
                  {data.listBlock && data.listBlock[0].title !== undefined && (
                    <h2 className="ht ">{data.listBlock[0].title || ''}</h2>
                  )}
                  <span className="triangle">
                    <i className="icon-plus"></i>
                  </span>
                </label>
                
              <div className="accodion-content entry-content">
              {(data.listBlock[0].optionFullWidth === '0') &&
                <div className="inner-full">
                  <div className="accodion accodion-1 accodion-1-4">
                  {Number(data.optionChoose) === 4 &&
                    map(listPagination, (
                      item,
                      index //
                    ) => (
                      <Question2
                        key={index}
                        index={`1-${index}`}
                        id={index}
                        answer={item.answer}
                        question={item.question}
                      />
                    ))}
                  </div>
                </div>}
                {(data.listBlock[0].optionFullWidth != '0') &&
                <div className="inner">
                  <div className="accodion accodion-1 accodion-1-4">
                  {Number(data.optionChoose) === 4 &&
                    map(listPagination, (
                      item,
                      index //
                    ) => (
                      <Question2
                        key={index}
                        index={`1-${index}`}
                        id={index}
                        answer={item.answer}
                        question={item.question}
                      />
                    ))}
                  </div>
                </div>}
              </div>
             </div>
            }

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
        </section>
        
      </React.Fragment>
    );
  }
  return null;
}

Questions.propTypes = propTypes;

export default Questions;
