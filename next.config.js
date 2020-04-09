const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withFonts = require('nextjs-fonts');
const { getRouer, getNewRouter, getCategoryRouter } = require('./services/router');

module.exports = withFonts(
  withCSS(
    withSass({
      webpack(config, options) {
        config.module.rules.push({
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000
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
        DOMAIN: 'https://mbbank3.mangoads.com.vn:8443/'
      }
      exportPathMap: async function() {
        let router = [];
        let newRouter = [];
        let categoryRouter = [];

        const res = await getRouer();
        if (res && res !== undefined && res.status === 200) {
          router = res.data.reduce(
            (pages, data) =>
              Object.assign({}, pages, {
                [`/page/${data.slug}`]: { page: '/page/[...name]' }
              }),
            {}
          );
        }

        const newResponse = await getNewRouter();
        if (newResponse && newResponse !== undefined && newResponse.status === 200) {
          newRouter = newResponse.data.reduce(
            (pages, data) =>
              Object.assign({}, pages, {
                [`/news/${data.url}`]: { page: '/news/[...slug]' }
              }),
            {}
          );
        }

        const categoryResponse = await getCategoryRouter();
        if (categoryResponse && categoryResponse !== undefined && categoryResponse.status === 200) {
          categoryRouter = categoryResponse.data.reduce(
            (pages, category) =>
              Object.assign({}, pages, {
                [`/news/category/${category.slug}`]: { page: '/news/category/[...name]' }
              }),
            {}
          );
        }

        let pageRouter = Object.assign({}, router, {
          '/': { page: '/' }
        });

        pageRouter = Object.assign(pageRouter, categoryRouter);
        return Object.assign(newRouter, pageRouter);
      }
    })
  )
);
