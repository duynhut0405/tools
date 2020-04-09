import React, { useState, useEffect } from 'react';
import { map, slice } from 'lodash';
import Question from './Item';
import Proptypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { withTranslation } from '../../../i18n';

const propTypes = {
  data: Proptypes.array,
  id: Proptypes.number
};

function Questions({ data, id }) {
  const [page, setPage] = useState(4);
  const [active, setActive] = useState(false);
  const list = slice(data, 0, page);
  const { t } = useTranslation();

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

  let padding = '';
  if (data[0].ptionWidth === '2') {
    padding = 'sec-tb';
  } else if (data[0].optionWidth === '3') {
    padding = 'sec-t';
  } else if (data[0].optionWidth === '4') {
    padding = 'sec-b';
  } else {
    padding = 'sec-';
  }

  if (data && data.length > 0) {
    return (
      <section className={`${padding} sec-cauhoi`} id={id}>
        <div className="container">
          <div className="entry-head text-center block-question-index">
            {data.title !== undefined && <h2 className="ht ">{data.title || ''}</h2>}
          </div>
          <div className="accodion accodion-1 accodion-1-2">
            {map(list, (item, index) => (
              <Question key={index} answer={item.answer} question={item.question} />
            ))}
          </div>
          {data.length > 4 && (
            <div className="text-center">
              <button className="btn lg" onClick={() => show()}>
                {active === false ? t('view_more') : t('collapse')}
              </button>
            </div>
          )}
        </div>
      </section>
    );
  }
  return null;
}

Questions.propTypes = propTypes;

export default withTranslation('common')(Questions);
