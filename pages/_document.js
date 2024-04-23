/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags}
          <meta name="author" content="Umer Sacirovic" />
          <meta name="keywords" content="Umer Sacirovic" />
          <meta property="og:locale" content="en-US" />
          <meta property="og:type" content="website" />
          <meta
            name="description"
            content="Hi, I&#x27;m Umer Sacirovic, Frontend developer, UX architect, and JavaScript engineer."
          />
          <meta
            property="og:description"
            content="Hi, I&#x27;m Umer Sacirovic, Frontend developer, UX architect, and JavaScript engineer."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="twitter:site" content="@code_wonders" />
          <meta
            name="twitter:image"
            content="https://i.ibb.co/SxxqTRk/Mac-Book-Pro-16-10.png"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link rel="preconnect" href="https://i.ibb.co/" crossOrigin />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <link rel="icon" href="/favicon.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="robots" content="index, nofollow" />
          <link
            rel="author"
            href="https://lh3.googleusercontent.com/KUg3rbUWiVpV83Sdsy5FcsGeOlpcOgi1o3wLhcZGmGkjDmWCj4Hh4kLEEn_1b4dGsm9hzW7lGGvEsUpH2wpCRk9vlfod3ojbJyG7Rdb3ViBaBric9MwvP6J422dIifjzdT4gMJdKkWB4TIlfouuwVm9lxBgxoXEoGm3yiF7xMtFPNIEOTbbgG-WcV6I6jGhLj4AKoRJS_M2g2m5g132WKRTgWSLO4D4sL05lRPAATNq2h3bD72vFGm_Zk-r53dJGBe7FlHIcTV6rU85XD7wwF5sKtmddNbO9nbKg1L-W5pGcU-Ntvx9ayUmxMmGck0FXhf3saN6Qys_dh_C31jy1StMNeceswq1cH8712PvVmca1uNircDdNUbgKIstcn2Q3Egw1w_P5fJ17H6Ru7ZB8gmgEtivx8enUeE_TknyYz37p71GEGCg9-E2m5bl9YaUNTnODjQ2Lh8xeXYnsnCFkvw-XTlWFi799mxtjQFbPK32oAbV728dCld7eB8oTcvB4msAah-hukPKOr83q4GeiZlUe-w_L9hXzFDXF5d86CQbD7ypeUnlhdMaZi8KXOXrkEUMD_njXWSFEh9Xdcnt87Yvkz7VqRxbDHUz4Nid5oiUFAYtUgV917fg1PHroY1Iy0R3g97GXAxHsVc0PfzKLcKgZvoDVURscN8jlpDvbwGfiJ_4HwRHFRys=w1080-h1440-no"
          />
          <meta property="og:title" content="Umer Sacirovic" />
          <meta property="og:url" content="https://umersacirovic.me" />
          <meta
            property="og:image"
            content="https://i.ibb.co/SxxqTRk/Mac-Book-Pro-16-10.png"
          />
          <meta name="next-head-count" content="21" />
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
              
              @font-face{
                font-family:'Blorado';
                src:url("/fonts/NeurialGrotesk-Extrabold.otf");
                font-weight:bold;
                font-display:swap;
                font-style:normal
              }
              
              @font-face{
                font-family:'Blorado';
                src:url("/fonts/NeurialGrotesk-Regular.otf");
                font-weight:normal;
                font-display:swap;
                font-style:normal
              }
              @font-face{
                font-family:'Blorado';
                src:url("/fonts/NeurialGrotesk-Medium.otf");
                font-weight:500;
                font-display:swap;
                font-style:normal
              }
              @font-face{
                font-family:'Blorado';
                src:url("/fonts/NeurialGrotesk-Bold.otf");
                font-weight:600;
                font-display:swap;
                font-style:normal
              }
            `,
            }}
          />
          <link rel="stylesheet" href="/css/normalize.css" />
          <link rel="stylesheet" href="/css/base.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
