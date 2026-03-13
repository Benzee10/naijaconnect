import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { profiles } from "@/data/profiles";

export async function generateStaticParams() {
  return profiles.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const profile = profiles.find((p) => p.id === id);
  if (!profile) return { title: "Profile Not Found" };
  return {
    title: `${profile.name}, ${profile.age} – NaijaConnect`,
    description: profile.bio,
  };
}

export default async function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const profile = profiles.find((p) => p.id === id && p.active);
  if (!profile) notFound();

  const whatsappUrl = `https://wa.me/${profile.whatsapp.replace(/\D/g, "")}`;

  return (
    <div className="max-w-md mx-auto space-y-5">
      <Link href="/profiles" className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to profiles
      </Link>

      <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="relative aspect-[3/4] w-full bg-gray-100 dark:bg-gray-800">
          <Image
            src={profile.photo}
            alt={profile.name}
            fill
            className="object-cover"
            sizes="(max-width: 448px) 100vw, 448px"
            priority
          />
          {profile.verified && (
            <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Verified
            </span>
          )}
        </div>

        <div className="p-4 space-y-4">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">
              {profile.name}, <span className="text-pink-500">{profile.age}</span>
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {profile.location}
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-1.5">About</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{profile.bio}</p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-2">Interests</h2>
            <div className="flex flex-wrap gap-1.5">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="text-xs bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 border border-pink-200 dark:border-pink-800 px-2.5 py-1 rounded-full font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-1 space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500">Contact</h2>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-2xl transition-colors shadow-md shadow-green-200 dark:shadow-green-900/30 text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 dark:text-gray-600 pb-4">
        🔞 For adults 18+ only. Please be respectful.
      </p>
    </div>
  );
}
