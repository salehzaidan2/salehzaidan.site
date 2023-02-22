import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { WorkCard } from "../../components/work-card";
import { getWorksData } from "../../lib/fetch";

export default function Works({
  works,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation(["common", "works"]);
  const pageTitle = `Works \u2013 ${t("common:name.full")}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <section className="space-y-4 pt-4">
        <h1 className="text-2xl font-medium sm:text-3xl">{t("works:title")}</h1>
        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2">
          {works.map((work) => (
            <WorkCard
              key={work.slug}
              slug={work.slug}
              name={work.name}
              description={work.description}
              thumbnail={work.images[0]}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common", "works"])),
      works: getWorksData(),
    },
  };
}
