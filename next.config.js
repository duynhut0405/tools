const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withFonts = require('nextjs-fonts');
const withPWA = require('next-pwa');
const {
  getRouer,
  getNewRouter,
  getCategoryRouter,
  getCategoryRouteEN,
  getNewRouterEN,
  getRouterEN
} = require('./services/router');

module.exports = withPWA(
  withFonts(
    withCSS(
      withSass({
        // eslint-disable-next-line no-unused-vars
        webpack(config, options) {
          config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 1000000
              }
            }
          });
          return {
            ...config,
            node: {
              fs: 'empty'
            }
          };
        },
        env: {
          DOMAIN: 'https://mbbank3.mangoads.com.vn:8443/',
          LINK_DOMAIN: 'mbbank.com.vn',
          BASE_URL: 'https://mbbank3.mangoads.com.vn:8443',
          MB_URL: 'https://api2.vietstock.vn/data/stocktradinginfo',
          MAP_URL: 'https://mbbank3.mangoads.com.vn:8443/api/fe',
          ROUTER_URL: 'https://mbbank3.mangoads.com.vn:8443/vi/api/fe',
          FRONTEND_URL: 'https://mbbank6.mangoads.com.vn/',
          FRONTEND_URL_LOAN: 'https://mbbank6.mangoads.com.vn',
          LANDING_PAGE_URL:
            'http://localhost:8088/mockMBSOABussinessSupport_HumanResourceManagement_EmployeeDataManagement_Inbound_Service_WebService_Provider_getCRMRmInfoByMobile_v1_0_Binder',
          LANDING_PAGE_URL_2:
            'http://Vus-Van-iMac.local:8088/mockMBSOASalesAndService2_Marketing_CustomerSurveys_Inbound_Service_WebService_Provider_createCRMLandingPageUser_v1_0_Binder'
        },
        exportTrailingSlash: true,
        pwa: {
          dest: 'public'
        },
        exportPathMap: async function() {
          let router = [];
          let newRouter = [];
          let categoryRouter = [];
          let routerEN = [];
          let newRouterEN = [];
          let categoryRouterEN = [];

          const res = await getRouer();
          if (res && res !== undefined && res.status === 200) {
            router = res.data.reduce((pages, data) => {
              let slug = `/page/${data.slug}`.replace(/\/\//g, '/');
              return Object.assign({}, pages, {
                [slug]: { page: '/page/[...name]' }
              });
            }, {});
          }

          const resEN = await getRouterEN();
          if (resEN && resEN !== undefined && resEN.status === 200) {
            routerEN = resEN.data.reduce((pages, data) => {
              const slug = `/en/page/${data.slug}`.replace(/\/\//g, '/');
              return Object.assign({}, pages, {
                [slug]: { page: '/en/page/[...name]' }
              });
            }, {});
          }

          const newResponse = await getNewRouter();
          if (newResponse && newResponse !== undefined && newResponse.status === 200) {
            newRouter = newResponse.data.reduce((pages, data) => {
              const slug = `/news/${data.url}`.replace(/\/\//g, '/');
              return Object.assign({}, pages, {
                [slug]: { page: '/news/[...slug]' }
              });
            }, {});
          }

          const newResponseEN = await getNewRouterEN();
          if (newResponseEN && newResponseEN !== undefined && newResponseEN.status === 200) {
            newRouterEN = newResponseEN.data.reduce((pages, data) => {
              const slug = `/en/news/${data.url}`.replace(/\/\//g, '/');
              return Object.assign({}, pages, {
                [slug]: { page: '/en/news/[...slug]' }
              });
            }, {});
          }

          const categoryResponse = await getCategoryRouter();
          if (
            categoryResponse &&
            categoryResponse !== undefined &&
            categoryResponse.status === 200
          ) {
            categoryRouter = categoryResponse.data.reduce((pages, category) => {
              const slug = `/news/category/${category.slug}`.replace(/\/\//g, '/');
              return Object.assign({}, pages, {
                [slug]: { page: '/news/category/[...name]' }
              });
            }, {});
          }

          const categoryResponseEN = await getCategoryRouteEN();
          if (
            categoryResponseEN &&
            categoryResponseEN !== undefined &&
            categoryResponseEN.status === 200
          ) {
            categoryRouterEN = categoryResponseEN.data.reduce((pages, category) => {
              const slug = `/en/news/category/${category.slug}`.replace(/\/\//g, '/');
              return Object.assign({}, pages, {
                [slug]: { page: '/en/news/category/[...name]' }
              });
            }, {});
          }

          let pageRouter = Object.assign({}, router, {
            '/': { page: '/' },
            '/search': { page: '/search' },
            '/register': { page: '/register' },
            '/en': { page: '/en' },
            '/en/search': { page: '/en/search' },
            '/en/register': { page: '/en/register' }
          });

          pageRouter = Object.assign(
            pageRouter,
            categoryRouter,
            routerEN,
            newRouterEN,
            categoryRouterEN
          );
          return Object.assign(newRouter, pageRouter);
        }
      })
    )
  )
);
