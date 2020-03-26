import request from '../utils/request';

const getCategoryByIdService = id => {
  return request({
    url: `/categorys/${id}`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

const getFullCategoryByIdService = id => {
  return request({
    url: `/categorys/find/${id}`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};
export { getCategoryByIdService, getFullCategoryByIdService };
