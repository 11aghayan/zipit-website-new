import { useState } from 'react';

import './TopBar.css';

import FiltersBtn from './components/filtersBtn/FiltersBtn';
import Sort from './components/sort/Sort';
import SortBtn from './components/sortBtn/SortBtn';

type Props = {
  setIsFiltersOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TopBar({ setIsFiltersOpen }: Props) {

  const [isSortOpen, setIsSortOpen] = useState(false);

  return (
    <section className='top-bar'>
      <FiltersBtn setIsOpen={setIsFiltersOpen} />
      <div className='right-side-wrapper'>
        <SortBtn isSortOpen={isSortOpen} setIsSortOpen={setIsSortOpen}  />
      </div>
      <Sort isOpen={isSortOpen} />
    </section>
  );
}