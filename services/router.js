const axios = require('axios');

const request = axios.create({
  baseURL: process.env.ROUTER_URL,
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
      return error.response;
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
      return error.response;
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
      return error.response;
    });
};

module.exports = { getRouer, getNewRouter, getCategoryRouter };
