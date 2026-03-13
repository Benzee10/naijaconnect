import ProfileCard from "@/components/ProfileCard";
import Disclaimer from "@/components/Disclaimer";
import { profiles } from "@/data/profiles";

export const metadata = {
  title: "Browse Profiles – NaijaConnect",
  description: "Browse all verified female profiles on NaijaConnect.",
};

export default function ProfilesPage() {
  const active = profiles.filter((p) => p.active);

  return (
    <div className="space-y-5">
      <Disclaimer />

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-extrabold text-gray-900 dark:text-white">All Profiles</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">{active.length} verified women</p>
        </div>
        <span className="flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400 font-medium bg-green-50 dark:bg-green-950/30 px-2.5 py-1 rounded-full border border-green-200 dark:border-green-800">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          Live
        </span>
      </div>

      {active.length === 0 ? (
        <div className="text-center py-16 text-gray-400 dark:text-gray-600">
          <div className="text-4xl mb-3">😔</div>
          <p className="font-medium">No profiles available right now</p>
          <p className="text-sm mt-1">Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {active.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      )}
    </div>
  );
}
