import { SetURLSearchParams, useSearchParams } from "react-router-dom";

import { SpType } from "../types";

type SpTypeFull = [
  SpType,
  SetURLSearchParams
]
  

export default function useSp() {
  const [sp, setSp] = useSearchParams();

  const categories = sp.get('categories') || '';
  const promo = sp.get('promo') || 'false';
  const page = sp.get('page') || '1';
  const sorting = sp.get('sorting') || 'name,asc';

  const params: SpType = {
    categories,
    promo,
    page,
    sorting
  };

  if (!categories) delete params.categories;
  if (promo !== 'true') delete params.promo;
  if (page === '1') delete params.page;
  if (sorting === 'name,asc') delete params.sorting;

  return [
    params,
    setSp
  ] as SpTypeFull;
}