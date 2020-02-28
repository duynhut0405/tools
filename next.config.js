const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const { getRouer } = require('./services/router');

module.exports = withCSS(
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
    }
  })
);

module.exports = {
  exportPathMap: async function() {
    const res = await getRouer();

    const router = res.data.reduce(
      (pages, data) =>
        Object.assign({}, pages, {
          [`/page/${data.slug}`]: { page: '/page/[name]' }
        }),
      {}
    );
    return Object.assign({}, router, {
      '/': { page: '/' }
    });
  }
};
