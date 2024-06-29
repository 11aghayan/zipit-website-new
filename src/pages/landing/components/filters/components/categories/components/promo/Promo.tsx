import './Promo.css';

import { SelectedFiltersType } from '../../Categories';
import useLang from '../../../../../../../../hooks/useLang';
import { LangType, SpType } from '../../../../../../../../types';
import useSp from '../../../../../../../../hooks/useSp';


type Props = {
  selectedFilters: SelectedFiltersType;
  setSelectedFilters: React.Dispatch<React.SetStateAction<SelectedFiltersType>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Promo({ selectedFilters, setSelectedFilters, setIsOpen }: Props) {
  const [sp, setSp] = useSp();
  const lang = useLang() as LangType;
  
  const promo = selectedFilters.promo;

  const promoLangMap = {
    am: 'ակցիա',
    ru: 'акция'
  };
  
  const handleClick = () => {
    setIsOpen(false);
    setSelectedFilters({
      ...selectedFilters,
      promo: !promo
    });
    const newSp: SpType = {
      ...sp,
      promo: (!promo).toString()
    };
    if (promo) delete newSp.promo;
    setSp(newSp);
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