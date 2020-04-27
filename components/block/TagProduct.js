import React from 'react';
import { ItemImages, ItemIcon } from './product/index';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { withTranslation } from '../../i18n';

const propTypes = {
  data: PropTypes.array,
  id: PropTypes.number
};

function TagProduct({ data, id }) {
  let padding = '';
  if (data[0].optionWidth === '2') {
    padding = 'sec-tb';
  } else if (data[0].optionWidth === '3') {
    padding = 'sec-t';
  } else if (data[0].optionWidth === '4') {
    padding = 'sec-b';
  } else {
    padding = 'sec-';
  }

  const { t } = useTranslation();

  return (
    <section className={`${padding} sec-h-2 bg-gray group-ef loaded hot-products`} id={id}>
      <div className="container">
        <div className="entry-head text-center">
          <h2 className="ht efch-1 ef-img-t">{data[0].title || ''}</h2>
          {data[0].linkurl !== undefined && (
            <a className="viewall" href={data[0].linkurl === '' ? '!#' : data[0].linkurl}>
              {t('view')}
              <i className="icon-arrow-1"></i>
            </a>
          )}
        </div>
        <ItemImages data={data} />
        <ItemIcon data={data} />
      </div>
    </section>
  );
}

TagProduct.propTypes = propTypes;

export default withTranslation('common')(TagProduct);
