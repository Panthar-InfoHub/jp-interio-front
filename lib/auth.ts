import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import type { JWT } from "next-auth/jwt";
import { API_URL } from "@/lib/apiUtil";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt", 
  },
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
        const res  = await loginResponse.json();
        // storing token and user id for later usage
        user.apiToken = res.data.token;
        user.userId = res.data.user.id;
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
        const res = await signupResponse.json();
        user.apiToken = res.data.token;
        user.userId = res.data.user.id;
        return true;
      }

      return false;
    },

    async jwt({ token, user, trigger, session }): Promise<JWT> {
      if (user) {
        token.apiToken = user.apiToken;
        token.userId = user.userId;
      }

      if (trigger === "update" && session?.apiToken) {
        token.apiToken = session.apiToken;
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
