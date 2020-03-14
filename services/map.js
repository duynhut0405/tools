import axios from 'axios';
import request from '../utils/request';

const url = 'https://sapotacorp.com:8443/api';

const getProvinceService = () => {
  return axios({
    url: `${url}/province`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

const getDistrictService = id => {
  return axios({
    url: `${url}/district/${id}`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

const searchBranchesService = params => {
  return request({
    url: `/network/search`,
    method: 'GET',
    params: params
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};
export { getProvinceService, getDistrictService, searchBranchesService };