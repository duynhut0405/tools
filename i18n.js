import NextI18Next from 'next-i18next';
import { getLang } from './utils/cookie';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'vi',
  lng: getLang(),
  otherLanguages: ['vi', 'en'],
  localeSubpaths: {
    vi: 'vi',
    en: 'en'
  }
});

// NextI18NextInstance.i

export default NextI18NextInstance;

/* Optionally, export class methods as named exports */
export const { appWithTranslation, withTranslation } = NextI18NextInstance;
