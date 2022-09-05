import axios, { AxiosResponse } from 'axios';

type TUser = {
	email: string;
	password: string;
};

export const login = async (params: TUser) =>
	await axios.post('/login', params);

export const Mutation = {
	onSuccess: (data: AxiosResponse, variables: TUser) => {
		console.log('success', data, variables);
	},
};

interface ITransformedSales {
	id: string;
	username: string;
	volume: number;
}
export async function getLastSales() {
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
	return transformedSales;
}
