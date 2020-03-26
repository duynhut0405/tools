const axios = require('axios');

const request = axios.create({
  baseURL: 'https://api2.vietstock.vn/data/stocktradinginfo',
  crossDomain: true,
  headers: { 'Access-Control-Allow-Origin': '*' }
});

export const getStockServices = () => {
  return request({
    method: 'GET',
    params: {
      code: 'MBB',
      status: 1,
      token: '2AADD549-06F5-4FEC-BAA8-A8F39D9C381F'
    }
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};
