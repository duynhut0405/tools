import React, { useState } from 'react';
import Proptypes from 'prop-types';
import map from 'lodash/map';
import t from '../../translation';

const propTypes = {
  data: Proptypes.array,
  t: Proptypes.func
};

function Table({ data }) {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div className="table-responsive">
      <table className="table table-full table-ti-gia">
        <tbody>
          <tr>
            <th>{t('period')}</th>
            <th className="col">VND</th>
            <th className="col">USD</th>
          </tr>
          {map(data, rate => (
            <tr key={rate.id}>
              <td>{rate.term}</td>
              {rate.description !== null && rate.description !== '' && (
                <td className="tooltip">
                  {`${rate.interest_rate} %`}
                  <span className="tooltiptext">{rate.description}</span>
                </td>
              )}
              {(rate.description === null || rate.description === '') && (
                <td>{`${rate.interest_rate} %`}</td>
              )}
              {rate.descriptionUSA !== null && rate.descriptionUSA !== '' && (
                <td className="tooltip">
                  {`${rate.interest_rate_usd} %`}
                  <span className="tooltiptext">{rate.descriptionUSA}</span>
                </td>
              )}
              {(rate.descriptionUSA === null || rate.descriptionUSA === '') && (
                <td>{`${rate.interest_rate_usd} %`}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = propTypes;

export default Table;
