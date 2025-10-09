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
    <div className="card hover:shadow-lg transition-shadow">
      <div className="relative h-64 w-full">
        <Image 
          src={profile.profilePicture || '/profiles/placeholder-profile.jpg'} 
          alt={`${profile.name}'s profile picture`}
          fill
          className="avatar object-cover"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">{profile.name}, {profile.age}</h3>
          <span className="text-sm bg-[#FF8C00] text-white px-2 py-1 rounded-full">
            {profile.location}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{profile.bio}</p>
        
        <div className="border-t pt-4">
          {isUnlocked ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaWhatsapp className="text-green-500 mr-2" />
                <span>{profile.whatsappNumber}</span>
              </div>
              <button 
                className="text-[#D4AF37]"
                onClick={() => navigator.clipboard.writeText(profile.whatsappNumber)}
              >
                <FaCopy />
              </button>
            </div>
          ) : (
            <button 
              className="btn-primary w-full flex items-center justify-center"
              onClick={() => onUnlock && onUnlock(profile.id)}
            >
              <FaLock className="mr-2" />
              Unlock WhatsApp ({profile.coinCost} coins)
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;