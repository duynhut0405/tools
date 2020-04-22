const request = require('../utils/request');

const getStoreFont = name => {
  return request({
    url: `/common/${name}`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

module.exports = { getStoreFont };
