import './TopBar.css';

import FiltersBtn from './filtersBtn/FiltersBtn';

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TopBar({ setIsOpen }: Props) {

  return (
    <section className='top-bar'>
      <FiltersBtn setIsOpen={setIsOpen} />
    </section>
  );
}