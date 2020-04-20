import Cookies from 'js-cookie';

export const getLang = () => {
  const lang = Cookies.get('lang');
  if (lang) {
    return lang;
  }
  return 'vi';
};

export const getFlag = () => {
  const flag = Cookies.get('flag');
  if (flag) {
    return flag;
  }

  return 'vn';
};

export const setLang = (lang, flag) => {
  if (lang) {
    Cookies.set('flag', flag);
    Cookies.set('lang', lang);
    return Cookies.set('lang', lang);
  }
  return null;
};
