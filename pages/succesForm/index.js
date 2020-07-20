import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Proptypes from 'prop-types';

const propTypes = {};

function SuccesForm() {
  const router = useRouter();
  console.log(router);
  return (
    <section className="p-thank1 sec-tb sec-ab-1">
      <Head>
        <title>Đăng ký</title>
        <meta name="title" content="Đăng ký" />
        <meta
          property="og:image"
          itemProp="thumbnaiUrl"
          content={`${process.env.DOMAIN}uploads/resources/files/icon/imgDefault.png`}
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="354" />
      </Head>
      <div className="container">
        <div className="max750">
          <div className="p-thank1__img1">
            <img src="static/images/success-icon.png" alt="success-icon.png" />
          </div>

          <h2 className="c-title1">Đăng ký thành công</h2>

          <div className="p-thank1__text1">
            <p>Khách hàng đáp ứng các điều kiện vay cơ bản tại MB.</p>
            <p>
              MB rất hân hạnh được đồng hành cùng Quý Khách hàng để đưa ra các giải pháp tài chính
              tối ưu với mức lãi suất ưu đãi nhất.
            </p>
          </div>

          <div className="p-thank1__text2">
            <p className="text1">
              MB đã nhận được đề nghị vay vốn của Quý Khách hàng, thông tin khoản vay như sau:
            </p>

            <div className="list1">
              <div className="list1_card1">
                <div className="row">
                  <div className="col-5 col-md-4">
                    <p className="list1_text1">- Mã ID đề nghị vay vốn:</p>
                  </div>
                  <div className="col-7 col-md-8">
                    <h4 className="list1_title1">0123456789ABCXYZ</h4>
                  </div>
                </div>
              </div>

              <div className="list1_card1">
                <div className="row">
                  <div className="col-5 col-md-4">
                    <p className="list1_text1">- Số tiền đề xuất vay:</p>
                  </div>
                  <div className="col-7 col-md-8">
                    <h4 className="list1_title1">{router.query.suggest_monney}</h4>
                  </div>
                </div>
              </div>

              <div className="list1_card1">
                <div className="row">
                  <div className="col-5 col-md-4">
                    <p className="list1_text1">- Mục đích vay:</p>
                  </div>
                  <div className="col-7 col-md-8">
                    <h4 className="list1_title1">{router.query.purpose_loan}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-thank1__text3">
            <p>
              Cán bộ <strong>MB</strong> sẽ liên hệ với Quý Khách hàng trong thời gian sớm nhất (tối
              đa 01 ngày làm việc) để hoàn thiện thủ tục vay vốn theo quy định MB. 
            </p>
            <p>
              <b>Kính chúc Quý Khách hàng sức khoẻ.</b>
            </p>
          </div>

          <div className="col-12 text-center">
            <a href="#" className="btn btnModal" data-modal="CheckedDataModal">
              Tiếp tục
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

SuccesForm.propsTypes = propTypes;

export default SuccesForm;
