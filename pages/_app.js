import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import stores from '../store';
import { appWithTranslation } from '../i18n';
import '../styles/block.scss';
// import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css';
import '../styles/custom.css';
import '../styles/question.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-rangeslider/lib/index.css';

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

export default withRedux(stores)(withReduxSaga(appWithTranslation(NextApp)));
