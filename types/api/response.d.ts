export type ResponseType<T> = {
  status: number;
  message: string | null;
  payload: T;
};
