import dayjs from "dayjs";
import jwtDecode from "jwt-decode";
import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import type { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import ApiClient from "@utils/interceptor";
import type { IResponse } from "types";

async function refreshAccessToken(tokenObject: JWT) {
  try {
    // Get a new set of tokens with a refreshToken
    const {
      data: { jwtToken, refreshToken },
    } = await ApiClient.post("/refresh");

    const decodeToken: IResponse = jwtDecode(jwtToken);

    return {
      ...tokenObject,
      accessToken: jwtToken,
      refreshToken,
      accessTokenExpiry: decodeToken.exp,
    };
  } catch (error) {
    return {
      ...tokenObject,
      error: "RefreshAccessTokenError",
    };
  }
}

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 5, // 5days expire session
  },
  jwt: {
    maxAge: 60, // 5days of expiration of json web token
  },
  secret: process.env.JWT_SECRET,
  providers: [
    CredentialsProvider({
      id: "email-password-credential",
      name: "email-password-credential",
      credentials: {
        email: { label: "email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const {
            data: { jwtToken, refreshToken },
          } = await ApiClient.post(`sign-in`, credentials);
          const decodeToken: IResponse = jwtDecode(jwtToken);

          if (jwtToken) {
            return {
              accessToken: jwtToken,
              refreshToken,
              accessTokenExpiry: decodeToken.exp,
              name: decodeToken.companyUserName,
              companyId: decodeToken.companyId,
              warehouseList: decodeToken.warehouseList,
            };
          }

          return null;
        } catch {
          throw new Error(
            "Sign in error occured. Please check sing in information.",
          );
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const expireDate = (token?.accessTokenExpiry as number) * 1000;
      const now = Date.now();

      if (expireDate <= now) {
        return {
          ...token,
          ...user,
          ...refreshAccessToken(token),
        };
      }

      return Promise.resolve({
        ...user,
        ...token,
      });
    },
    async session({ session, user, token }) {
      if (session && token) {
        session = {
          ...session,
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
          user: {
            ...user,
            name: token.name,
            companyId: token.companyId,
            warehouseList: token.warehouseList,
          },
        };
      }

      return Promise.resolve(session);
    },
  },
  pages: {
    signIn: "/login",
    error: "/",
    signOut: "/",
  },
};

export default NextAuth(authOptions);
