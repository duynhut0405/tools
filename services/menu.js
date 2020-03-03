import request from '../utils/request';

const getAllMenu = () => {
  return request({
    url: '/menu',
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
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
      return error.response.data;
    });
};

const getSettingFooterService = () => {
  return request({
    url: `/common/general`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

const getSocialLinkService = () => {
  return request({
    url: `/common/socialLink`,
    method: 'GET'
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};

const getMenuItemByPosition = data => {
  return request({
    url: `menu/position/${data}`,
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
  getAllMenu,
  getMenuItemById,
  getSettingFooterService,
  getSocialLinkService,
  getMenuItemByPosition
};
