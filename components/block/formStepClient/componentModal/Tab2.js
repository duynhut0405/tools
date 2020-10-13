// import React from 'react';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

const axios = require('axios');
function create_UUID(){
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}

const Tab2 = () => {
  // const [initMobileNumber, setInitMoblieNumber] = useState('');
  const [initMobileNumber, setInitMoblieNumber] = useState('01233444555');
  // const [data, setData] = useState({});
  const [branch, setBranch] = useState('');
  const [Email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [Gender, setGender] = useState('');
  const [OfficePhone, setOfficePhone] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Position, setPosition] = useState('');
  const [Title, setTitle] = useState('');

  useEffect(() => {
    
    const element = document.getElementById('modal-search-branch');

  }, [initMobileNumber]);

  const handleChange = async event => {
    console.log(event.target.value);
    let xmls = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:v1="http://www.mbbank.com.vn/service/global/mbsoabussinesssupport/humanresourcemanagement/employeedatamanagement/getcrmrminfobymobile/v1_0">'+
                '<soapenv:Header/>'+
                '<soapenv:Body>'+
                    '<v1:getCRMRmInfoByMobile_v1_0>'+
                      '<GetCRMRmInfoByMobileInput>'+
                          '<Header>'+
                            '<Common>'+
                                '<ClientMessageId>'+create_UUID()+'</ClientMessageId>'+
                                
                                '<AdditionalInformation>'+
                                '</AdditionalInformation>'+
                            '</Common>'+
                            '<Client>'+
                                '<SourceAppID>t24</SourceAppID>'+
                            '</Client>'+
                          '</Header>'+
                          '<MobileNum>'+initMobileNumber+'</MobileNum>'+
                      '</GetCRMRmInfoByMobileInput>'+
                    '</v1:getCRMRmInfoByMobile_v1_0>'+
                '</soapenv:Body>'+
              '</soapenv:Envelope>';
    var config = {
      method: 'post',
      url: 'http://localhost:8088/mockMBSOABussinessSupport_HumanResourceManagement_EmployeeDataManagement_Inbound_Service_WebService_Provider_getCRMRmInfoByMobile_v1_0_Binder',
      headers: { 
        'Content-Type': 'text/plain'
      },
      data : xmls
    };

    await axios(config)
    .then(function (response) {
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(response.data,"text/xml");
      console.log(xmlDoc);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  };


  return (
    <div className="block2" data-tabname="name2">
      <div className="col-12">
        <div className="block2_search1">
          <div className="row">
            <div className="col-12 col-sm-9">
              <div className="form-search-focus">
                <input
                  id="modal-search-branch"
                  type="text"
                  placeholder="Nhập số điện thoại liên hệ"
                  value={initMobileNumber}
                  onChange={e => handleChange(e)}
                />
                <i className="icon-search-2"></i>
              </div>
            </div>
            <div className="col-12 col-sm-3 text-center">
              <button className="btn c-modal-search1-btn1-js">Chọn</button>
            </div>
          </div>
        </div>
        <div className="c-modal-search1-js">
          <div className="block2_box1">
            <div className="row">
              <div className="box1 col-12 col-md-6">
                <div className="box1_inner">
                  <div className="box1_img1">

                  </div>
                  <div className="box1_info1">
                    <h3 className="title1">{fullName != null || fullName != undefined ? fullName : ''}</h3>
                    <p>{Gender != null || Gender != undefined ? Gender : ''}</p>
                    <p>{Position != null || Position != undefined ? Position : ''}</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
               <div className="box2">
                <h3>{Title != null || Title != undefined ? Title : ''}</h3>
                {/* <p>Toà nhà MBBank - Hội sở 21 Cát Linh, Đống Đa, Hà Nội</p> */}
                <p>{`Điện thoại: ${Mobile != null || Mobile != undefined ? Mobile : ''}`}</p>
                <p>{`Email: ${Email != null || Email != undefined ? Email : ''}`}</p>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Tab2.propTypes = {
//   mobileNumber: PropTypes.string,
//   setMoblieNumber: PropTypes.func,
// };

export default Tab2;
