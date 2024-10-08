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
  minOrder: MinOrderType;
};

export type CartItemType = {
  id: string;
  name: string;
  qty: number;
  size: { value: number; unit: SizeUnitType };
  photo: PhotoType;
  price: number;
  minOrder: MinOrderType
}

export type MinOrderType = {
  qty: number;
  unit: MinOrderUnitType;
};

export type MinOrderUnitType = 'pcs' | 'cm' | 'box' | 'roll';

export type SizeUnitType = 'mm' | 'cm' | 'm';

export type SizeType = {
  values: SizeValueType[];
  unit: SizeUnitType;
};

export type SizeValueType = {
  value: number;
  colors: string[];
}

export type PhotoType = {
  src: string;
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
  currentPhoto?: string;
  size?: string;
}

export type SizeLangMapType = {
  [unit in SizeUnitType]: LangMapType;
};

export type RandomSimilarItemType = Omit<ItemType, 'photos' | 'size' | 'category' | 'minOrder' | 'description'> & {
  photo: PhotoType;
  size: {
    unit: SizeUnitType;
    value: number | null;
  };
}

export type RandomSimilarResponseType = {
  length: number;
  items: RandomSimilarItemType[];
}