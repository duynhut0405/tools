const axios = require('axios');

const request = axios.create({
  baseURL: 'https://ACB3.mangoads.com.vn:8443/vi/api/fe',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

const _request = axios.create({
  baseURL: 'https://ACB3.mangoads.com.vn:8443/en/api/fe',
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

const getRouterEN = () => {
  return _request({
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

const getNewRouterEN = () => {
  return _request({
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

const getCategoryRouteEN = () => {
  return _request({
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

module.exports = {
  getRouer,
  getNewRouter,
  getCategoryRouter,
  getRouterEN,
  getNewRouterEN,
  getCategoryRouteEN
};
