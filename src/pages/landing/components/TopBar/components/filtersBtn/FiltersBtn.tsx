import './FiltersBtn.css';

import { Icon } from '@iconify/react';

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FiltersBtn({ setIsOpen }: Props) {
  const handleClick = () => setIsOpen(true);

  return (
    <button 
      className='filters-btn'
      onClick={handleClick}
    >
      <Icon icon='ic:baseline-filter-alt' className='filters-icon' />
    </button>
  );
}