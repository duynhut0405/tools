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

const getTypeRegulationByIDServices = id => {
  return request({
    url: `/regulation/type/${id}`,
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

const getRegulationPagation = (type, year, page) => {
  return request({
    url: `/regulation/pagination/${type}/${year}?number=10&page=${page}`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

const getRegulationListYear = (type, detailTypeId, number, page, year) => {
  return request({
    url: `/regulation/investors/${type}?detailTypeId=${detailTypeId}&number=${number}&page=${page}&year=${year}`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

export {
  fillRegulationServices,
  getTypeRegulationServices,
  getUrlVideoService,
  getRegulationPagation,
  getRegulationListYear,
  getTypeRegulationByIDServices
};
