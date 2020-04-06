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
      return error.response;
    });
};

const getPagesByIdService = data => {
  return request({
    url: '/pages/ids',
    method: 'POST',
    data
  });
};

const getListPageBySlug = data => {
  return request({
    url: '/pages/slugs',
    method: 'POST',
    data
  });
};

export { getPageService, getPagesByIdService, getListPageBySlug };
