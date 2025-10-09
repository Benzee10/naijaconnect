import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { connectToDatabase } from "@/lib/db";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        try {
          // In a real app, this would connect to MongoDB
          // const client = await connectToDatabase();
          // const usersCollection = client.db().collection("users");
          // const user = await usersCollection.findOne({ email: credentials.email });

          // For demo purposes, using mock data
          const mockUsers = [
            {
              id: "1",
              email: "user@example.com",
              password: "$2a$12$k8Y1Yk5ULQ2vxvOSBbdUOeUNktUQLnWXrE9Kv8kvmwDIBTFwyhXPO", // "password123"
              username: "testuser",
              coinBalance: 10,
              isAdmin: false
            },
            {
              id: "2",
              email: "admin@example.com",
              password: "$2a$12$k8Y1Yk5ULQ2vxvOSBbdUOeUNktUQLnWXrE9Kv8kvmwDIBTFwyhXPO", // "password123"
              username: "admin",
              coinBalance: 100,
              isAdmin: true
            }
          ];

          const user = mockUsers.find(user => user.email === credentials.email);

          if (!user) {
            throw new Error("No user found with this email");
          }

          const isPasswordValid = await compare(credentials.password, user.password);

          if (!isPasswordValid) {
            throw new Error("Invalid password");
          }

          return {
            id: user.id,
            email: user.email,
            username: user.username,
            coinBalance: user.coinBalance,
            isAdmin: user.isAdmin
          };
        } catch (error) {
          console.error("Authentication error:", error);
          throw new Error("Authentication failed");
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.coinBalance = user.coinBalance;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.username = token.username;
        session.user.coinBalance = token.coinBalance;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    }
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET || "your-secret-key-change-in-production",
});

export { handler as GET, handler as POST };