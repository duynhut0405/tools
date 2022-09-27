import React, { useEffect } from 'react';
import Layout from '../components/layout';
import 'antd/dist/antd.css';
import '../styles/block.scss';
import '../styles/styles.css';
import '../styles/custom.css';
import '../components/block/formStepClient/Printer/styles.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-multi-carousel/lib/styles.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'react-datepicker/dist/react-datepicker.css';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Router } from 'next/router';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Router.events.on('routeChangeComplete', () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
  }, []);

  return (
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
  );
}

export default MyApp;
