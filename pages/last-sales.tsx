import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import axios, { Axios, AxiosResponse } from 'axios';

interface UserSale {
	username: string;
	volume: number;
}
interface ILastSales {
	s1: UserSale;
	s2: UserSale;
}

const LastSales: NextPage = () => {
	const [sales, setSales] = useState<AxiosResponse<ILastSales>[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		const test = async () => {
			const { data } = await axios.get<AxiosResponse<ILastSales>>(
				'https://nextjs-dummy-9be3f-default-rtdb.firebaseio.com/sales.json',
			);
			const arrayData = [data];
			console.log(arrayData);
			setSales(arrayData);
			setIsLoading(false);
			// console.log(sales);
		};
		test();
	}, []);

	return <div>test</div>;
};

export default LastSales;
