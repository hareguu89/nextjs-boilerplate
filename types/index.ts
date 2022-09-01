export interface IDummyBackend {
	id: string;
	title: string;
	description: string;
}

export interface IResponse {
	products: IDummyBackend[];
}
