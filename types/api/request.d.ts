export type ApiRequest = {
  page: number;
  size: number;
  search: any;
  /**
   * http query string for the "sort" param. eg) sort=${fieldName},${asc|desc}&sort=...
   */
  sortQueryParams: string;
};
