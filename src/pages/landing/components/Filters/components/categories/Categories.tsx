import { useState } from 'react';
import { SetURLSearchParams } from 'react-router-dom';

import { CategoryType } from '../../../../../../types';
import './Categories.css';
import Category from './components/Category/Category';

type Props = {
  categories: CategoryType[];
  sp: URLSearchParams;
  setSp: SetURLSearchParams;
}

export type SelectedFiltersType = {
  categories: string[];
  promo: boolean;
}

export default function Categories({ categories, sp, setSp }: Props) {

  const spCategories = sp.get('categories')?.split(',') || [];
  const promo = sp.get('promo') === 'true' ? true : false;

  const [selectedFilters, setSelectedFilters] = useState<SelectedFiltersType>({
    categories: spCategories,
    promo
  });

  const buttonDisabled = selectedFilters.categories.toString() === spCategories.toString() && selectedFilters.promo === promo;

  const handleClick = () => {
    const categories = selectedFilters.categories;
    const promo = selectedFilters.promo;
    const newSp = new URLSearchParams({
      categories: categories.join(','),
      promo: promo.toString()
    });
    if (!categories.length) newSp.delete('categories');
    if (!promo) newSp.delete('promo');
    setSp(newSp);
  }
  
  return (
    <ul className='categories'>
      <button 
        className='filter-btn' 
        onClick={handleClick}
        disabled={buttonDisabled}
      >
        Filter
      </button>
      {
        categories.map((category: CategoryType) => (
          <Category 
            key={category.id}
            category={category}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        ))
      }
      <button 
        className='filter-btn' 
        onClick={handleClick}
        disabled={buttonDisabled}
      >
        Filter
      </button>
    </ul>
  );
}