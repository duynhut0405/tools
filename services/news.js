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

const getNewByIdService = (data, categoriesId, count) => {
  return request({
    url: `/news/ids?categoryId=${categoriesId}&count=${count}`,
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

const findAllByCategory = (id, page, number, year) => {
  return request({
    url: `/news/findallbycategoryandyear/${id}?number=${number}&page=${page}&year=${year}`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

const getNewsByCategorySlug = (slug, data) => {
  return request({
    url: `/news/findallbyslugcategory/${slug}`,
    method: 'GET',
    params: data
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
  findAllByCategory,
  getNewsByCategorySlug
};
