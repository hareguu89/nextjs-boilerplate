import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import jwtDecode from "jwt-decode";
import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface IResponse {
  companyId: number;
  companyUserId: number;
  companyUserName: string;
  username: string;
  roles: string;
  lnbData: {
    receiving: Receiving;
    shipping: Receiving;
    stock: Receiving;
    mdm: Receiving;
  };
  warehouseList: {
    warehouseId: number;
    warehouseName: string;
  }[];
  iat: number;
  exp: number;
}

// interface IToken {
//   token: string;
//   accessTokenExpiry: number;
//   refreshToken: string;
//   iat?: number;
//   exp?: number;
//   jti?: string;
// }

// interface Tjwt {
//   token: IToken;
//   user: IToken;
// }

export interface Receiving {
  isActive: boolean;
}

// async function refreshAccessToken(tokenObject: IToken) {
//   try {
//     // Get a new set of tokens with a refreshToken
//     const tokenResponse = await axios.post(
//       "https://hive-test2.azurewebsites.net:443/v1.1/refresh",
//       {
//         token: tokenObject.refreshToken,
//       },
//     );

//     return {
//       ...tokenObject,
//       accessToken: tokenResponse.data.accessToken,
//       accessTokenExpiry: tokenResponse.data.accessTokenExpiry,
//       refreshToken: tokenResponse.data.refreshToken,
//     };
//   } catch (error) {
//     return {
//       ...tokenObject,
//       error: "RefreshAccessTokenError",
//     };
//   }
// }

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
          console.log(decodeToken);

          if (jwtToken) {
            return {
              accessToken: jwtToken,
              refreshToken,
              accessTokenExpiry: new Date(decodeToken.exp * 1000),
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
    async jwt({ token, user }: any) {
      console.log(token);
      try {
        if (user.accessToken) {
          return await Promise.resolve({
            ...user,
            ...token,
          });
        }

        // const shouldRefreshToken = Date.now() > user.accessTokenExpiry * 1000;

        // if (shouldRefreshToken) {
        //   return refreshAccessToken(token);
        // }
      } catch {
        return Promise.resolve(token);
      }
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
      if (params) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
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
