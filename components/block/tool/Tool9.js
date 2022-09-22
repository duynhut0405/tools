import React, { useState, useEffect } from 'react';
import FieldInput from './FieldInput2';
import Result from './Result2';
import t from '../../../translation';
import { searchGuarantee } from '../../../services/tool';

import Proptypes from 'prop-types';

const propTypes = {
  minValue: Proptypes.number,
  maxValue: Proptypes.number,
  interest_rate: Proptypes.number,
  t: Proptypes.func,
  padding: Proptypes.string,
  id: Proptypes.number,
  type: Proptypes.string
};

const searchGuaranteeFunc = async (data, setData) => {
  const res = await searchGuarantee(data);
  if (res !== undefined && res.status === 200) {
    setData(res.data);
  }
};

function Tool9({ minValue, maxValue, interest_rate, padding, id, type }) {
  const [dkkd, setdkkd] = useState('');
  const [numGuarantee, setNumGuarantee] = useState('');
  const [amount, setAmount] = useState(null);
  const [result, setResult] = useState({
    benBaoLanh: '',
    benHuongThu: '',
    id: null,
    loaiBaoLanh: null,
    loaiTien: '',
    ngayHetHieuLuc: null,
    ngayPhatHanh: null,
    soCamKetBaoLanh: '',
    soTien: null
  });

  const calculation = event => {
    event.preventDefault();
    searchGuaranteeFunc(
      {
        dkkd_CMND: dkkd,
        soCamKetBaoLanh: numGuarantee,
        soTien: amount
      },
      setResult
    );
  };
  const clickOnSetValue = (setData, value) => {
    setData(value);
  };

  return (
    <div className={`${padding} tool-${type}`} id={id}>
      <div className="container">
        <h3 className="text-2xl mb-1 font-bold text-[#002395] sm:text-3xl sm:tracking-tight">
          {t('tool_9_title')}
        </h3>
        <div className="cttab-xx  sec-b">
          <div className="tab-content">
            <div className="active">
              <div className="tab-inner  ">
                <div className="form-vay-von">
                  <form onSubmit={calculation}>
                    <div className="row ">
                      <div className="col-md-7 ">
                        <div className="inner">
                          <FieldInput
                            label={t('guarantee_number')}
                            maxValue={maxValue}
                            value={numGuarantee}
                            type="text"
                            onChange={value => clickOnSetValue(setNumGuarantee, value)}
                          />
                          <FieldInput
                            label={t('guarantee_amount')}
                            maxValue={36}
                            value={amount}
                            type="tel"
                            onChange={value => clickOnSetValue(setAmount, value)}
                          />
                          <FieldInput
                            label={t('number_DKKD')}
                            maxValue={36}
                            type="text"
                            value={dkkd}
                            onChange={value => clickOnSetValue(setdkkd, value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-5">
                        <Result title={t('results_guarantee')} result={result} />
                      </div>
                    </div>
                    <p className="note">{t('tool_note')}</p>
                    <button className="btn" type="submit">
                      {t('search_tool')}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* table */}
      </div>
    </div>
  );
}

Tool9.propTypes = propTypes;

export default Tool9;
