import React, { useEffect } from 'react';
import Layout from '../components/layout';
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

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.dataLayer.push({
      event: 'pageview'
    });
  }, []);

  return (
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
  );
}

export default MyApp;
