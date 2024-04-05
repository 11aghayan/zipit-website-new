import './SortBtn.css';

import sortIcon from '../../../../../../assets/sort.svg';

type Props = {
  isSortOpen: boolean;
  setIsSortOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SortBtn({ isSortOpen, setIsSortOpen }: Props) {

  const handleClick = () => {
    setIsSortOpen(!isSortOpen);
  }

  return (
    <button 
      className='sort-btn'
      onClick={handleClick}
    >
      <img src={sortIcon} alt="sort-icon" height={30} width={30} />
      <div className='active'>Descending</div>
    </button>
  );
}