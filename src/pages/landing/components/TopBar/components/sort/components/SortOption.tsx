import './SortOption.css';

import useLang from '../../../../../../../hooks/useLang';
import { LangType, SortOptionType, SpType } from '../../../../../../../types';
import useSp from '../../../../../../../hooks/useSp';

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
} & SortOptionType

export default function SortOption({ label, param, setIsOpen }: Props) {
  const lang = useLang() as LangType;
  const [sp, setSp] = useSp();
  const current = sp?.sorting || 'name,asc';
  
  const handleClick = () => {
    setIsOpen(false);
    if (param !== current) {
      const newSp: SpType = {
        ...sp,
        sorting: param
      };

      if (param === 'name,asc') delete newSp.sorting;
      
      setSp(newSp);
    }
  };
  
  return (
    <option 
      onClick={handleClick}
      className='sort-option'
    >
      {label[lang]}
    </option>
  );
}