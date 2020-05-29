import Proptypes from 'prop-types';
import React from 'react';
import t from '../../../translation';

const propTypes = {
  title: Proptypes.string,
  subtitle: Proptypes.string,
  amount: Proptypes.number,
  equity_capital: Proptypes.number,
  monthlyInterest: Proptypes.number,
  monthlypayment: Proptypes.number,
  totalAmount: Proptypes.number,
  month: Proptypes.string,
  interest_rate: Proptypes.number,
  t: Proptypes.func,
  result: Proptypes.object
};

function Result({ title, result }) {
  return (
    <div className="result th-result-js">
      <h3>{title}</h3>
      <div className="row">
        <div className="col-md-6">
          <h5 className="title">{t('guarantee_number_guarantee')} </h5>
        </div>
        <div className="col-md-6">
          <span className="t3">{result.soCamKetBaoLanh}</span>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h5 className="title">{t('guarantee_type')}</h5>
        </div>
        <div className="col-md-6">
          <span className="t3">{result.loaiBaoLanh === null ? '' : result.loaiBaoLanh}</span>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h5 className="title">{t('effective_date')}</h5>
        </div>
        <div className="col-md-6">
          <span className="t3">{result.ngayPhatHanh === null ? '' : result.ngayPhatHanh}</span>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h5 className="title">{t('expiry_date')}</h5>
        </div>
        <div className="col-md-6">
          <span className="t3">{result.ngayHetHieuLuc === null ? '' : result.ngayHetHieuLuc}</span>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h5 className="title">{t('guarantee_currency')}</h5>
        </div>
        <div className="col-md-6">
          <span className="t3">{result.loaiTien}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h5 className="title">{t('amount_guaranteed')}</h5>
        </div>
        <div className="col-md-6">
          <span className="t3">{result.soTien === null ? '' : result.soTien}</span>
        </div>
      </div>
      <div className=" row">
        <div className="col-md-6">
          <h5 className="title">{t('name_of_guaranteed')}</h5>
        </div>
        <div className="col-md-6">
          <span className="t3">{result.benBaoLanh}</span>
        </div>
      </div>
      <div className=" row">
        <div className="col-md-6">
          <h5 className="title">{t('name_of_beneficiary_guarantee')}</h5>
        </div>
        <div className="col-md-6">
          <span className="t3">{result.benHuongThu}</span>
        </div>
      </div>
    </div>
  );
}

Result.propTypes = propTypes;

export default Result;
