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
function TabQuestionsItem({ data, indexTab, number }) {
  const [categories, setCategories] = useState({}); //category: data.categoryDefault
  const [formState, setFormState] = useState({
    category: {}
  });
  const [newsAnswer, setNewsAnswer] = useState({});
  const [page, setPage] = useState(1);

  const onChangeCategory = event => {
    setFormState(formState => ({
      ...formState,
      category: event
    }));
  };

  const onChangeChildCategory = async event => {
    //
    setFormState(formState => ({
      ...formState,
      childCategory: event
    }));
  };

  const getNewsByCategories = async (value, page, number) => {
    const res = await findAllNewsByCategory(value, page, number);
    if (res && res.status === 200) {
      setNewsAnswer(res.data);
    }
  };
  const getFullCategoryByID = async () => {
    if (data.category) {
      const res = await getFullCategoryByIdService(data.category.value);
      if (res && res.status === 200) {
        setCategories(res.data.categoriesList);
        if (
          res.data &&
          res.data.categoriesList.length > 0 &&
          res.data.categoriesList[0].categoriesList.length > 0
        ) {
          setFormState(formState => ({
            category: {
              label: res.data.categoriesList[0].name,
              value: res.data.categoriesList[0].id,
              categoriesList: res.data.categoriesList[0].categoriesList
            },
            childCategory: {
              label: res.data.categoriesList[0].categoriesList[0].name,
              value: res.data.categoriesList[0].categoriesList[0].id
            }
          }));
        } else if (res.data && res.data.categoriesList.length > 0) {
          setFormState(formState => ({
            category: {
              label: res.data.categoriesList[0].name,
              value: res.data.categoriesList[0].id,
              categoriesList: res.data.categoriesList[0].categoriesList
            }
          }));
        } else {
          setFormState(formState => ({}));
        }
      }
    }
  };

  useEffect(() => {
    getFullCategoryByID();
  }, []);

  useEffect(() => {
    if (formState.childCategory) {
      getNewsByCategories(formState.childCategory.value, page, number);
    }
  }, [formState.childCategory]);

  useEffect(() => {
    const findAllNewByCategory = async () => {
      const res = await findAllNewsByCategory(formState.childCategory.value, page, number);
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
            value={formState.category || categories[0] || ''}
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
                <span>{` ${item.title}`}</span>
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
