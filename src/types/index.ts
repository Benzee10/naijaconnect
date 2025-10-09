export interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  whatsappNumber: string;
  profilePicture: string;
  coinCost: number;
}

export interface User {
  id: string;
  username: string;
  email: string;
  password?: string;
  coinBalance: number;
  unlockedProfiles: string[];
  isAdmin: boolean;
}

export interface Transaction {
  id: string;
  userId: string;
  type: 'topup' | 'unlock';
  amount: number;
  coins: number;
  profileId?: string;
  createdAt: Date;
}