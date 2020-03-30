import axios from 'axios';
import request from '../utils/request';

const url = 'https://mbbank3.mangoads.com.vn:8443/api';

const getProvinceService = () => {
  return axios({
    url: `${url}/province`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
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
      return error.response;
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
      return error.response;
    });
};
export { getProvinceService, getDistrictService, searchBranchesService };
