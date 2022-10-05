export interface IResponse {
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

interface Receiving {
  isActive: boolean;
}

export interface IAuthToken {
  token: { name: string };
  user?: {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiry: string;
    name: string;
    companyId: number;
    warehouseList: { warehouseId: number; warehouseName: string }[];
  };
  account?: {
    type: string;
    provider: string;
  };
  isNewUser?: boolean;
}
