import type { IdNameType } from "./common";

export type CategoryTopBrandsType = {
  category: IdNameType;
  topBrands: TopBrandSummaryType[];
};

interface TopBrandSummaryType extends IdNameType {
  imageUrl: string;
}
