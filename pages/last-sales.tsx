import { GetStaticProps } from 'next';
import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { ITransformedSales } from '../types';
import { getLastSales } from '../src/services/';

interface IProps {
	transformedSales: ITransformedSales[];
}

const LastSales = ({ transformedSales }: IProps) => {
	const [sales, setSales] = useState<ITransformedSales[]>(transformedSales);
	const { isLoading, isError, data, error } = useQuery(
		['last-sales'],
		getLastSales,
		{
			refetchOnWindowFocus: true, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
			retry: 0, // 실패시 재호출 몇번 할지
			onSuccess: (data) => data,
			onError: (e: AxiosError) => {
				// 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
				// 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
				console.log(e.message);
			},
		},
	);
	useEffect(() => {
		if (data) {
			console.log(data);
			const transformedSales: ITransformedSales[] = [];
			for (const key in data) {
				transformedSales.push({
					id: key,
					username: data[key]?.username,
					volume: data[key]?.volume,
				});
			}
			setSales(transformedSales);
		}
	}, [data]);

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (isError && !data) {
		return <span>Error: {error.message}</span>;
	}

	return (
		<ul>
			{isLoading && <p>Loading...</p>}
			{sales && sales.map((sale, index) => <li key={index}>{sale.id}</li>)}
		</ul>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await axios.get(
		`https://nextjs-dummy-9be3f-default-rtdb.firebaseio.com/sales.json`,
	);
	const transformedSales: ITransformedSales[] = [];
	for (const key in data) {
		transformedSales.push({
			id: key,
			username: data[key]?.username,
			volume: data[key]?.volume,
		});
	}

	if (!transformedSales.length) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			transformedSales: transformedSales,
		},
		revalidate: 10,
	};
};

export default LastSales;

// ## Client-side pre-rendering
// pre-fetching 된 아이템으로 pre-rendering이 가능하려면
// getStaticProps 로 pre-fetching 해주어야 한다.
