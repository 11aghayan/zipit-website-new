import { SetURLSearchParams, useSearchParams } from "react-router-dom";

import { SpType } from "../types";

type SpTypeFull = [
  SpType,
  SetURLSearchParams
]
  

export default function useSp() {
  const [sp, setSearchParams] = useSearchParams();

  const setSp = (params: URLSearchParams) => {
    return setSearchParams(params, { replace: true });
  }
  
  const categories = sp.get('categories') || '';
  const promo = sp.get('promo') || 'false';
  const page = sp.get('page') || '1';
  const sorting = sp.get('sorting') || 'name,asc';
  const currentPhoto = sp.get('currentPhoto') || '';
  const size = sp.get('size') || '';

  const params: SpType = {
    categories,
    promo,
    page,
    sorting,
    currentPhoto,
    size
  };

  if (!categories) delete params.categories;
  if (promo !== 'true') delete params.promo;
  if (page === '1') delete params.page;
  if (sorting === 'name,asc') delete params.sorting;
  if (!currentPhoto) delete params.currentPhoto;
  if (!size) delete params.size;

  return [
    params,
    setSp
  ] as SpTypeFull;
}