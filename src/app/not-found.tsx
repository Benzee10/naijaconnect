import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-20 space-y-4">
      <div className="text-6xl">😕</div>
      <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">Page Not Found</h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm">This page doesn&apos;t exist or the profile was removed.</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-colors mt-2"
      >
        Go Home
      </Link>
    </div>
  );
}
