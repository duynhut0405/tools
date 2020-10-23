import moment, { months } from 'moment';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import t from '../../translation';
import currency from './dataCurrent.json';
import ExchangeRate from './exchangeRate';
import RateSelect from './RateSelect';
import { getInterestRateService } from '../../services/rate';
import XLSX from 'xlsx';
import ReactHtmlParser from "react-html-parser";
import DatePicker from 'react-datepicker';
import UseWindowResize from "../common/Resize";


const propTypes = {
  data: PropTypes.any,
  interestRate: PropTypes.array,
  description1: PropTypes.string,
  description2: PropTypes.string,
  description3: PropTypes.string
};

function FormRate({ data, interestRate, description1, description2, description3, setTypeSearch, typeSearch }) {
  const size = UseWindowResize();
  const [From, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [currencyFrom, setcurrencyFrom] = useState('USD');
  const [currencyTo, setcurrencyTo] = useState('VND');
  const [loan, setLoan] = useState([]);
  const [minLoan, setMinLoan] = useState({});
  const [maxDeposits, setMaxDeposits] = useState({});
  const [deposits, setDeposits] = useState([]);
  const [goldList, setGoldList] = useState([]);
  const [currentGold, setCurrentGold] = useState({});
  const [typeTable, setTypeTable] = useState(0);
  const [typeGold, setTypeGold] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [displayNote1, setDisplayNote1] = useState(false);
  const [displayNote2, setDisplayNote2] = useState(false);
  const [displayNote3, setDisplayNote3] = useState(false);

  
  const convertToJson = (csv) => {
    var lines = csv.split("\n");
  
    var result = [];
  
    var headers = lines[0].split(",");
  
    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");
  
      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
  
      result.push(obj);
    }
  
    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
  }

  const openModalTab = (close_id, blue_id, open_id, close_id_2, isLaiSuat) => {
    var x = document.getElementById(close_id);
    x.style.borderBottom = "none";
    x.style.color = "#686868";

    var y = document.getElementById(blue_id);
    y.style.borderBottom = "2px solid #141ED2";
    y.style.color = "#141ED2";

    
    var openId = document.getElementById(open_id);
    openId.style.display = "block";

    var closeId2 = document.getElementById(close_id_2);
    closeId2.style.display="none";

    if (isLaiSuat) {
      if (typeTable == "2") {
        setTypeTable(3);
        return;
      }
  
      if (typeTable == "3") {
        setTypeTable(2);
      }
    }
  }

  
  const setOpen = (ghiChuClass, openId, groupID) => {
    var x = document.getElementById(groupID);
    x.style.display = 'flex';
    let ghichu1 = document.getElementById(openId);
    ghichu1.style.visibility = "visible";
  }

  const setClose = (ghiChuClass, openId, groupID) => {
    var x = document.getElementById(groupID);
    x.style.display = 'none';
    let ghichu1 = document.getElementById(openId);
    ghichu1.style.visibility = "hidden";
  }

  const arrNotUSD = data.exchangeRateDetail
    ? data.exchangeRateDetail.filter(item => item.currency && item.currency.split(' ')[0] !== 'USD')
    : [];
  const objUSD = data.exchangeRateDetail
    ? data.exchangeRateDetail.find(
        item =>
          (item.currency && item.currency.split(' ')[0] === 'USD' && item.currency.sell) !== null
      )
    : {};

  const arrCurrency = data.exchangeRateDetail
    ? [{ ...objUSD, currency: 'USD' }, ...arrNotUSD, { currency: 'VND' }]
    : [{}];
  const [arrTo, setArrTo] = useState(arrCurrency ? arrCurrency : []);

  const getSellBycurrency = _currency => {
    const obj = arrCurrency.find(item => item.currency.trim() === _currency.trim());
    if (obj) {
      const result = obj.sell !== null ? obj.sell : 0;
      return result;
    }
    return 0;
  };

  const getInterestRate = async () => {
    const interestRateRes = await getInterestRateService();
    if (interestRateRes && interestRateRes !== undefined && interestRateRes.status === 200) {
      setType(interestRateRes.data);
    }
    var req = new XMLHttpRequest();
    
    req.open("GET", 'https://mbbank3.mangoads.com.vn:8443/uploads/excel/goldExchange.xlsx', true);
    req.responseType = "arraybuffer";

    req.onload = function(e) {
      var data = new Uint8Array(req.response);
      
      var workbook = XLSX.read(data, {type:"array", cellDates:"true", dateNF: 'dd/mm/yyyy'});
      workbook.SheetNames.forEach(function(sheetName) {
        var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName], {raw: false});
        var json_object = JSON.stringify(XL_row_object);
        var as = JSON.parse(json_object);
        setGoldList(as);
        setCurrentGold(as[0]);

        var dateString = as[0].date; // Oct 23
        var dateParts = dateString.split("/");

        var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
        setStartDate(dateObject);
      })
    }

    req.send();
  };
 

  const getBuyTransferBycurrency = _currency => {
    const obj = arrCurrency.find(item => item.currency.trim() === _currency.trim());
    if (obj) {
      const result = obj.buy_transfer !== null ? obj.buy_transfer : 0;
      return result;
    }
    return 0;
  };

  const Calculator = () => {
    if (currencyTo === 'VND') {
      const rs = Number(From) * getSellBycurrency(currencyFrom);
      setTo(rs - Math.floor(rs) === 0 ? rs : rs.toFixed(4));
    } else if (currencyFrom === 'VND') {
      const rs = Number(From) / getSellBycurrency(currencyTo);
      setTo(rs - Math.floor(rs) === 0 ? rs : rs.toFixed(4));
    } else if (getSellBycurrency(currencyTo) === 0) {
      setTo(0);
    } else {
      const result =
        Number(From) * (getBuyTransferBycurrency(currencyFrom) / getSellBycurrency(currencyTo));
      if (result === 0) {
        setTo(0);
      } else {
        setTo(result - Math.floor(result) === 0 ? result : result.toFixed(4));
      }
    }
  };
  const searchCurrentGold = (d) => {
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const found = goldList.find(element => element.date == `${day}/${month}/${year}`);
    if (found) {
      setCurrentGold(found);
    } else {
      setCurrentGold(goldList[0]);
      var dateString = goldList[0].date; // Oct 23
      var dateParts = dateString.split("/");

      // month is 0-based, that's why we need dataParts[1] - 1
      var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
      setStartDate(dateObject);
    }
  }

  const getCurrentTo = name => {
    if (name === 'VND') {
      const arr = arrCurrency.filter(item => item.currency !== 'VND');
      setArrTo(arr);
      setcurrencyTo(arr[0].currency);
    } else {
      const obj = currency.content.find(item => item.currency === name);
      if (obj) {
        setArrTo(obj.children);
        setcurrencyTo(obj.children[0].currency);
        setcurrencyTo('VND');
        if (obj.children[0].currency === 'VND') {
          Calculator();
        }
      } else {
        setArrTo([{ currency: 'VND' }]);
        setcurrencyTo('VND');
        Calculator();
      }
    }
  };

  const setType = aa => {
    let loan = [];
    let deposits = [];
    for (let i = 0; i < aa.length; i++) {
      let rate = aa[i];
      if (rate.descriptionUSA ==null) {
        deposits.push(rate);
      } else {
        loan.push(rate);
      }
    }
    setLoan(loan);
    setDeposits(deposits);
    
    let max = deposits.reduce(function(prev, current) {
      return (prev.interest_rate > current.interest_rate) ? prev : current
    })

    let min = loan.reduce(function(prev, current) {
      return (prev.interest_rate < current.interest_rate) ? prev : current
    })
    setMaxDeposits(max);
    setMinLoan(min);
  }

  useEffect(() => {
    getCurrentTo('USD');
    setcurrencyTo('VND');
    getInterestRate();
  }, []);

  useEffect(() => {
    if (From !== 0 || currencyFrom !== 'USD' || currencyTo !== 'VND') {
      Calculator();
    }
  }, [From, currencyFrom, currencyTo]);

  const FormatNumber = number => {
    const n = new Intl.NumberFormat().format(number);
    return n;
  };
  return (
    <section className="sec- sec-tigia sec-h-2">
      {data !== undefined && (
        <div className="container">
          <div className="row list-item list-2">
            <div className="col-lg-4">
              <div className="divquidoi">
                <h2 className="exchange">{t('change_foreign_currency')}</h2>
                <h5 style={{color: "#686868", fontSize: "14px", maxWidth: "264px",height:"43px"}}>{t('change_foreign_currency_custom')}</h5>
                <div style={{display: !displayNote1 ? "block": "none"}}>
                <div style={{height:"219px"}}>
                <div>{t('transfer_from')}</div>
                <div className="input-group">
                  <span className="input-group-addon none arrow">
                    <RateSelect
                      data={arrCurrency}
                      defaultValue={currencyFrom}
                      handleChangeOption={value => {
                        setcurrencyFrom(value);
                        getCurrentTo(value);
                      }}
                    />
                    {/* <i className="icon-arrow-3"></i> */}
                  </span>
                  <input
                    className="input"
                    placeholder={t('amount')}
                    name="from"
                    value={FormatNumber(From)}
                    onChange={e => {
                      setFrom(Number(e.target.value.replace(/[^0-9.-]+/g, '')));
                    }}
                  />
                </div>
                <div>{t('to')}</div>
                <div className="input-group">
                  <span className="input-group-addon none">
                    <RateSelect
                      data={arrTo}
                      defaultValue={currencyTo}
                      handleChangeOption={e => {
                        setcurrencyTo(e);
                      }}
                    />
                    {/* <i className="icon-arrow-3"></i> */}
                  </span>
                  <input
                    className="input"
                    placeholder={t('amount')}
                    name="to"
                    value={to.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  />
                </div>
                {/* <p>{`${t('updated_at')} ${moment(data.created_at).format('HH:mm')} ${t(
                  'date'
                )} ${moment(data.created_at).format('DD/MM/YYYY')}`}</p> */}
                </div>
                </div>
                <div style={{display: !displayNote1 ? "none": "block" , height:"219px"}}>
                  {ReactHtmlParser(description1)}
                </div>
                <div className="action-custom" style={{ position: "relative", top: "5px", paddingBottom: "10px"}}>
                  <a className="t5-custom" onMouseOver={() => {setDisplayNote1(true)}} onMouseLeave={() => {setDisplayNote1(false)}}>
                    <div style={{display:"table"}}>
                      <div style={{display:"table-cell", paddingRight:"5px"}}><i className="icon-custom"></i></div>
                      <div style={{display:"table-cell"}}><span>{t('note')}</span></div>
                    </div>
                  </a>
                  <div><a className="xem-chi-tiet" onClick={() => {
                    if (typeSearch == "4") {
                      setTypeSearch(0);
                      setTypeGold(0);
                    } else {
                      setTypeGold(0);
                      setTypeTable(0);
                      setTypeSearch(4)}
                    }
                  }>{typeSearch == 4 ?t('close_read_more'): t('read_more')}</a></div>
                </div>

              </div>
            </div>

            <div className="col-lg-4">
              <div className="divquidoi widget widget-2" style={{backgroundColor:"#DCF9ED"}}>
                <h2 className="exchange">{t('interest_rate')}</h2>
                <div className="tabset">
                  <input type="radio" name="tabset3" id="tset3" onClick={() => {openModalTab(`tset4-1`, "tset3-1" ,`loan`, `deposits`, true)}}></input>
                  <label for="tset3" id="tset3-1" style={{borderBottom:"2px solid #141ED2", color: "#141ED2"}}>Tiền vay </label>
                  <input type="radio" name="tabset4" id="tset4" onClick={() => {openModalTab(`tset3-1`, "tset4-1", `deposits`, "loan", true)}}></input>
                  <label for="tset4" id="tset4-1">Tiền gửi</label>
                  <div className="tab-panels">
                    <div className="tab-panel" id="loan">
                      <div className="content_2" style={{display: displayNote2 ? "none": "block" , height:"219px"}}>
                        <div className="item-group-custom space-20">
                          <div className="item-group-addon-custom">
                            {minLoan.interest_rate}
                          </div>
                          <div className="item-group-content-custom">
                            <div className="t1 w6">%</div>
                            <div className="t2">{minLoan.description}</div>
                            <div className="t3 w6">{minLoan.term}</div>
                          </div>
                        </div>
                      </div>
                      <div style={{display: !displayNote2 ? "none": "block" , height:"219px"}}>
                        {ReactHtmlParser(description2)}
                      </div>
                      <div className="action-custom">
                        <a className="t5-custom" onMouseOver={() => {setDisplayNote2(true)}} onMouseLeave={() => {setDisplayNote2(false)}}>
                          <div style={{display:"table"}}>
                            <div style={{display:"table-cell", paddingRight:"5px"}}><i className="icon-custom"></i></div>
                            <div style={{display:"table-cell"}}><span>{t('note')}</span></div>
                          </div>
                        </a>
                        <div><a className="xem-chi-tiet" 
                          onClick={() => {
                            if (typeTable == "2") {
                              setTypeTable(0);
                              setTypeGold(0);
                              setTypeSearch(0);
                            } else {
                              setTypeGold(0);
                              setTypeSearch(0);
                              setTypeTable(2);
                            }
                          }}
                          >{typeTable == 2 ?t('close_read_more') : t('read_more')}</a></div>
                      </div>
                    </div>
                    <div className="tab-panel" style={{display:"none"}} id="deposits">
                      <div className="content_2" style={{display: displayNote2 ? "none": "block" , height:"219px"}}>
                        <div className="item-group-custom space-20">
                          <div className="item-group-addon-custom">
                            {maxDeposits.interest_rate}
                          </div>
                          <div className="item-group-content-custom">
                            <div className="t1 w6">%</div>
                            <div className="t2">{maxDeposits.description}</div>
                            <div className="t3 w6">{maxDeposits.term}</div>
                          </div>
                        </div>
                      </div>
                      <div style={{display: !displayNote2 ? "none": "block" , height:"219px"}}>
                        {ReactHtmlParser(description2)}
                      </div>
                      <div className="action-custom">
                      <a className="t5-custom" onMouseOver={() => {setDisplayNote2(true)}} onMouseLeave={() => {setDisplayNote2(false)}}>
                          <div style={{display:"table"}}>
                            <div style={{display:"table-cell", paddingRight:"5px"}}><i className="icon-custom"></i></div>
                            <div style={{display:"table-cell"}}><span>{t('note')}</span></div>
                          </div>
                        </a>
                        <div><a className="xem-chi-tiet"
                          onClick={() => {
                            if (typeTable == "3") {
                              setTypeTable(0);
                              setTypeGold(0);
                              setTypeSearch(0);
                            } else {
                              setTypeGold(0);
                              setTypeSearch(0);
                              setTypeTable(3);
                            }
                          }}
                        >{typeTable == 3 ?t('close_read_more') : t('read_more')}</a></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-4">
              <div className="divquidoi widget widget-2" style={{backgroundColor:"#F2F3FF"}}>
                        <h2 className="exchange">{t('gold_price')}</h2>
                <div className="tabset">
                  <input type="radio" name="tabset5" id="tset5" onClick={() => {openModalTab(`tset6-1`, "tset5-1" ,`mua`, `ban`)}}></input>
                        <label for="tset5" id="tset5-1" style={{borderBottom:"2px solid #141ED2", color: "#141ED2"}}>{t('price')}</label>
                  <input type="radio" name="tabset6" id="tset6" onClick={() => {openModalTab(`tset5-1`, "tset6-1", `ban`, "mua")}}></input>
                        <label for="tset6" id="tset6-1">{t('purchase_price')}</label>
                  <div className="tab-panels">
                    <div className="tab-panel" id="mua">
                      <div className="content_3" style={{display: displayNote3 ? "none": "block" , height:"219px"}}>
                        <div className="t1-custom">
                          {currentGold.buy_exchange}
                        <span className="t2-custom">vnđ/<br/>{t('chi_vang')}</span>
                        </div>
                        <div className="t3-custom">{currentGold.gold_1_name}</div>
                        <div className="t4-custom">{currentGold.des_vi}</div>
                      </div>
                      <div style={{display: !displayNote3 ? "none": "block" , height:"219px"}}>
                        {ReactHtmlParser(description3)}
                      </div>
                      <div className="action-custom">
                        <a className="t5-custom" onMouseOver={() => {setDisplayNote3(true)}} onMouseLeave={() => {setDisplayNote3(false)}}>
                          <div style={{display:"table"}}>
                            <div style={{display:"table-cell", paddingRight:"5px"}}><i className="icon-custom"></i></div>
                            <div style={{display:"table-cell"}}><span>{t('note')}</span></div>
                          </div>
                        </a>
                        <div><a className="xem-chi-tiet" onClick={() => {
                          if (typeGold == 0) {
                            setTypeGold(1);
                            setTypeTable(0);
                            setTypeSearch(0);
                          } else {
                            setTypeTable(0);
                            setTypeSearch(0);
                            setTypeGold(0);
                          }
                        }}>{typeGold == 1 ?t('close_read_more') : t('read_more')}</a></div>
                      </div>
                    </div>
                    <div className="tab-panel" style={{display:"none"}} id="ban">
                      <div className="content_3" style={{display: displayNote3 ? "none": "block" , height:"219px"}}>
                        <div className="t1-custom">
                          {currentGold.sell_exchange}
                          <span className="t2-custom">vnđ/<br/>{t('chi_vang')}</span>
                        </div>
                        <div className="t3-custom">{currentGold.gold_1_name}</div>
                        <div className="t4-custom">{currentGold.des_2_vi}</div>
                      </div>
                      <div style={{display: !displayNote3 ? "none": "block" , height:"219px"}}>
                        {ReactHtmlParser(description3)}
                      </div>
                      <div className="action-custom">
                        <a className="t5-custom" onMouseOver={() => {setDisplayNote3(true)}} onMouseLeave={() => {setDisplayNote3(false)}}>
                          <div style={{display:"table"}}>
                            <div style={{display:"table-cell", paddingRight:"5px"}}><i className="icon-custom"></i></div>
                            <div style={{display:"table-cell"}}><span>{t('note')}</span></div>
                          </div>
                        </a>
                        <div><a className="xem-chi-tiet" onClick={() => {
                          if (typeGold == 0) {
                            setTypeGold(1);
                            setTypeTable(0);
                            setTypeSearch(0);
                          } else {
                            setTypeTable(0);
                            setTypeSearch(0);
                            setTypeGold(0);
                          }
                        }}>{typeGold == 1 ?t('close_read_more') : t('read_more')}</a></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="row list-item list-2" id="ghi-chu-group" style={{display:"none"}}>
            <div className="col-lg-4 ghi-chu" id="ghi-chu-1" style={{padding:"30px", visibility:"hidden"}}>
              <div className="divquidoi widget widget-2 shadow-custom-box" style={{backgroundColor:"#fff"}}>
              {ReactHtmlParser(description1)}
              </div>
            </div>

            <div className="col-lg-4 ghi-chu" id="ghi-chu-2" style={{padding:"30px", visibility:"hidden"}}>
              <div className="divquidoi widget widget-2 shadow-custom-box" style={{backgroundColor:"#fff"}}>
              {ReactHtmlParser(description2)}
              </div>
            </div>

            <div className="col-lg-4 ghi-chu" id="ghi-chu-3" style={{padding:"30px", visibility:"hidden"}}>
              <div className="divquidoi widget widget-2 shadow-custom-box" style={{backgroundColor:"#fff"}}>
              {ReactHtmlParser(description3)}
              </div>
            </div>
          </div>

          <ExchangeRate
              tab1={t('exchange_rate')}
              tab2={t('interest_rate')}
              data1={data}
              data2={deposits}
              loan={loan}
              gold={goldList}
              type={typeTable}
              setTypeTable={setTypeTable}
            />

          { typeGold == '1' && (<div className="row list-item list-2">
            <div className="col-lg-12" style={{margin: "auto"}}>
              <div className="search_ tigia mb-30 max950 ">
                <div className="row center">
                  <div className="col-md-4 col-lg-3">
                      <h3 className="ctext mg-0">{t('Search_gold_price')}</h3>
                  </div>
                  <div className="col-sm-7 col-md-5 col-lg-6">
                    <DatePicker
                      selected={startDate}
                      onChange={setStartDate}
                    ></DatePicker>
                  </div>
                  <div className="col-sm-5 col-md-3 ">
                    <button className="btn lg" style={{}} onClick={() => {searchCurrentGold(startDate)}}>
                    {/* <button className="btn lg"> */}
                      {t('table_rate_submit')}
                    </button>
                  </div>
                </div>
                <div>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="table-responsive" style={{textAlign:"center"}}>
                <table className="table table-full table-ti-gia">
                  <tbody>
                    <tr>
                      <th style={{textAlign:"center"}}>{t('type_of_gold')}</th>
                      <th style={{textAlign:"center"}}>{t('price')}(VNĐ/{t('chi_vang')})</th>
                      <th style={{textAlign:"center"}}>{t('purchase_price')}(VNĐ/{t('chi_vang')})</th>
                    </tr>

                    <tr>
                      <td>
                        <div className="t3-custom" style={{width:"100%", textAlign:"center"}}>{currentGold.gold_1_name}</div>
                        <div className="t4-custom" style={{width:"100%", textAlign:"center"}}>{currentGold.des_vi}</div>
                      </td>
                      <td style={{textAlign:"center"}}>{currentGold.buy_exchange}</td>
                      <td style={{textAlign:"center"}}>{currentGold.sell_exchange}</td>
                    </tr>

                    <tr>
                      <td>
                        <div className="t3-custom" style={{width:"100%", textAlign:"center"}}>{currentGold.gold_2_name}</div>
                        <div className="t4-custom" style={{width:"100%", textAlign:"center"}}>{currentGold.des_2_vi}</div>
                      </td>
                      <td style={{textAlign:"center"}}>{currentGold.buy_exchange_2}</td>
                      <td style={{textAlign:"center"}}>{currentGold.sell_exchange_2}</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>)}
        
        </div>
      )}
    </section>
  );
}

FormRate.propTypes = propTypes;

export default FormRate;
