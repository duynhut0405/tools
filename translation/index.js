import vi from '../public/static/locales/vi/common.json';
import en from '../public/static/locales/en/common.json';

function t(lang, key) {
  const data = { vi: vi, en: en };
  return data[lang][key] || data[vi][key];
}

export default t;
