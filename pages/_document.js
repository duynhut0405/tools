import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { GtagNoscript, GtagScript } from '../components/gtm/gtag';
import { NonceProvider } from 'react-select';

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
          <Main />
          <NextScript />
          {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WDLL9G8"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> */}
          <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=GTM-WDLL9G8`}
          height="0"
          width="0"
          style={{display:"none", visibility:"hidden"}}
        />
      </noscript>
        <div id="fb-root"></div>
        <script async type="text/javascript" src="/main.js"></script>
        <div className="fb-customerchat"
          attribution="setup_tool"
          page_id="1555676601122727"
          logged_in_greeting="Xin chào, MB có thể hỗ trợ gì được cho bạn?"
          logged_out_greeting="Xin chào, MB có thể hỗ trợ gì được cho bạn?">
        </div>
        </body>
      </html>
    );
  }
}

export default MyDocument;
