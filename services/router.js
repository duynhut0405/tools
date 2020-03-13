const axios = require('axios');

const request = axios.create({
  baseURL: 'https://sapotacorp.com:8443/vi/api/fe',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

const getRouer = () => {
  return request({
    url: `/pages`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

const getNewRouter = () => {
  return request({
    url: `/news/findallnotpagination`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

const getCategoryRouter = () => {
  return request({
    url: `/categorys`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

module.exports = { getRouer, getNewRouter, getCategoryRouter };
