const axios = require('axios');
const { getLang } = require('./cookie');

const url = process.env.BASE_URL || 'https://mbbank3.mangoads.com.vn:8443';

const request = axios.create({
  baseURL: `${url}/${getLang()}/api/fe`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

// before send request
request.interceptors.request.use(
  config => {
    // const lang = getLang();
    // config.baseURL = `https://mbbank3.mangoads.com.vn:8443/${lang}/api/fe`;
    return config;
  },
  error => {
    return error;
  }
);

// after send request
request.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const response = JSON.parse(JSON.stringify(error));
    return response.response;
  }
);

module.exports = request;
