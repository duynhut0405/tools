const NextI18Next = require('next-i18next').default;
// const { getLang } = require('./utils/cookie');

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'vi',
  otherLanguages: ['vi', 'en'],
  localeSubpaths: {
    en: 'en'
  }
});

module.exports = NextI18NextInstance;
