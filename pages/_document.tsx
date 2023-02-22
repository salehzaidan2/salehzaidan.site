import {
  Head,
  Html,
  Main,
  NextScript,
  type DocumentProps,
} from "next/document";
import i18nextConfig from "../next-i18next.config";

export default function Document(props: DocumentProps) {
  return (
    <Html lang={props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale}>
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
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/init-theme.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
