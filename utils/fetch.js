import {
  getMenuItemByPosition,
  getSettingFooterService,
  getSocialLinkService,
  getCommonService
} from '../services/menu';
// import { getPageBySlug } from '../services/page.services';
// import { getRateService } from '../services/rate.services';
// import filter from 'lodash/filter';

const nested = (data, id = null, link = 'parentId') => {
  return data
    .filter(item => item[link] === id)
    .map(item => ({
      ...item,
      title: `${item.name}`,
      children: nested(
        data.sort((a, b) => a.position - b.position),
        item.id
      )
    }));
};

const findMenu = (data, name) => {
  if (data) {
    const menu = data.find(item => item.position === name);
    if (menu) {
      return nested(menu.menuItems);
    }
    return null;
  }
  return null;
};

const fetchMenu = data => {
  const _menuHeader = findMenu(data, 'top_top');
  const _menuNav = findMenu(data, 'top2');
  const _menuFooterTop = findMenu(data, 'Menu footer top');
  const _menuFooterMain = findMenu(data, 'Menu footer main');
  const _menuFooterBottom = findMenu(data, 'menu footer bottom');
  const _menuSearch = findMenu(data, 'menu search');
  const _menuMobile = findMenu(data, 'menu-mobile');

  let menuHeader = [];
  let menuNav = [];
  let menuFooterTop = [];
  let menuFooterMain = [];
  let menuFooterBottom = [];
  let menuSearch = [];
  let menuMobile = [];

  if (_menuHeader) {
    menuHeader = _menuHeader;
  }
  if (_menuNav) {
    menuNav = _menuNav;
  }
  if (_menuSearch) {
    menuSearch = _menuSearch;
  }
  if (_menuFooterTop) {
    menuFooterTop = _menuFooterTop;
  }
  if (_menuFooterBottom) {
    menuFooterBottom = _menuFooterBottom;
  }
  if (_menuFooterMain) {
    menuFooterMain = _menuFooterMain;
  }
  if (_menuMobile) {
    menuMobile = _menuMobile;
  }
  return {
    menuHeader,
    menuNav,
    menuFooterTop,
    menuFooterMain,
    menuFooterBottom,
    menuSearch,
    menuMobile
  };
};

export const getMemnu = async lang => {
  let data = [];
  const res = await getMenuItemByPosition(lang);
  if (res && res !== undefined && res.status === 200) {
    data = res.data;
  }
  return fetchMenu(data);
};

export const getSetting = async lang => {
  let data = {};
  const res = await getSettingFooterService(lang);
  if (res && res !== undefined && res.status === 200) {
    data = res.data;
  }
  return data;
};

export const getSocialLink = async lang => {
  let data = {};
  const res = await getSocialLinkService(lang);
  if (res && res !== undefined && res.status === 200) {
    data = res.data;
  }
  return data;
};

export const getCommon = async lang => {
  let data = {};
  const res = await getCommonService(lang);
  if (res && res !== undefined && res.status === 200) {
    data = res.data;
  }
  return data;
};

// export const getPage = async slug => {
//   let data = {};
//   let silder = [];
//   const res = await getPageBySlug(slug);
//   if (res && res !== undefined && res.status === 200) {
//     data = res.data;
//     const silderData = filter(res.data.pageBlocks, item => item.name === 'Silder');
//     for (let i = 0; i < silderData.length; i++) {
//       if (silderData[i].content !== null) {
//         silder = [...silder, ...JSON.parse(silderData[i].content)];
//       }
//     }
//   }
//   return { data, silder };
// };

// export const getRate = async () => {
//   let data = [];
//   const res = await getRateService();
//   if (res && res !== undefined && res.status === 200) {
//     data = res.data;
//   }
//   return data;
// };
