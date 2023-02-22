import Link from "next/link";
import { useRouter } from "next/router";

export function LangToggle() {
  const router = useRouter();

  return (
    <Link
      href={router.pathname}
      locale={router.locale === "en" ? "id" : "en"}
      aria-label={`Switch to ${
        router.locale === "en" ? "Indonesian" : "English"
      }`}
      className="rounded-md bg-stone-200 p-1.5 text-sm hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700"
    >
      <div className="flex h-6 w-6 items-center justify-center">
        {router.locale === "en" ? "ID" : "EN"}
      </div>
    </Link>
  );
}
