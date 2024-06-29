import { useState } from 'react';

import { CategoryType } from '../../../../../../types';
import Category from './components/category/Category';
import Promo from './components/promo/Promo';
import useSp from '../../../../../../hooks/useSp';
import NoCategories from './components/noCategories/NoCategories';

type Props = {
  categories: CategoryType[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type SelectedFiltersType = {
  categories: string[];
  promo: boolean;
}

export default function Categories({ categories, setIsOpen }: Props) {
  const [sp] = useSp();

  const spCategories = sp.categories?.split(',') || [];
  const promo = sp?.promo === 'true' ? true : false;

  const [selectedFilters, setSelectedFilters] = useState<SelectedFiltersType>({
    categories: spCategories,
    promo
  });
  
  return (
    <ul className='categories'>
      <Promo 
        selectedFilters={selectedFilters} 
        setSelectedFilters={setSelectedFilters} 
        setIsOpen={setIsOpen}
      />
      {
        categories.length 
        ?
        categories.map((category: CategoryType) => (
          <Category 
            key={category.id}
            category={category}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            setIsOpen={setIsOpen}
          />
        ))
        :
        <NoCategories />
      }
    </ul>
  );
}