import api from "src/utils/interceptor";
import type { ResponseType } from "types/api/response";
import type { CategoryTopBrandsType } from "types/topBrand";

// 옵션을 사용할 경우, 상의 후 결정
export const queryKey = ["top-brand-list"];
export const queryFn = async () =>
  api
    .get<ResponseType<CategoryTopBrandsType[]>>(`/client/api/top-brands`)
    .then(({ data }) => data?.payload);
export const options = {
  refetchOnWindowFocus: false,
  //   initialData: [
  //     {
  //       category: {
  //         id: 200,
  //         name: "Beauty",
  //       },
  //       topBrands: [],
  //     },
  //     {
  //       category: {
  //         id: 100,
  //         name: "Food",
  //       },
  //       topBrands: [],
  //     },
  //   ],
};

/**
 * useQuery api usage
 * https://tanstack.com/query/v4/docs/reference/useQuery?from=reactQueryV3&original=https://react-query-v3.tanstack.com/reference/useQuery
 *
 */
