import api from "src/utils/interceptor";
import type { BrandType } from "types";
import type { ResponseType } from "types/api/response";
// import axios from ".";
// import type { ApiRequest } from "../../types/api/request";

// export const searchBrandApi = (req: ApiRequest) => {
//   return axios.post<ResponseType<BrandType[]>>(
//     `/client/api/brands?page=${req.page}&size=${req.size}&${req.sortQueryParams}`,
//     req.search,
//   );
// };

export const listBrandApi = async (params: any) =>
  api.get<ResponseType<BrandType[]>>(`/client/api/brand`, params);

// export const getBrandStatsApi = (brandId: number) => {
//   return axios.get<ResponseType<BrandType>>(
//     `/client/api/brand/stats/${brandId}`,
//   );
// };
