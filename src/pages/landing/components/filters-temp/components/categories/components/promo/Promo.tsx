import './Promo.css';

import { SelectedFiltersType } from '../../Categories';
import useLang from '../../../../../../../../hooks/useLang';
import { LangType } from '../../../../../../../../types';


type Props = {
  selectedFilters: SelectedFiltersType;
  setSelectedFilters: React.Dispatch<React.SetStateAction<SelectedFiltersType>>;
}

export default function Promo({ selectedFilters, setSelectedFilters }: Props) {
  const lang = useLang() as LangType;
  
  const promo = selectedFilters.promo;

  const promoLangMap = {
    am: 'ակցիա',
    ru: 'акция'
  };
  
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
      {promoLangMap[lang]}
    </li>
  );
}