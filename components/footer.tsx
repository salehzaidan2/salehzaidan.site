import { useTranslation } from "next-i18next";

const currentYear = new Date().getFullYear();

const externalNavLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/saleh-zaidan" },
  { name: "GitHub", url: "https://github.com/salehzaidan" },
  { name: "Instagram", url: "https://www.instagram.com/salehzaidan_" },
];

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="space-y-4 pt-12 pb-4 text-stone-500 dark:text-stone-400">
      <nav className="flex justify-center gap-4">
        {externalNavLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            className="rounded px-2 py-0.5 hover:bg-stone-200 hover:text-stone-900 dark:hover:bg-stone-800 dark:hover:text-white"
          >
            {link.name}
          </a>
        ))}
      </nav>
      <p className="text-center text-sm">
        {`\u00a9 ${currentYear} ${t("name.full")}`}
      </p>
    </footer>
  );
}
