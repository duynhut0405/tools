import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import stores from '../store';
import { appWithTranslation } from '../i18n';
import '../styles/block.scss';
// import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css';
import '../styles/custom.css';
import '../styles/question.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-rangeslider/lib/index.css';
import fs from 'fs';
import { getStoreFont } from '../services/storefont';

class NextApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    let file = '';
    const res = await getStoreFont('robots');
    if (res && res !== undefined && res.status === 200) {
      file = res.data.robots.text;
    }
    fs.open('public/robots.txt', 'a+', (err, fd) => {
      if (err) {
        return err;
      }
      fs.writeFile('public/robots.txt', file, err => {
        if (err) {
          return err;
        }
      });
      fs.close(fd, err => {
        if (err) {
          return err;
        }
      });
    });
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
