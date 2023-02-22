import { useRouter } from "next/router";

export function LangToggle() {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const nextLocale = router.locale === "en" ? "id" : "en";

  return (
    <button
      aria-label={`Switch to ${nextLocale === "en" ? "English" : "Indonesian"}`}
      onClick={() => {
        router.push({ pathname, query }, asPath, { locale: nextLocale });
      }}
      className="rounded-md bg-stone-200 p-1.5 text-sm hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700"
    >
      <div className="flex h-6 w-6 items-center justify-center">
        {nextLocale === "en" ? "EN" : "ID"}
      </div>
    </button>
  );
}
