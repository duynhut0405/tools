const Cookies = require('js-cookie');

const getLang = () => {
  const lang = Cookies.get('lang');
  if (lang) {
    return lang;
  }
  return 'vi';
};

const getFlag = () => {
  const flag = Cookies.get('flag');
  if (flag) {
    return flag;
  }

  return 'vn';
};

const setLang = (lang, flag) => {
  if (lang) {
    Cookies.set('flag', flag);
    Cookies.set('lang', lang);
    return Cookies.set('lang', lang);
  }
  return null;
};

module.exports = { getLang, getFlag, setLang };
