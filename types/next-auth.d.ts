// types/next-auth.d.ts (create this file in your project root or in a types folder)

import { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    apiToken?: string
    userId?: string
    // Add any other custom fields you need
  }

  interface User extends DefaultUser {
    apiToken?: string
    userId?: string
    // Add any other custom fields you need
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    apiToken?: string
    userId?: string
    // Add any other custom fields you need
  }
}