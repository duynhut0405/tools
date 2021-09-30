import request from '../utils/request';
import requestLang from '../utils/requestLang';

const getPageService = name => {
  return request({
    url: `/pages/name?name=${name}`,
    method: 'POST'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

const getPagesByIdService = data => {
  return request({
    url: '/pages/ids',
    method: 'POST',
    data
  });
};

const getListPageBySlug = data => {
  return request({
    url: '/pages/slugs',
    method: 'POST',
    data
  });
};

const getPageMutiLangBySlug = (lang, name) => {
  const lastChar = name.substr(name.length - 1);
  return requestLang({
    url: `${lang}/api/fe/pages/name?name=${lastChar === '/' ? name.slice(0, -1) : name}`,
    method: 'POST'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

export { getPageService, getPagesByIdService, getListPageBySlug, getPageMutiLangBySlug };
