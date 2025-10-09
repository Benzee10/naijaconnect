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
  },
  {
    id: '7',
    name: 'Blessing',
    age: 27,
    location: 'Lagos',
    bio: 'Marketing professional with a passion for storytelling. I love yoga, hiking, and exploring Lagos\' vibrant food scene.',
    whatsappNumber: '+2348078901234',
    profilePicture: '/profiles/blessing.jpg',
    coinCost: 5
  },
  {
    id: '8',
    name: 'Ibrahim',
    age: 31,
    location: 'Kaduna',
    bio: 'Architect and photographer. I enjoy capturing beautiful moments and designing spaces that inspire. Let\'s create memories together!',
    whatsappNumber: '+2348089012345',
    profilePicture: '/profiles/ibrahim.jpg',
    coinCost: 5
  },
  {
    id: '9',
    name: 'Chioma',
    age: 24,
    location: 'Owerri',
    bio: 'Makeup artist and beauty enthusiast. I love making people feel confident and beautiful. Looking for someone genuine and caring.',
    whatsappNumber: '+2348090123456',
    profilePicture: '/profiles/chioma.jpg',
    coinCost: 5
  },
  {
    id: '10',
    name: 'Tunde',
    age: 35,
    location: 'Lagos',
    bio: 'Financial analyst and investment advisor. I enjoy chess, golf, and intellectual conversations. Seeking a smart and ambitious partner.',
    whatsappNumber: '+2348101234567',
    profilePicture: '/profiles/tunde.jpg',
    coinCost: 5
  },
  {
    id: '11',
    name: 'Aisha',
    age: 23,
    location: 'Abuja',
    bio: 'Content creator and digital marketer. I love traveling, photography, and trying new cuisines. Let\'s explore the world together!',
    whatsappNumber: '+2348112345678',
    profilePicture: '/profiles/aisha.jpg',
    coinCost: 5
  },
  {
    id: '12',
    name: 'Ifeanyi',
    age: 28,
    location: 'Onitsha',
    bio: 'Entrepreneur and car enthusiast. I love racing, business strategy, and building successful ventures. Looking for my ride-or-die partner.',
    whatsappNumber: '+2348123456789',
    profilePicture: '/profiles/ifeanyi.jpg',
    coinCost: 5
  },
  {
    id: '13',
    name: 'Zainab',
    age: 26,
    location: 'Jos',
    bio: 'Pharmacist with a heart for community service. I enjoy baking, volunteering, and peaceful evenings. Seeking someone kind and respectful.',
    whatsappNumber: '+2348134567890',
    profilePicture: '/profiles/zainab.jpg',
    coinCost: 5
  },
  {
    id: '14',
    name: 'Adeola',
    age: 33,
    location: 'Lagos',
    bio: 'Lawyer and human rights advocate. I\'m passionate about justice, literature, and fine dining. Looking for an intelligent conversationalist.',
    whatsappNumber: '+2348145678901',
    profilePicture: '/profiles/adeola.jpg',
    coinCost: 5
  },
  {
    id: '15',
    name: 'Kemi',
    age: 29,
    location: 'Calabar',
    bio: 'Event planner who loves bringing joy to celebrations. I enjoy dancing, beach walks, and romantic gestures. Let\'s make magic together!',
    whatsappNumber: '+2348156789012',
    profilePicture: '/profiles/kemi.jpg',
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
    <div className="min-h-screen bg-[#0a0a0a]">
      <section className="hero-gradient py-12 md:py-20 px-4 relative z-10">
        <div className="container mx-auto text-center relative z-10 max-w-6xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#FF8C00] to-[#D4AF37] bg-clip-text text-transparent mb-3 md:mb-4 animate-fade-in px-2">
            Find Your Perfect Match
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 animate-fade-in-delay px-4">
            Connect with verified singles across Nigeria
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center animate-fade-in-delay-2 px-4">
            <div className="bg-[#FF8C00]/10 border border-[#FF8C00]/20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 text-gray-200 text-sm md:text-base">
              <span className="font-bold text-[#FF8C00]">15+</span> Active Profiles
            </div>
            <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 text-gray-200 text-sm md:text-base">
              <span className="font-bold text-[#D4AF37]">100%</span> Verified
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {mockProfiles.map((profile, index) => (
            <div 
              key={profile.id}
              className="animate-slide-up w-full"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ProfileCard 
                profile={profile} 
                onUnlock={handleUnlock}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
