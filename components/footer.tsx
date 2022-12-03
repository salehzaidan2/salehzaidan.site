const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="py-4 text-center text-sm text-stone-400">
      &copy; {currentYear} Saleh Zaidan. All rights reserved.
    </footer>
  );
}
