import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import { getFormbuilderByIdService } from '../../services/form';
import { map } from 'lodash';
import ReactHtmlParser from 'react-html-parser';

const propTypes = {
  data: Proptypes.array.isRequired,
  getPageBlock: Proptypes.func
};

function MenuIntro({ data }) {
  const [formdata, setFormData] = useState({});
  const getFormByID = async () => {
    const res = await getFormbuilderByIdService(Number(data.formdata));
    if (res && res.status === 200) {
      setFormData(res.data);
    }
  };

  useEffect(() => {
    getFormByID();
  }, []);
  return (
    <div>
      <section className=" sec-menu">
        <div className="container">
          <ul>
            <li className="active">
              <a href="#">Giới thiệu</a>
            </li>
            {map(data.listBlock, (values, index) => (
              <li key={index}>
                <a href={`#${values.id}`}>{values.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className=" sec-tb sec-ab-1">
        <div className="container">
          <div className="row list-item ">
            <div className="col-lg-8">
              <div className="boxwidget">
                <h2 className="widget-title">GIỚI THIỆU</h2>
                <p>
                  App MBBank là ứng dụng ngân hàng của MB trên điện thoại di động, cho phép khách
                  hàng thực hiện hầu hết giao dịch tài chính, thanh toán hàng ngày với thao tác đơn
                  giản, thực hiện được mọi lúc, mọi nơi. Là ứng dụng được cài đặt trên điện thoại
                  thông minh nên thường xuyên được nâng cấp, mang đến trải nghiệm và sự thuận tiện
                  tối ưu nhất cho khách hàng{' '}
                </p>
              </div>
              <div className="boxwidget-2">
                <p>
                  Nếu bạn muốn có thêm thông tin về sản phẩm Vay siêu nhanh, hãy liên hệ <br />  với
                  chúng tôi qua:
                </p>
                <div className="fs16 cl1">1900 545426 - (84-24) 3767 4050 (quốc tế gọi về)</div>
              </div>
            </div>
            <div className="col-lg-4 sidebar">
              <div className="widget widget-tuvan">
                <div>{ReactHtmlParser(formdata.embedded)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

MenuIntro.propTypes = propTypes;

export default MenuIntro;
