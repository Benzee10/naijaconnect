export interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  interests: string[];
  whatsapp: string;
  photo: string;
  verified: boolean;
  active: boolean;
}

export const profiles: Profile[] = [
  {
    id: "1",
    name: "Amara",
    age: 24,
    location: "Lagos, Nigeria",
    bio: "Bubbly and fun-loving Lagos girl. I love good food, music, and genuine connections. Looking to meet interesting people.",
    interests: ["Music", "Travel", "Cooking", "Fashion"],
    whatsapp: "+2348100000001",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    verified: true,
    active: true,
  },
  {
    id: "2",
    name: "Chidinma",
    age: 27,
    location: "Abuja, Nigeria",
    bio: "Professional by day, adventurer by heart. I enjoy hiking, reading, and deep conversations over coffee.",
    interests: ["Hiking", "Reading", "Coffee", "Art"],
    whatsapp: "+2348100000002",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    verified: true,
    active: true,
  },
  {
    id: "3",
    name: "Sade",
    age: 22,
    location: "Port Harcourt, Nigeria",
    bio: "Creative soul with a passion for photography and storytelling. I believe life is too short not to be bold.",
    interests: ["Photography", "Dance", "Movies", "Fitness"],
    whatsapp: "+2348100000003",
    photo: "https://randomuser.me/api/portraits/women/33.jpg",
    verified: true,
    active: true,
  },
  {
    id: "4",
    name: "Blessing",
    age: 26,
    location: "Enugu, Nigeria",
    bio: "Down-to-earth and family oriented. I love cooking traditional meals, going to the market, and spending quality time.",
    interests: ["Cooking", "Family", "Church", "Gardening"],
    whatsapp: "+2348100000004",
    photo: "https://randomuser.me/api/portraits/women/21.jpg",
    verified: true,
    active: true,
  },
  {
    id: "5",
    name: "Temi",
    age: 29,
    location: "Ibadan, Nigeria",
    bio: "Tech enthusiast and entrepreneur. I love building things, meeting new people, and exploring different cultures.",
    interests: ["Tech", "Business", "Travel", "Yoga"],
    whatsapp: "+2348100000005",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    verified: true,
    active: true,
  },
  {
    id: "6",
    name: "Fatima",
    age: 23,
    location: "Kano, Nigeria",
    bio: "Gentle, caring, and full of warmth. I enjoy quiet evenings, great conversations, and making people feel welcomed.",
    interests: ["Reading", "Cooking", "Music", "Volunteering"],
    whatsapp: "+2348100000006",
    photo: "https://randomuser.me/api/portraits/women/55.jpg",
    verified: true,
    active: true,
  },
  {
    id: "7",
    name: "Ngozi",
    age: 25,
    location: "Onitsha, Nigeria",
    bio: "Bold and ambitious. I'm a trader who loves to travel and discover new things. Life is an adventure!",
    interests: ["Business", "Travel", "Fashion", "Afrobeats"],
    whatsapp: "+2348100000007",
    photo: "https://randomuser.me/api/portraits/women/78.jpg",
    verified: true,
    active: true,
  },
  {
    id: "8",
    name: "Yetunde",
    age: 28,
    location: "Lagos, Nigeria",
    bio: "Nurse with a heart of gold. When I'm not saving lives, I enjoy Netflix, beach walks, and great food.",
    interests: ["Healthcare", "Beach", "Netflix", "Swimming"],
    whatsapp: "+2348100000008",
    photo: "https://randomuser.me/api/portraits/women/90.jpg",
    verified: true,
    active: true,
  },
];
