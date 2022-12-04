import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import personal from "../../data/personal.json";
import { getWorkData, getWorksSlug } from "../../lib/fetch";

export function getStaticPaths() {
  const slugs = getWorksSlug();

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}

export function getStaticProps(ctx: GetStaticPropsContext<{ slug: string }>) {
  const slug = ctx.params?.slug;
  if (!slug) {
    throw new Error("slug must not be null/undefined");
  }

  return {
    props: {
      work: getWorkData(slug),
    },
  };
}

export default function WorkDetail({
  work,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const pageTitle = `${work.name} \u2013 ${personal.name.first} ${personal.name.last}`;
  const formattedDate = new Date(work.date).toLocaleDateString("en", {
    year: "numeric",
    month: "long",
  });

  return (
    <div className="space-y-8">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={work.description} />
      </Head>

      <section className="space-y-4 pt-4">
        <h1 className="text-2xl font-medium sm:text-3xl">{work.name}</h1>
        <div className="space-y-2">
          <p>{work.description}</p>
          <div className="flex items-baseline gap-8">
            <p className="whitespace-nowrap text-sm font-medium">
              {formattedDate}
            </p>
            <ul className="flex flex-wrap items-start gap-2">
              {work.stack.map((item) => (
                <li
                  key={item}
                  className="whitespace-nowrap rounded bg-stone-800 px-2 py-0.5 text-sm"
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
          <div key={image.url} className="relative aspect-video shadow-xl">
            <Image
              src={`/static/images/${work.slug}/${image.url}`}
              alt={image.name}
              fill
              className="object-cover object-top"
            />
          </div>
        ))}
      </section>
    </div>
  );
}
