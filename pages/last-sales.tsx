import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

interface UserSale {
	username: string;
	volume: number;
}
interface ILastSales {
	s1: UserSale;
	s2: UserSale;
}

interface ITransformedSales {
	id: string;
	username: string;
	volume: number;
}

const LastSales: NextPage = () => {
	const [sales, setSales] = useState<ITransformedSales[]>([]);
	// const [isLoading, setIsLoading] = useState(false);

	const { isLoading, isError, data, error } = useQuery(
		'last-sales',
		() =>
			axios.get(
				'https://nextjs-dummy-9be3f-default-rtdb.firebaseio.com/sales.json',
			),
		{
			refetchOnWindowFocus: true, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
			retry: 0, // 실패시 재호출 몇번 할지
			onSuccess: ({ data }: AxiosResponse<ILastSales>) => {
				const transformedSales: ITransformedSales[] = [];
				for (const key in data) {
					transformedSales.push({
						id: key,
						username: data[key]?.username,
						volume: data[key]?.volume,
					});
				}
				setSales(transformedSales);
			},
			onError: (e: AxiosError) => {
				// 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
				// 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
				console.log(e.message);
			},
		},
	);

	// useEffect(() => {
	// const test = async () => {
	// 	try {
	// 		setIsLoading(true);
	// 		const { data } = await axios.get<AxiosResponse<ILastSales>>(
	// 			'https://nextjs-dummy-9be3f-default-rtdb.firebaseio.com/sales.json',
	// 		);

	// 		const transformedSales: ITransformedSales[] = [];
	// 		for (const key in data) {
	// 			transformedSales.push({
	// 				id: key,
	// 				username: data[key]?.username,
	// 				volume: data[key]?.volume,
	// 			});
	// 		}
	// 		setSales(transformedSales);
	// 		setIsLoading(false);
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// };
	// test();
	// 	mutateAsync();
	// }, []);

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	return (
		<ul>
			{isLoading && <p>Loading...</p>}
			{sales.map((sale, index) => (
				<li key={index}>{sale.id}</li>
			))}
		</ul>
	);
};

//useSWR(<request-url>, (url) => fetch(url).then(res => res.json()))

export default LastSales;
