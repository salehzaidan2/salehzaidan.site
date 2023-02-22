import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import { ThemeProvider } from "../lib/theme";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
