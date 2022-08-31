export interface IDummyBackend {
  id: string;
  title: string;
}

export interface IResponse {
  products: IDummyBackend[];
}
