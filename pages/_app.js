import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import stores from '../store';
import { appWithTranslation } from '../i18n';
import '../styles/block.scss';
import '../styles/styles.css';
import '../styles/custom.css';
import '../styles/question.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-rangeslider/lib/index.css';
import 'react-multi-carousel/lib/styles.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class NextApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps}></Component>
      </Provider>
    );
  }
}

export default withRedux(stores)(appWithTranslation(NextApp));
