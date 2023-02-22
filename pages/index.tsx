import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";
import { WorkCard } from "../components/work-card";
import { getWorksData } from "../lib/fetch";

const WORK_CARD_DISPLAY_LIMIT = 2;

export default function Home({
  works,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation(["common", "home"]);

  return (
    <>
      <section className="flex flex-col items-center gap-4 py-8 sm:flex-row sm:justify-center sm:gap-8">
        <Image
          src="/avatar.jpeg"
          alt={t("common:name.full")}
          width={128}
          height={128}
          className="rounded-full"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-medium sm:text-4xl">
            {t("home:greeting")}
          </h1>
          <p className="text-lg sm:text-xl">{t("home:tagline")}</p>
        </div>
      </section>

      <section className="space-y-2 py-4">
        <h2 className="text-2xl font-medium sm:text-3xl">
          {t("home:about.title")}
        </h2>
        <div className="space-y-4">
          {t("home:about.content", { returnObjects: true }).map((content) => (
            <p key={content}>{content}</p>
          ))}
        </div>
      </section>

      <section className="space-y-4 py-4">
        <h2 className="text-2xl font-medium sm:text-3xl">
          {t("home:works.title")}
        </h2>
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
        <div className="flex justify-center pt-4">
          <Link
            href="/works"
            className="rounded bg-stone-200 px-3 py-1.5 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700"
          >
            {t("home:works.view-more")}
          </Link>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common", "home"])),
      works: getWorksData(WORK_CARD_DISPLAY_LIMIT),
    },
  };
}
