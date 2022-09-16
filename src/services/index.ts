import type { AxiosResponse } from "axios";
import axios from "axios";

type TUser = {
  email: string;
  password: string;
};

export const login = async (params: TUser) => axios.post("/api/login", params);

export const Mutation = {
  onSuccess: (data: AxiosResponse, variables: TUser) => {
    console.log("success", data, variables);
  },
};
