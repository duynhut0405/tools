import request from '../utils/request';

const getRateService = () => {
  return request({
    url: '/exchange_rate/news/',
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

const getInterestRateService = () => {
  return request({
    url: '/interest_rate',
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

const searchRate = query => {
  return request({
    url: '/exchange_rate/search',
    method: 'GET',
    params: query
  })
    .then(res => {
      console.log("Avav",res)
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

const getRate = () => {
  return request({
    url: '/interest_rate',
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

export { getRateService, searchRate, getInterestRateService, getRate };
