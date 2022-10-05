import axios from "axios";
import dayjs from "dayjs";
import jwtDecode from "jwt-decode";
import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { IResponse, IAuthToken } from "type";

async function refreshAccessToken(tokenObject: any) {
  try {
    const instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        Authorization: `Bearer ${tokenObject.accessToken}`,
        Refresh: `Bearer ${tokenObject.refreshToken}`,
      },
    });

    // Get a new set of tokens with a refreshToken
    const {
      data: { jwtToken, refreshToken },
    } = await instance.post("/refresh");

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
          } = await axios.post(
            "https://hive-test2.azurewebsites.net:443/v1.1/sign-in",
            credentials,
          );
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
    async session({ session, token }: any) {
      if (session && token) {
        session = {
          ...session,
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
          companyId: token.companyId,
          warehouseList: token.warehouseList,
          expires: token.accessTokenExpiry,
        };
      }

      return Promise.resolve(session);
    },

    async signIn(params: any) {
      if (params.user.accessToken) {
        return true;
      } else {
        return false;
        // Return false to display a default error message
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
  },
  pages: {
    signIn: "/login",
    error: "/",
    signOut: "/",
  },
};

export default NextAuth(authOptions);
