export interface IDummyBackend {
	id: string;
	title: string;
	description: string;
}

export interface IResponse {
	products: IDummyBackend[];
}

export interface ITransformedSales {
	id: string;
	username: string;
	volume: number;
}
