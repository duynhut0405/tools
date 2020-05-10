import {
  getMenuItemByPosition,
  getSettingFooterService,
  getSocialLinkService
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

export const getMemnu = async (lang, postion) => {
  let data = [];
  const res = await getMenuItemByPosition(lang, postion);
  if (res && res !== undefined && res.status === 200) {
    data = nested(res.data.menuItems);
  }
  return data;
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
