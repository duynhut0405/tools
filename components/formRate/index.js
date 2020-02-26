import React from 'react';
import TableRate from './Table';
import RateSelect from './RateSelect';
import moment from 'moment';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.object
};

function FormRate({ data }) {
  return (
    <section className="sec-b sec-tigia">
      {data !== undefined && (
        <div className="container">
          <div className="row list-item">
            <div className="col-lg-7">
              <div className="divtigia">
                <h2>tỷ giá</h2>
                <TableRate data={data.exchangeRateDetail} />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="divquidoi">
                <h2>Quy đổi ngoại tệ</h2>
                <div>Chuyển từ</div>
                <div className="input-group">
                  <span className="input-group-addon none">
                    <RateSelect data={data.exchangeRateDetail} />
                  </span>
                  <input className="input" placeholder="Số tiền" />
                </div>
                <div>Đến</div>
                <div className="input-group">
                  <span className="input-group-addon none">
                    <RateSelect data={data.exchangeRateDetail} />
                  </span>
                  <input className="input" placeholder="Số tiền" />
                </div>
                <p>{`Cập nhật tại thời điểm ${moment(data.created_at).format(
                  'HH:mm'
                )} ngày ${moment(data.created_at).format('DD/MM/YYYY')}`}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

FormRate.propTypes = propTypes;

export default FormRate;
