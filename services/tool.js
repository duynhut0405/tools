import request from '../utils/request';

const searchGuarantee = data => {
  return request({
    url: '/mb-online/search/',
    method: 'POST',
    data: data
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

export { searchGuarantee };
