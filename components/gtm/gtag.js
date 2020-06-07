import * as React from 'react';
import { getStoreFont } from '../../services/storefont';

let GA_TRACKING_ID = 'N5VC4R5';

getStoreFont('gtmId').then(res => {
  if (res && res !== undefined && res.status === 200) {
    GA_TRACKING_ID = res.data.gtmId.id;
  }
});

export const GtagScript = () => {
  return (
    <>
      <script async data-src={`https://www.googletagmanager.com/gtm.js?id=GTM-${GA_TRACKING_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.data-src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-${GA_TRACKING_ID}');`
        }}
      />
    </>
  );
};

const style = {
  display: 'none',
  visibility: 'hidden'
};

export const GtagNoscript = () => (
  <>
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=GTM-WJ5ZZB`}
        height="0"
        width="0"
        style={style}
      />
    </noscript>
  </>
);
