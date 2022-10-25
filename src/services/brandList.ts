import api from "src/utils/interceptor";

type Key = string | readonly unknown[];
// 옵션을 사용할 경우, 상의 후 결정
export const QueryKey: Key = ["brand-list"];
export const QueryFn = async ({ page, size }: any) => {
  const result = await api
    .get(`/client/api/brand?page=${page}&size=${size}`)
    .then(res => res.data.payload.content);

  return result;
};
export const option = {
  refetchOnWindowFocus: false,
  keepPreviousData: true,
  // staleTime: 5000,
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
