import Image from "next/image";
import Link from "next/link";
import { Profile } from "@/data/profiles";

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          src={profile.photo}
          alt={profile.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {profile.verified && (
          <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Verified
          </span>
        )}
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-semibold text-gray-900 dark:text-white text-base">{profile.name}, {profile.age}</h3>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {profile.location}
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">{profile.bio}</p>
        <Link
          href={`/profiles/${profile.id}`}
          className="block w-full text-center text-sm font-semibold bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-xl transition-colors"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}
