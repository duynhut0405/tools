import request from '../utils/request';

const getRateService = () => {
  return request({
    url: '/exchange_rate',
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

export { getRateService };
