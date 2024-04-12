import './Promo.css';

import { SelectedFiltersType } from '../../Categories';


type Props = {
  selectedFilters: SelectedFiltersType;
  setSelectedFilters: React.Dispatch<React.SetStateAction<SelectedFiltersType>>;
}

export default function Promo({ selectedFilters, setSelectedFilters }: Props) {
  const promo = selectedFilters.promo;

  const handleClick = () => {
    setSelectedFilters({
      ...selectedFilters,
      promo: !promo
    });
  }
  
  return (
    <li 
      onClick={handleClick}
      className={`promo ${promo ? 'selected' : ''}`}
    >
      Promo
    </li>
  );
}