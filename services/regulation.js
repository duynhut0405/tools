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
      return error.response;
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
      return error.response;
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
      return error.response;
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
      return error.response;
    });
};

const getRegulationPagation = (type, year, number, page) => {
  return request({
    url: `/regulation/pagination/${type}/${year}?number=${number}&page=${page}`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
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
      return error.response;
    });
};

const getAllYear = () => {
  return request({
    url: `regulation/year`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

export {
  fillRegulationServices,
  getTypeRegulationServices,
  getUrlVideoService,
  getRegulationPagation,
  getRegulationListYear,
  getTypeRegulationByIDServices,
  getAllYear
};
