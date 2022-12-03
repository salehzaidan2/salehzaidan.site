import type { InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { WorkCard } from "../components/work-card";
import { getWorksData } from "../lib/fetch";

const WORK_CARD_DISPLAY_LIMIT = 2;

export function getStaticProps() {
  return {
    props: {
      works: getWorksData(WORK_CARD_DISPLAY_LIMIT),
    },
  };
}

export default function Home({
  works,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <section className="flex flex-col items-center gap-4 py-8 sm:flex-row sm:justify-center sm:gap-8">
        <Image
          src="/avatar.jpeg"
          alt="Saleh Zaidan"
          width={128}
          height={128}
          className="rounded-full"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-medium sm:text-4xl">
            Hi there, I&apos;m Zaidan
          </h1>
          <p className="text-lg sm:text-xl">IoT, AI, and Web Dev enthusiast</p>
        </div>
      </section>

      <section className="space-y-2 py-4">
        <h2 className="text-2xl font-medium sm:text-3xl">About Me</h2>
        <div className="space-y-4">
          <p>
            I&apos;m an engineer with great interest in Internet of Things,
            Artificial Intelligence, and Website Development. In my spare time I
            like to learn the latest things related to digital technology and do
            some hobby projects related to it.
          </p>
          <p>
            I&apos;m currently working as an IoT Application Engineer at an IT
            services & consulting company specialized in Industry 4.0 solutions.
          </p>
        </div>
      </section>

      <section className="space-y-4 py-4">
        <h2 className="text-2xl font-medium sm:text-3xl">My Latest Works</h2>
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
            className="rounded bg-stone-800 px-3 py-1.5 hover:bg-stone-700"
          >
            View more
          </Link>
        </div>
      </section>
    </>
  );
}
