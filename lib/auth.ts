import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import type { JWT } from "next-auth/jwt";
import { API_URL } from "@/lib/apiUtil";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user, account, profile }) {
      const { email, name, image } = user;

      // here we will try to login
      const loginResponse = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      if (loginResponse.ok) {
        const userData = await loginResponse.json();
        // storing token and user id for later usage
        user.apiToken = userData.token;
        user.userId = userData.userId;
        return true;
      }

      const signupResponse = await fetch(`${API_URL}/user/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: name,
        }),
      });

      if (signupResponse.ok) {
        const userData = await signupResponse.json();
        user.apiToken = userData.token;
        user.userId = userData.userId;
        return true;
      }

      return false;
    },

    async jwt({ token, user }): Promise<JWT> {
      if (user) {
        token.apiToken = user.apiToken;
        token.userId = user.userId;
      }
      return token;
    },
    async session({ session, token }) {
      // Make the token available in the session
      session.apiToken = token.apiToken;
      if (token.userId) {
        session.userId = token.userId;
      }
      return session;
    },
  },
});
