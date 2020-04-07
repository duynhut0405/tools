import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import { getFormbuilderByIdService } from '../../services/form';
import { map } from 'lodash';
import ReactHtmlParser from 'react-html-parser';
import { Input, Label } from 'reactstrap';
import { sendMailService } from '../../services/form';

const propTypes = {
  data: Proptypes.array.isRequired,
  getPageBlock: Proptypes.func,
  type: Proptypes.string,
  pageId: Proptypes.func
};

function MenuIntro({ data, type, pageId }) {
  const [formdata, setFormData] = useState({});
  const [formState, setFormState] = useState({});
  const getFormByID = async () => {
    const res = await getFormbuilderByIdService(Number(data.formdata));
    if (res && res.status === 200) {
      setFormData(JSON.parse(res.data.list));
    }
  };

  useEffect(() => {
    getFormByID();
  }, []);

  const handleChange = event => {
    event.persist();
    setFormState(() => ({
      ...formState,
      [event.target.name]: event.target.value
    }));
  };

  const onSend = event => {
    event.preventDefault();
    const dataSend = {
      content: JSON.stringify(formState),
      email: formState.email,
      idForm: data.formdata,
      idPage: pageId
    };
    sendMailService(dataSend);
  };
  // if (type === '1') {
  //   return (
  //     <React.Fragment>
  //       <section className=" sec-menu">
  //         <div className="container">
  //           <ul>
  //             <li className="active">
  //               <a href="#">Giới thiệu</a>
  //             </li>
  //             {map(data.listBlock, (values, index) => (
  //               <li key={index}>
  //                 <a href={`#${values.id}`}>{values.title}</a>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       </section>
  //       <section className=" sec-tb sec-ab-1">
  //         <div className="container">
  //           <div className="row list-item ">
  //             <div className="col-lg-8">
  //               <div className="boxwidget">
  //                 <h2 className="widget-title">GIỚI THIỆU</h2>
  //                 <p>
  //                   App MBBank là ứng dụng ngân hàng của MB trên điện thoại di động, cho phép khách
  //                   hàng thực hiện hầu hết giao dịch tài chính, thanh toán hàng ngày với thao tác
  //                   đơn giản, thực hiện được mọi lúc, mọi nơi. Là ứng dụng được cài đặt trên điện
  //                   thoại thông minh nên thường xuyên được nâng cấp, mang đến trải nghiệm và sự
  //                   thuận tiện tối ưu nhất cho khách hàng
  //                 </p>
  //               </div>
  //               <div className="boxwidget-2">
  //                 <p>
  //                   Nếu bạn muốn có thêm thông tin về sản phẩm Vay siêu nhanh, hãy liên hệ <br />
  //                   với chúng tôi qua:
  //                 </p>
  //                 <div className="fs16 cl1">1900 545426 - (84-24) 3767 4050 (quốc tế gọi về)</div>
  //               </div>
  //             </div>
  //             <div className="col-lg-4 sidebar">
  //               <div className="widget widget-tuvan">
  //                 <form onSubmit={onSend} autoComplete="on" className="form-tuvan">
  //                   {map(formdata, (item, index) => {
  //                     if (item.type === 'header') {
  //                       return (
  //                         <React.Fragment>
  //                           <div className="max600 entry-head text-center">
  //                             {ReactHtmlParser(item.label)}
  //                           </div>
  //                         </React.Fragment>
  //                       );
  //                     }
  //                     if (item.type === 'paragraph') {
  //                       return (
  //                         <p className={item.className} key={index}>
  //                           {ReactHtmlParser(item.label)}
  //                         </p>
  //                       );
  //                     }
  //                     if (item.type === 'radio-group') {
  //                       return (
  //                         <div className="mb-30 text-center">
  //                           {map(item.values, (items, key) => (
  //                             <label className="radio" key={key} style={{ marginLeft: '20px' }}>
  //                               <input type="radio" name={item.name} />
  //                               <span></span>
  //                               {items.label}
  //                             </label>
  //                           ))}
  //                         </div>
  //                       );
  //                     }
  //                     if (item.type === 'text') {
  //                       return (
  //                         <React.Fragment>
  //                           <div className="col-12">
  //                             {item.label && <Label>{item.label}</Label>}
  //                             <Input
  //                               className="input"
  //                               name={item.name}
  //                               type={item.subtype}
  //                               placeholder={item.placeholder}
  //                               onChange={e => handleChange(e)}
  //                             />
  //                           </div>
  //                         </React.Fragment>
  //                       );
  //                     }
  //                     if (item.type === 'textarea') {
  //                       return (
  //                         <React.Fragment>
  //                           <div className="col-12">
  //                             {item.label && <Label>{item.label}</Label>}
  //                             <Input
  //                               className="input"
  //                               type={item.subtype}
  //                               name={item.name}
  //                               rows={item.rows}
  //                               placeholder={item.placeholder}
  //                               onChange={e => handleChange(e)}
  //                             />
  //                           </div>
  //                         </React.Fragment>
  //                       );
  //                     }
  //                     if (item.type === 'button') {
  //                       return (
  //                         <React.Fragment>
  //                           <div className="col-12 text-center">
  //                             <button className="btn" type={item.subtype}>
  //                               {item.label}
  //                             </button>
  //                           </div>
  //                         </React.Fragment>
  //                       );
  //                     }
  //                     return null;
  //                   })}
  //                 </form>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //     </React.Fragment>
  //   );
  // }
  // if (type === '2') {
  return (
    <React.Fragment>
      <section className=" sec-menu">
        <div className="container">
          <ul>
            <li className="active">
              <a href="#">{data.title}</a>
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
              <div className="boxwidget entry-content">
                <h2 className="widget-title">{ReactHtmlParser(data.title)}</h2>
                {ReactHtmlParser(data.descriptionTop)}
              </div>
              <div className="boxwidget-2">
                <div>{ReactHtmlParser(data.descriptionBot)}</div>
                {/* {data.contact_1 !== undefined && (
                  <Row>
                    <Col xs="5">
                      <div className="contact">
                        <h3 className="">{data.contact_1}</h3>
                        <i className="icon-arrow-1"></i>
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="contact">
                        <h3 className="">{data.contact_2}</h3>
                        <i className="icon-arrow-1"></i>
                      </div>
                    </Col>
                  </Row>
               
                )} */}
                <div className="row">
                  <div className="col-md-5">
                    <a className="btnPhone" href="tel:1900545426">
                      {data.contact_1} <i className="icon-arrow-2"></i>{' '}
                    </a>
                  </div>
                  <div className="col-md-7">
                    <a className="btnPhone" href="tel:+8437674050">
                      {data.contact_2} <i className="icon-arrow-2"></i>{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 sidebar">
              <div className="widget widget-tuvan">
                <form onSubmit={onSend} autoComplete="on" className="form-tuvan">
                  {map(formdata, (item, index) => {
                    if (item.type === 'header') {
                      return (
                        <React.Fragment>
                          <div className="max600 entry-head text-center">
                            {ReactHtmlParser(item.label)}
                          </div>
                        </React.Fragment>
                      );
                    }
                    if (item.type === 'paragraph') {
                      return (
                        <p className={item.className} key={index}>
                          {ReactHtmlParser(item.label)}
                        </p>
                      );
                    }
                    if (item.type === 'radio-group') {
                      return (
                        <div className="mb-30 text-center">
                          {map(item.values, (items, key) => (
                            <label className="radio" key={key} style={{ marginLeft: '20px' }}>
                              <input type="radio" name={item.name} />
                              <span></span>
                              {items.label}
                            </label>
                          ))}
                        </div>
                      );
                    }
                    if (item.type === 'text') {
                      return (
                        <React.Fragment>
                          <div className="col-12">
                            {item.label && <Label>{item.label}</Label>}
                            <Input
                              className="input"
                              name={item.name}
                              type={item.subtype}
                              placeholder={item.placeholder}
                              onChange={e => handleChange(e)}
                            />
                          </div>
                        </React.Fragment>
                      );
                    }
                    if (item.type === 'textarea') {
                      return (
                        <React.Fragment>
                          <div className="col-12">
                            {item.label && <Label>{item.label}</Label>}
                            <Input
                              className="input"
                              type={item.subtype}
                              name={item.name}
                              rows={item.rows}
                              placeholder={item.placeholder}
                              onChange={e => handleChange(e)}
                            />
                          </div>
                        </React.Fragment>
                      );
                    }
                    if (item.type === 'button') {
                      return (
                        <React.Fragment>
                          <div className="col-12 text-center">
                            <button className="btn" type={item.subtype}>
                              {item.label}
                            </button>
                          </div>
                        </React.Fragment>
                      );
                    }
                    return null;
                  })}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
// return null;
// }
MenuIntro.propTypes = propTypes;

export default MenuIntro;
