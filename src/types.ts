export type LangType = 'am' | 'ru';

export type LangMapType = {
  am: string;
  ru: string;
}; 

export type NavRouteType = {
  label:  LangMapType;
  href: string;
};

export type CategoryType = {
  id: string;
  label: string;
  itemsQty: number;
};

export type ItemsResponseType = {
  page: number;
  pages: number;
  length: number;
  items: ItemType[];
};

export type ItemType = {
  id: string;
  category: Omit<CategoryType, 'itemsQty'>;
  description: string;
  name: string;
  price: number;
  promo: number | null;
  size: SizeType;
  photos: PhotoType[];
};

export type MinOrderType = {
  qty: number;
  unit: MinOrderUnitType;
};

export type MinOrderUnitType = 'pcs' | 'cm' | 'box' | 'roll';

export type SizeUnitType = 'mm' | 'cm' | 'm';

export type SizeType = {
  val: number;
  unit: SizeUnitType;
};

export type PhotoType = {
  src: string;
  qty: number;
  color: string;
};

export type SortOptionType = {
  label: LangMapType;
  param: 'name,asc' | 'name,desc' | 'price,asc' | 'price,desc';
};

export type SpType = {
  categories?: string;
  promo?: string;
  page?: string;
  sorting?: string;
}