import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";
// import { getSession } from "next-auth/react";
const api = () => {
  const apiClient: AxiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  });

  apiClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
    // Next Auth 로직
    // const session = await getSession();
    // if (session) {
    //   config.headers = {
    //     Authorization: `Bearer ${session.accessToken}`,
    //     RefreshToken: `Bearer ${session.refreshToken}`,
    //   };
    // }
    config.params = new URLSearchParams(config.params);

    return config;
  });

  return apiClient;
};

export default api();
