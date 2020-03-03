import request from '../utils/request';

const getTypeRegulationServices = () => {
  return request({
    url: `/regulation/type`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

const fillRegulationServices = data => {
  return request({
    url: `/regulation/search`,
    method: 'POST',
    data: data
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};
const getUrlVideoService = data => {
  return request({
    url: `/regulation/url/${data}`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

export { fillRegulationServices, getTypeRegulationServices, getUrlVideoService };
