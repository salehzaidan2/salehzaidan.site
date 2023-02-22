import { Rubik } from "@next/font/google";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { Footer } from "./footer";
import { Header } from "./header";

const rubik = Rubik({ subsets: ["latin"], display: "swap" });

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const { t } = useTranslation();
  const pageTitle = `${t("name.full")} \u2013 ${t("tagline")}`;

  return (
    <div
      className={cn(
        "mx-auto flex min-h-screen max-w-screen-sm flex-col px-4",
        rubik.className
      )}
    >
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={t("tagline")} />
      </Head>

      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
}
