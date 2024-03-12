export type LangType = 'am' | 'ru';

export type LangMapType = {
  am: string;
  ru: string;
} 

export type NavRouteType = {
  label:  LangMapType;
  href: string;
}