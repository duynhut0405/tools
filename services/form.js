import request from '../utils/request';

const getFormbuilderByIdService = id => {
  return request({
    url: `/forms/${id}`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

const sendMailService = data => {
  return request({
    url: `/forms/send`,
    method: 'POST',
    data
  });
};
export { getFormbuilderByIdService, sendMailService };
