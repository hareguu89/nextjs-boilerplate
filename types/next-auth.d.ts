import type { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      name?: string | null | undefined;
      companyId: number | undefined;
      warehouseList:
        | {
            warehouseId: number;
            warehouseName: string;
          }[]
        | undefined;
    };
    accessToken: string;
    refreshToken: string;
    expires: number | string | DefaultSession["expires"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiry?: number;
    name?: string | null | undefined;
    companyId?: number;
    warehouseList?: {
      warehouseId: number;
      warehouseName: string;
    }[];
    iat?: number;
    exp?: number;
    jti?: string;
  }
}
