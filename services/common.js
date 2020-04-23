import request from '../utils/request';

const searchService = query => {
  return request({
    url: `/common/search`,
    method: 'GET',
    params: query
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

export { searchService };
