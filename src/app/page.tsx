'use client';

import ProfileCard from '@/components/ProfileCard';
import { Profile } from '@/types';

// Mock data for initial development
const mockProfiles: Profile[] = [
  {
    id: '1',
    name: 'Amaka',
    age: 28,
    location: 'Lagos',
    bio: 'I love cooking, dancing and meeting new people. Looking for someone who appreciates Nigerian culture and good food!',
    whatsappNumber: '+2348012345678',
    profilePicture: '/profiles/amaka.jpg',
    coinCost: 5
  },
  {
    id: '2',
    name: 'Emeka',
    age: 32,
    location: 'Abuja',
    bio: 'Tech entrepreneur who loves traveling and exploring new places. Let\'s connect and see where it goes!',
    whatsappNumber: '+2348023456789',
    profilePicture: '/profiles/emeka.jpg',
    coinCost: 5
  },
  {
    id: '3',
    name: 'Ngozi',
    age: 26,
    location: 'Port Harcourt',
    bio: 'Medical doctor with a passion for helping others. I enjoy reading, swimming and good conversation.',
    whatsappNumber: '+2348034567890',
    profilePicture: '/profiles/ngozi.jpg',
    coinCost: 5
  },
  {
    id: '4',
    name: 'Chinedu',
    age: 30,
    location: 'Enugu',
    bio: 'Fitness enthusiast and business owner. Looking for someone who values health and ambition.',
    whatsappNumber: '+2348045678901',
    profilePicture: '/profiles/chinedu.jpg',
    coinCost: 5
  },
  {
    id: '5',
    name: 'Fatima',
    age: 25,
    location: 'Kano',
    bio: 'Fashion designer with a love for traditional and modern styles. I enjoy music, art and meaningful connections.',
    whatsappNumber: '+2348056789012',
    profilePicture: '/profiles/fatima.jpg',
    coinCost: 5
  },
  {
    id: '6',
    name: 'Oluwaseun',
    age: 29,
    location: 'Ibadan',
    bio: 'Software developer by day, musician by night. Looking for someone who appreciates creativity and ambition.',
    whatsappNumber: '+2348067890123',
    profilePicture: '/profiles/oluwaseun.jpg',
    coinCost: 5
  }
];

export default function Home() {
  // This would be replaced with actual auth state and API calls
  const handleUnlock = (profileId: string) => {
    console.log(`Unlock profile: ${profileId}`);
    // In a real app, this would open a modal to confirm payment
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#FF8C00] mb-2">Find Your Connection</h1>
          <p className="text-xl text-[#8B4513]">Browse verified profiles and connect with amazing people</p>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProfiles.map(profile => (
            <ProfileCard 
              key={profile.id} 
              profile={profile} 
              onUnlock={handleUnlock}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
