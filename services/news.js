import request from '../utils/request';
import requestLang from '../utils/requestLang';

const getNewService = () => {
  return request({
    url: '/news/isActive',
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

const getNewByUri = (lang, uri) => {
  return requestLang({
    url: `${lang}/api/fe/news/url/${uri}`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
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
      return error.response;
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
      return error.response;
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
      return error.response;
    });
};

const findAllNewsByCategory = (id, page, number) => {
  return request({
    url: `/news/findallbycategory/${id}?number=${number}&page=${page}`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
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
      return error.response;
    });
};

const getListYearNewsService = () => {
  return request({
    url: '/news/year',
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

const getListNewsTagPageService = data => {
  return request({
    url: '/pages/findallnews',
    method: 'POST',
    data
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};
export {
  getNewService,
  getNewByUri,
  getNewByIdService,
  getNewCategoryIdService,
  findAllByCategory,
  getNewsByCategorySlug,
  findAllNewsByCategory,
  getListYearNewsService,
  getListNewsTagPageService
};
