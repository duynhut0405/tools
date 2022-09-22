module.exports = {
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
  async redirects() {
    return [
      {
        source: '/tool',
        destination: '/tool/1',
        permanent: true
      }
    ];
  },
  env: {
    DOMAIN: 'https://157.230.47.241:8443/',
    LINK_DOMAIN: 'ACB.com.vn',
    BASE_URL: 'https://157.230.47.241:8443',
    MB_URL: 'https://api2.vietstock.vn/data/stocktradinginfo',
    MAP_URL: 'https://157.230.47.241:8443/api/fe',
    ROUTER_URL: 'https://157.230.47.241:8443/vi/api/fe',
    FRONTEND_URL: 'https://ACB6.mangoads.com.vn/',
    FRONTEND_URL_LOAN: 'https://ACB6.mangoads.com.vn',
    LANDING_PAGE_URL:
      'http://localhost:8088/mockMBSOABussinessSupport_HumanResourceManagement_EmployeeDataManagement_Inbound_Service_WebService_Provider_getCRMRmInfoByMobile_v1_0_Binder',
    LANDING_PAGE_URL_2:
      'http://Vus-Van-iMac.local:8088/mockMBSOASalesAndService2_Marketing_CustomerSurveys_Inbound_Service_WebService_Provider_createCRMLandingPageUser_v1_0_Binder'
  }
};
