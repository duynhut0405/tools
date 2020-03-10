import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'vi',
  lng: 'vi',
  otherLanguages: ['en'],
  localeSubpaths: {
    vi: 'vi',
    en: 'en'
  }
});

// NextI18NextInstance.i

export default NextI18NextInstance;

/* Optionally, export class methods as named exports */
export const { appWithTranslation, withTranslation } = NextI18NextInstance;
