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
      <div className="relative h-72 w-full overflow-hidden">
        <Image 
          src={profile.profilePicture || '/profiles/placeholder-profile.jpg'} 
          alt={`${profile.name}'s profile picture`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#FF8C00] px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          {profile.location}
        </span>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">
          {profile.name}, {profile.age}
        </h3>
        
        <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
          {profile.bio}
        </p>
        
        <div className="border-t border-gray-100 pt-4">
          {isUnlocked ? (
            <div className="flex items-center justify-between bg-green-50 rounded-lg p-3">
              <div className="flex items-center">
                <FaWhatsapp className="text-green-500 mr-2 text-xl" />
                <span className="font-medium">{profile.whatsappNumber}</span>
              </div>
              <button 
                className="text-[#D4AF37] hover:text-[#C09C2F] transition-colors"
                onClick={() => navigator.clipboard.writeText(profile.whatsappNumber)}
              >
                <FaCopy className="text-lg" />
              </button>
            </div>
          ) : (
            <button 
              className="btn-primary w-full flex items-center justify-center gap-2 py-3 text-lg shadow-lg hover:shadow-xl transition-all"
              onClick={() => onUnlock && onUnlock(profile.id)}
            >
              <FaLock />
              Unlock WhatsApp ({profile.coinCost} coins)
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;