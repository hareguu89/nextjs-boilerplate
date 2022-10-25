import type { CategoryTopBrandsType } from "types/topBrand";

export const evalHasTopBrands = (topBrands: CategoryTopBrandsType[]) =>
  topBrands.length
    ? topBrands.reduce(
        (acc: number, val: CategoryTopBrandsType) => acc + val.topBrands.length,
        0,
      )
    : false;

export const activeOnMenu = (menuPath: string, pathName: string) => {
  return pathName.startsWith(menuPath) ? "active" : "";
};
