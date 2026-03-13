import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-pink-600 dark:text-pink-400">
          <span className="text-xl">💕</span>
          <span>NaijaConnect</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/profiles"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
          >
            Browse
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
