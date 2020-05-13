import App from 'next/app';
import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import stores from '../store';
import '../styles/block.scss';
import '../styles/styles.css';
import '../styles/custom.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-multi-carousel/lib/styles.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class NextApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    // const router = useRouter();
    // console.log(router);
    // const menuHeader = await getMemnu('top_top');
    // const menuNav = await getMemnu('top2');
    // const menuFooterTop = await getMemnu('Menu footer top');
    // const menuFooterMain = await getMemnu('Menu footer main');
    // const menuFooterBottom = await getMemnu('menu footer bottom');
    // const menuSearch = await getMemnu('menu search');
    // const setting = await getSetting();
    // const socialLink = await getSocialLink();

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }
    return {
      pageProps
      // menuHeader,
      // menuNav,
      // menuSearch,
      // menuFooterTop,
      // menuFooterMain,
      // menuFooterBottom,
      // setting,
      // socialLink
    };
  }
  render() {
    const {
      Component,
      pageProps,
      store
      // menuHeader,
      // menuNav,
      // menuSearch,
      // menuFooterTop,
      // menuFooterMain,
      // menuFooterBottom,
      // setting,
      // socialLink
    } = this.props;
    return (
      <Provider store={store}>
        {/* <Layout
          menuHeader={menuHeader}
          menuNav={menuNav}
          menuSearch={menuSearch}
          menuFooterTop={menuFooterTop}
          menuFooterMain={menuFooterMain}
          menuFooterBottom={menuFooterBottom}
          settingFooter={setting.general}
          socialLink={socialLink.socialLink}
        > */}
        <Component {...pageProps}></Component>
        {/* </Layout> */}
      </Provider>
    );
  }
}

export default withRedux(stores)(NextApp);
