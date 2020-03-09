import request from '../utils/request';

const getNewService = () => {
  return request({
    url: '/news/isActive',
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

const getNewByUri = uri => {
  return request({
    url: `/news/url/${uri}`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

const getNewByIdService = data => {
  return request({
    url: `/news/ids`,
    method: 'POST',
    data
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

const getNewCategoryIdService = id => {
  return request({
    url: `/news/category_is_active/${id}`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

const findAllByCategory = (id, page, year) => {
  return request({
    url: `/news/findallbycategoryandyear/${id}?number=9&page=${page}&${year}`,
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
  getNewService,
  getNewByUri,
  getNewByIdService,
  getNewCategoryIdService,
  findAllByCategory
};
