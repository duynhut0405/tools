import vi from '../public/static/locales/vi/common.json';
import en from '../public/static/locales/en/common.json';
import { getLang } from '../utils/cookie';

function t(key) {
  const data = { vi: vi, en: en };
  const location = getLang();
  return data[location][key] || data.vi[key];
}

export default t;
