import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { GtagNoscript, GtagScript } from '../components/gtm/gtag';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <GtagScript />
        </Head>
        <body>
          <GtagNoscript />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
