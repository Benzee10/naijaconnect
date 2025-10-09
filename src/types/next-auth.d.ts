import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    username: string;
    coinBalance: number;
    isAdmin: boolean;
  }

  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      username: string;
      coinBalance: number;
      isAdmin: boolean;
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username: string;
    coinBalance: number;
    isAdmin: boolean;
  }
}