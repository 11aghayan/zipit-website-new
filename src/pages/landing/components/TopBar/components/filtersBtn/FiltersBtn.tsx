import './FiltersBtn.css';

import filterSvg from '../../../../../../assets/filter.svg';

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
      <img src={filterSvg} alt="filter-icon" width={30} height={30} />
    </button>
  );
}