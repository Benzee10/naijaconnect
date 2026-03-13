"use client";

import { useState } from "react";
import Image from "next/image";
import { profiles as initialProfiles, Profile } from "@/data/profiles";

const ADMIN_PASSWORD = "admin123";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [profileList, setProfileList] = useState<Profile[]>(initialProfiles);

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
      setError("");
    } else {
      setError("Incorrect password.");
    }
  };

  const toggle = (id: string) => {
    setProfileList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, active: !p.active } : p))
    );
  };

  if (!authed) {
    return (
      <div className="max-w-sm mx-auto mt-16">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
          <h1 className="text-xl font-extrabold text-gray-900 dark:text-white mb-1">Admin Panel</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">Enter password to continue.</p>
          <form onSubmit={login} className="space-y-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
              autoFocus
            />
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2.5 rounded-xl text-sm transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-extrabold text-gray-900 dark:text-white">Manage Profiles</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {profileList.filter((p) => p.active).length} active · {profileList.filter((p) => !p.active).length} hidden
          </p>
        </div>
        <button
          onClick={() => setAuthed(false)}
          className="text-xs text-gray-400 hover:text-red-500 transition-colors"
        >
          Logout
        </button>
      </div>

      <div className="space-y-2">
        {profileList.map((profile) => (
          <div
            key={profile.id}
            className={`flex items-center gap-3 bg-white dark:bg-gray-900 rounded-2xl p-3 border transition-all ${
              profile.active
                ? "border-gray-100 dark:border-gray-800"
                : "border-red-100 dark:border-red-900/40 opacity-60"
            }`}
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-800">
              <Image src={profile.photo} alt={profile.name} fill className="object-cover" sizes="48px" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm text-gray-900 dark:text-white truncate">
                {profile.name}, {profile.age}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{profile.location}</div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  profile.active
                    ? "bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800"
                    : "bg-red-50 dark:bg-red-950/30 text-red-500 dark:text-red-400 border border-red-200 dark:border-red-800"
                }`}
              >
                {profile.active ? "Active" : "Hidden"}
              </span>
              <button
                onClick={() => toggle(profile.id)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-xl transition-colors ${
                  profile.active
                    ? "bg-red-50 dark:bg-red-950/30 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/40 border border-red-200 dark:border-red-800"
                    : "bg-green-50 dark:bg-green-950/30 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/40 border border-green-200 dark:border-green-800"
                }`}
              >
                {profile.active ? "Hide" : "Show"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-center text-gray-400 dark:text-gray-600 pb-4">
        Note: Changes here are session-only. To permanently update profiles, edit <code className="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">src/data/profiles.ts</code>
      </p>
    </div>
  );
}
