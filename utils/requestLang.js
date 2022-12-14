const axios = require('axios');

const url = process.env.BASE_URL || 'https://ACB3.mangoads.com.vn:8443';

const request = axios.create({
  baseURL: `${url}/`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

// before send request
request.interceptors.request.use(
  config => {
              // const lang = getLang();
              // config.baseURL = `https://ACB3.mangoads.com.vn:8443/${getLang()}/api/fe`;
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
