import request from '../utils/request';
import requestLang from '../utils/requestLang';

const getAllMenu = () => {
  return request({
    url: '/menu',
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

const getMenuItemById = menuId => {
  return request({
    url: `/menu/${menuId}/menuItem`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

const getSettingFooterService = lang => {
  return requestLang({
    url: `${lang}/api/fe/common/general`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

const getSocialLinkService = lang => {
  return requestLang({
    url: `${lang}/api/fe/common/socialLink`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

const getMenuItemByPosition = lang => {
  return requestLang({
    url: `${lang}/api/fe/menu/findAllByListPosition`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

const getCommonService = lang => {
  return requestLang({
    url: `${lang}/api/fe/common`,
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
  getAllMenu,
  getMenuItemById,
  getSettingFooterService,
  getSocialLinkService,
  getMenuItemByPosition,
  getCommonService
};
