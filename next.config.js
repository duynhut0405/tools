const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withFonts = require('nextjs-fonts');
const { getRouer, getNewRouter } = require('./services/router');

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
        return config;
      },
      exportPathMap: async function () {
        const res = await getRouer();
        const newResponse = await getNewRouter();
        // console.log(newResponse.data);
        // const newRouter = newResponse.data.reduce(
        //   (news, data) =>
        //     Object.assign({}, news, {
        //       [`news/${data.url}`]: { news: '/news/[...slug]' }
        //     }),
        //   {}
        // );
        const newRouter = newResponse.data.reduce(
          (pages, data) =>
            Object.assign({}, pages, {
              [`/news/${data.url}`]: { news: '/news/[...slug]' }
            }),
          {}
        );

        const router = res.data.reduce(
          (pages, data) =>
            Object.assign({}, pages, {
              [`/page/${data.slug}`]: { page: '/page/[...name]' }
            }),
          {}
        );
        const pageRouter = Object.assign({}, router, {
          '/': { page: '/' }
        });
        return Object.assign(newRouter, pageRouter);
      }
    })
  )
);
