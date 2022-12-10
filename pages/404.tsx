import Head from "next/head";
import { useRouter } from "next/router";
import personal from "../data/personal.json";

export default function NotFound() {
  const router = useRouter();
  const pageTitle = `404: Page could not be found \u2013 ${personal.name.first} ${personal.name.last}`;

  return (
    <div className="flex grow flex-col items-center justify-center gap-4">
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-medium">404</h1>
        <div>Page could not be found</div>
      </div>
      <button
        onClick={router.back}
        className="rounded bg-stone-200 px-3 py-1.5 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700"
      >
        &larr; Go back
      </button>
    </div>
  );
}
