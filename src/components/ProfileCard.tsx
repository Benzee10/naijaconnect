'use client';

import Image from 'next/image';
import { FaLock, FaWhatsapp, FaCopy } from 'react-icons/fa';
import { Profile } from '@/types';

interface ProfileCardProps {
  profile: Profile;
  isUnlocked?: boolean;
  onUnlock?: (profileId: string) => void;
}

const ProfileCard = ({ profile, isUnlocked = false, onUnlock }: ProfileCardProps) => {
  return (
    <div className="modern-card group">
      <div className="relative w-full overflow-hidden" style={{ height: '288px' }}>
        <Image 
          src={profile.profilePicture || '/profiles/placeholder-profile.jpg'} 
          alt={`${profile.name}'s profile picture`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#FF8C00] px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          {profile.location}
        </span>
      </div>
      
      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
          {profile.name}, {profile.age}
        </h3>
        
        <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 line-clamp-2 leading-relaxed">
          {profile.bio}
        </p>
        
        <div className="border-t border-[#2a2a2a] pt-3 sm:pt-4">
          {isUnlocked ? (
            <div className="flex items-center justify-between bg-green-500/10 border border-green-500/20 rounded-lg p-2 sm:p-3">
              <div className="flex items-center">
                <FaWhatsapp className="text-green-500 mr-2 text-lg sm:text-xl" />
                <span className="font-medium text-white text-sm sm:text-base">{profile.whatsappNumber}</span>
              </div>
              <button 
                className="text-[#D4AF37] hover:text-[#FF8C00] transition-colors"
                onClick={() => navigator.clipboard.writeText(profile.whatsappNumber)}
              >
                <FaCopy className="text-base sm:text-lg" />
              </button>
            </div>
          ) : (
            <button 
              className="btn-primary w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all"
              onClick={() => onUnlock && onUnlock(profile.id)}
            >
              <FaLock className="text-sm sm:text-base" />
              <span>Unlock WhatsApp ({profile.coinCost} coins)</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;