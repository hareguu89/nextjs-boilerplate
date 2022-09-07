export interface IDummy {
  id?: string;
  date: string;
  description: string;
  image: string;
  isFeatured?: boolean;
  location: string;
  title: string;
}

export interface IEvents {
  [key: string]: IDummy;
}
