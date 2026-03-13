import Link from "next/link";
import ProfileCard from "@/components/ProfileCard";
import Disclaimer from "@/components/Disclaimer";
import { profiles } from "@/data/profiles";

export default function HomePage() {
  const featured = profiles.filter((p) => p.active).slice(0, 4);

  return (
    <div className="space-y-8">
      <Disclaimer />

      <section className="text-center space-y-4 py-6">
        <div className="inline-flex items-center gap-2 bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-pink-200 dark:border-pink-800">
          <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
          {profiles.filter((p) => p.active).length} verified profiles online
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Meet Real Women<br />
          <span className="text-pink-500">Near You</span>
        </h1>

        <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-sm mx-auto">
          Browse verified profiles and connect directly via WhatsApp. No games, no fake accounts.
        </p>

        <Link
          href="/profiles"
          className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-bold px-7 py-3 rounded-2xl text-sm transition-colors shadow-lg shadow-pink-200 dark:shadow-pink-900/30"
        >
          See All Profiles
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg text-gray-900 dark:text-white">Featured Profiles</h2>
          <Link href="/profiles" className="text-sm text-pink-500 hover:text-pink-600 font-medium transition-colors">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {featured.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </section>

      <section className="grid grid-cols-3 gap-3 py-4">
        {[
          { icon: "✅", label: "Verified", desc: "Every profile is manually verified" },
          { icon: "💬", label: "Direct Contact", desc: "Connect straight on WhatsApp" },
          { icon: "🔒", label: "Safe & Private", desc: "Your privacy is protected" },
        ].map((item) => (
          <div key={item.label} className="bg-white dark:bg-gray-900 rounded-2xl p-3 text-center border border-gray-100 dark:border-gray-800">
            <div className="text-2xl mb-1">{item.icon}</div>
            <div className="font-semibold text-xs text-gray-900 dark:text-white">{item.label}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 hidden sm:block">{item.desc}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
