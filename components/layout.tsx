import { Rubik } from "@next/font/google";
import cn from "classnames";
import Head from "next/head";
import personal from "../data/personal.json";
import { Footer } from "./footer";
import { Header } from "./header";

const rubik = Rubik({ subsets: ["latin"], display: "swap" });

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const pageTitle = `${personal.name.first} ${personal.name.last} \u2013 ${personal.tagline}`;

  return (
    <div
      className={cn(
        "mx-auto flex min-h-screen max-w-screen-sm flex-col px-4",
        rubik.className
      )}
    >
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={personal.tagline} />
      </Head>

      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
