import './TopBar.css';

import FiltersBtn from './components/filtersBtn/FiltersBtn';
import Sort from './components/sortBtn/Sort';

type Props = {
  setIsFiltersOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TopBar({ setIsFiltersOpen }: Props) {

  return (
    <section className='top-bar'>
      <FiltersBtn setIsOpen={setIsFiltersOpen} />
      <div className='right-side-wrapper'>
        <Sort />
      </div>
    </section>
  );
}