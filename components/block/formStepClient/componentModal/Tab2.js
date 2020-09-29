import React from 'react';
import PropTypes from 'prop-types';
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

const Tab2 = props => {
  const { mobileNumber, setMoblieNumber } = props;

  const setMoblie = (e) => {
    const element = document.getElementById('modal-search-branch');
    console.log(element.value);
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
                          '<MobileNum>'+element.value+'</MobileNum>'+
                      '</GetCRMRmInfoByMobileInput>'+
                    '</v1:getCRMRmInfoByMobile_v1_0>'+
                '</soapenv:Body>'+
              '</soapenv:Envelope>';

    axios.post('http://10.2.16.184:5555/ws/MBSOABussinessSupport.HumanResourceManagement.EmployeeDataManagement.Inbound.Service.WebService.Provider:getCRMRmInfoByMobile_v1_0/MBSOABussinessSupport_HumanResourceManagement_EmployeeDataManagement_Inbound_Service_WebService_Provider_getCRMRmInfoByMobile_v1_0_Port',
      xmls,
      {headers:
        {'Content-Type': 'text/xml', 'Authorization': 'Basic ' + btoa('tester_huannv2:1')},
      }).then(res=>{
        console.log(res);
      }).catch(err=>{console.log(err)});
      }
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
                  // value={mobileNumber}
                  onChange={e => setMoblie(e)}
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
          <div className="block2_empty">
          </div>
        </div>
      </div>
    </div>
  );
};

Tab2.propTypes = {
  mobileNumber: PropTypes.string,
  setMoblieNumber: PropTypes.func,
};

export default Tab2;
