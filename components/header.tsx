import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { LangToggle } from "./lang-toggle";

const ThemeToggle = dynamic(
  () => import("./theme-toggle").then((module) => module.ThemeToggle),
  { ssr: false }
);

export function Header() {
  const { t } = useTranslation();
  const internalNavLinks = [
    { name: t("links.home"), url: "/" },
    { name: t("links.works"), url: "/works" },
  ];

  return (
    <header className="relative py-4">
      <nav className="flex justify-center gap-4">
        {internalNavLinks.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className="rounded px-2 py-0.5 text-stone-500 hover:bg-stone-200 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-white"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <ThemeToggle />
      </div>
      <div className="absolute inset-y-0 right-12 flex items-center">
        <LangToggle />
      </div>
    </header>
  );
}
