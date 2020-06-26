import App from 'next/app';
import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
// import { Provider } from 'react-redux';
// import withRedux from 'next-redux-wrapper';
// import stores from '../store';
import Layout from '../components/layout';
import '../styles/block.scss';
import '../styles/styles.css';
import '../styles/custom.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-multi-carousel/lib/styles.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'react-datepicker/dist/react-datepicker.css';
import 'lazysizes/plugins/attrchange/ls.attrchange';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class NextApp extends App {
  componentDidMount() {
    Router.beforePopState(({ as }) => {
      location.href = as;
    });
  }
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }
    return {
      pageProps
    };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
      // </Provider>
    );
  }
}

export default NextApp;
