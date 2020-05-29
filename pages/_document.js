import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { GtagNoscript, GtagScript } from '../components/gtm/gtag';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="application-name" content="MBBANK" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content={process.env.LINK_DOMAIN} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="MBBANK" />
          <script dangerouslySetInnerHTML={{ __html: 'history.scrollRestoration = "manual";' }} />
          <meta property="og:url" content={process.env.LINK_DOMAIN} />
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
