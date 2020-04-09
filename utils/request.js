import axios from 'axios';
import { getLang } from './cookie';

const request = axios.create({
  baseURL: `https://mbbank3.mangoads.com.vn:8443/${getLang()}/api/fe`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

// before send request
request.interceptors.request.use(
  config => {
    // const lang = getLang();
    // config.baseURL = `mbbank3.mangoads.com.vn:8443/${getLang()}/api/fe`;
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

export default request;
