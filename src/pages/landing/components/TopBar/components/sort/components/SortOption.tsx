import { useSearchParams } from 'react-router-dom';

import './SortOption.css';

import useLang from '../../../../../../../hooks/useLang';
import { LangType, SortOptionType } from '../../../../../../../types';

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
} & SortOptionType

export default function SortOption({ label, query, setIsOpen }: Props) {
  const lang = useLang() as LangType;
  const [sp, setSp] = useSearchParams();
  
  const handleClick = () => {
    setIsOpen(false);
    setSp({
      ...sp,
      sorting: query 
    });
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