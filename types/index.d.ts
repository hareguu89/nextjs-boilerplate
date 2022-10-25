export type BrandType = {
  id: number;
  name: Name;
  logo: string;
  open: boolean;
  createdAt: string;
  updatedAt: string;
  supplyMemo: string;
  description: string;
  country: Country;
  homepageUrl: string;
  repEmail: string;
};

interface Name {
  KR: string;
  EN: string;
}

interface Country {
  id: number;
  name: string;
  callingCode: number;
  code: string;
  emoji: string;
}
