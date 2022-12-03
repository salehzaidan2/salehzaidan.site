import Link from "next/link";

const navLinks = [
  { name: "Home", url: "/" },
  { name: "Works", url: "/works" },
];

export function Header() {
  return (
    <header className="py-4">
      <nav className="flex justify-center gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className="rounded px-2 py-0.5 text-stone-400 hover:bg-stone-800 hover:text-white"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
