import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import { map, isEmpty } from 'lodash';
import classnames from 'classnames';
import Select from 'react-select';
import { getFullCategoryByIdService } from '../../../services/category';
import { findAllNewsByCategory } from '../../../services/news';
import ReactHtmlParser from 'react-html-parser';
import Pagination from '../../common/Pagination';
const propTypes = {
  data: Proptypes.object.isRequired,
  indexTab: Proptypes.number.isRequired
};
function TabQuestionsItem({ data, indexTab }) {
  const [categories, setCategories] = useState({});
  const [formState, setFormState] = useState({});
  const [newsAnswer, setNewsAnswer] = useState({});
  const [page, setPage] = useState(1);

  const onChangeCategory = event => {
    setFormState(formState => ({
      ...formState,
      category: event
    }));
  };

  const onChangeChildCategory = async event => {
    setFormState(formState => ({
      ...formState,
      childCategory: event
    }));
    const res = await findAllNewsByCategory(event.value, page, 2);
    if (res && res.status === 200) {
      setNewsAnswer(res.data);
    }
  };
  const getFullCategoryByID = async () => {
    const res = await getFullCategoryByIdService(data.category.value);
    if (res && res.status === 200) {
      setCategories(res.data.categoriesList);
    }
  };

  useEffect(() => {
    getFullCategoryByID();
  }, []);

  useEffect(() => {
    const findAllNewByCategory = async () => {
      const res = await findAllNewsByCategory(formState.childCategory.value, page, 2);
      if (res && res.status === 200) {
        setNewsAnswer(res.data);
      }
    };
    if (formState.childCategory) {
      findAllNewByCategory();
    }
  }, [page]);

  return (
    <React.Fragment>
      <div className="flex-bw">
        <div className="sl">
          <h3 className="ctext">Sản phẩm/ Dịch vụ</h3>
          <Select
            name="category"
            value={formState.category || ''}
            onChange={event => onChangeCategory(event)}
            options={map(categories, category => ({
              label: category.name,
              value: category.id,
              categoriesList: category.categoriesList
            }))}
          />
        </div>
        <div className="sl">
          <h3 className="ctext">Chi tiết sản phẩm/ dịch vụ</h3>
          <Select
            name="category"
            value={formState.childCategory || ''}
            onChange={event => onChangeChildCategory(event)}
            options={map(formState.category ? formState.category.categoriesList : {}, category => ({
              label: category.name,
              value: category.id
            }))}
          />
        </div>
      </div>
      <section className=" sec-b sec-cauhoi ">
        <div className="accodion accodion-1 accodion-1-5">
          {map(newsAnswer.news, (item, index) => (
            <div className="accodion-tab ">
              <input type="checkbox" id={`chck_${indexTab}_${index + 1}`} />
              <label className="accodion-title" htmlFor={`chck_${indexTab}_${index + 1}`}>
                <span>{`${index + 1}. ${item.title}`}</span>
                <span className="triangle">
                  <i className="icon-plus"></i>
                </span>
              </label>
              <div className="accodion-content entry-content">
                <div className="inner">{ReactHtmlParser(item.description)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {!isEmpty(newsAnswer) && <Pagination setPage={setPage} page={page} size={newsAnswer.size} />}
    </React.Fragment>
  );
}
TabQuestionsItem.propTypes = propTypes;

export default TabQuestionsItem;
