import { GetStaticPropsContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  const { t } = useTranslation();
  const pageTitle = `404: ${t("404.message")} \u2013 ${t("name.full")}`;

  return (
    <div className="flex grow flex-col items-center justify-center gap-4">
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-medium">404</h1>
        <div>{t("404.message")}</div>
      </div>
      <button
        onClick={router.back}
        className="rounded bg-stone-200 px-3 py-1.5 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700"
      >
        &larr; {t("404.back")}
      </button>
    </div>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
}
