import { useState } from 'react';

import { CategoryType, SpType } from '../../../../../../types';
import Category from './components/category/Category';
import Promo from './components/promo/Promo';
import useSp from '../../../../../../hooks/useSp';
import FilterBtn from './components/filterBtn/FilterBtn';

type Props = {
  categories: CategoryType[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type SelectedFiltersType = {
  categories: string[];
  promo: boolean;
}

export default function Categories({ categories, setIsOpen }: Props) {
  const [sp, setSp] = useSp();

  const spCategories = sp.categories?.split(',') || [];
  const promo = sp?.promo === 'true' ? true : false;

  const [selectedFilters, setSelectedFilters] = useState<SelectedFiltersType>({
    categories: spCategories,
    promo
  });

  const buttonDisabled = selectedFilters.categories.toString() === spCategories.toString() && selectedFilters.promo === promo;

  const handleClick = () => {
    setIsOpen(false);
    const categories = selectedFilters.categories;
    const promo = selectedFilters.promo;
    const newSp: SpType = {
      ...sp,
      categories: categories.join(','),
      promo: promo.toString()
    };

    if (!categories.length) delete newSp.categories;
    if (!promo) delete newSp.promo;
    setSp(newSp);
  }
  
  return (
    <ul className='categories'>
      <FilterBtn disabled={buttonDisabled} handleClick={handleClick} />
      <Promo selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
      {
        categories.length 
        ?
        categories.map((category: CategoryType) => (
          <Category 
            key={category.id}
            category={category}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        ))
        :
        <p>No Categories</p>
      }
      <FilterBtn disabled={buttonDisabled} handleClick={handleClick} />
    </ul>
  );
}