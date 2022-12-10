import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
        <link
          rel="apple-touch-icon"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          href="/static/favicons/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/static/favicons/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <meta content="#FFFFFF" name="theme-color" />
      </Head>
      <body>
        <Script src="/init-theme.js" strategy="beforeInteractive" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
