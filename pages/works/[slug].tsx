import type {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { getWorkData, getWorksSlug } from "../../lib/fetch";
import { i18n } from "../../next-i18next.config";

export default function WorkDetail({
  work,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const { t } = useTranslation();
  const pageTitle = `${work.name} \u2013 ${t("name.full")}`;
  const locale = router.locale ?? "en";
  const formattedDate = new Date(work.date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
  });
  const description = work.description[locale] ?? work.description["en"];

  return (
    <div className="space-y-8">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
      </Head>

      <section className="space-y-4 pt-4">
        <h1 className="text-2xl font-medium sm:text-3xl">{work.name}</h1>
        <div className="space-y-2">
          <p>{description}</p>
          <div className="flex items-baseline gap-8">
            <p className="whitespace-nowrap text-sm font-medium">
              {formattedDate}
            </p>
            <ul className="flex flex-wrap items-start gap-2">
              {work.stack.map((item) => (
                <li
                  key={item}
                  className="whitespace-nowrap rounded bg-stone-200 px-2 py-0.5 text-sm dark:bg-stone-800"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        {work.images.map((image) => (
          <div key={image.url}>
            <h2 className="rounded-t-md bg-stone-200 py-1 px-2 text-sm dark:bg-stone-800">
              {image.name}
            </h2>
            <Image
              src={`/static/images/${work.slug}/${image.url}`}
              alt={image.name}
              width={608}
              height={608}
              className="shadow-xl"
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export function getStaticPaths() {
  const slugs = getWorksSlug();
  const pathsByLocale = i18n.locales.map((locale) =>
    slugs.map((slug) => ({
      params: { slug },
      locale,
    }))
  );

  return {
    paths: Array.prototype.concat(...pathsByLocale),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
  locale,
}: GetStaticPropsContext<{ slug: string }>) {
  const slug = params?.slug;
  if (!slug) {
    throw new Error("slug must not be null/undefined");
  }

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common", "home"])),
      work: getWorkData(slug),
    },
  };
}
