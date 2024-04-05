export type LangType = 'am' | 'ru';

export type LangMapType = {
  am: string;
  ru: string;
} 

export type NavRouteType = {
  label:  LangMapType;
  href: string;
}

export type CategoryType = {
  id: string;
  label: string;
  itemsQty: number;
}