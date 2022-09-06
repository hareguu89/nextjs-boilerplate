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

export const getLastSales = async () => {
	const { data } = await axios.get(
		`https://nextjs-dummy-9be3f-default-rtdb.firebaseio.com/sales.json`,
	);
	return data;
};
