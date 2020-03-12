import request from '../utils/request';

const getPageService = name => {
  return request({
    url: `/pages/name?name=${name}`,
    method: 'POST'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

const getPagesByIdService = data => {
  return request({
    url: '/pages/ids',
    method: 'POST',
    data
  });
};

export { getPageService, getPagesByIdService };
