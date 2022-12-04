import type { InferGetStaticPropsType } from "next";
import { WorkCard } from "../../components/work-card";
import { getWorksData } from "../../lib/fetch";

export function getStaticProps() {
  return {
    props: {
      works: getWorksData(),
    },
  };
}

export default function Works({
  works,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section className="space-y-4 pt-4">
      <h1 className="text-2xl font-medium sm:text-3xl">My Works</h1>
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
  );
}
