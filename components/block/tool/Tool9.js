import React, { useState, useEffect } from 'react';
import FieldInput from './FieldInput2';
import Table from './Table';
import Result from './Result2';
import t from '../../../translation';
import { rate } from '../../../utils/currency';
import { searchGuarantee } from '../../../services/tool';
import { withFormik } from 'formik';
import * as Yup from 'yup';

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
        soTien: Number(amount.replace(/[^0-9.-]+/g, ''))
      },
      setResult
    );
  };

  return (
    <div className={`${padding} tool-${type}`} id={id}>
      <div className="container">
        <h2 className="ht">{t('tool_9_title')}</h2>
        <div className="cttab-xx  sec-b">
          <div className="tab-content">
            <div className="active">
              <div className="tab-inner  ">
                <div className="form-vay-von">
                  <div className="row ">
                    <div className="col-md-7 ">
                      <div className="inner">
                        <FieldInput
                          label={t('guarantee_number')}
                          maxValue={maxValue}
                          value={numGuarantee}
                          type="text"
                          onChange={value => setNumGuarantee(value)}
                        />
                        <FieldInput
                          label={t('guarantee_amount')}
                          maxValue={36}
                          value={amount}
                          type="tel"
                          onChange={value => setAmount(value)}
                        />
                        <FieldInput
                          label={t('number_DKKD')}
                          maxValue={36}
                          type="text"
                          value={dkkd}
                          onChange={value => setdkkd(value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <Result title={t('results_guarantee')} result={result} />
                    </div>
                  </div>
                  <p className="note">{t('tool_note')}</p>
                  <a className="btn" onClick={calculation}>
                    {t('search_tool')}
                  </a>
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
