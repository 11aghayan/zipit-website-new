import useLang from '../../../../../../../../hooks/useLang';
import { LangType } from '../../../../../../../../types';
import './FilterBtn.css';

type Props = {
  handleClick: () => void;
  disabled: boolean;
}

export default function FilterBtn({ handleClick, disabled }: Props) {
  const lang = useLang() as LangType;

  const langMap = {
    am: 'ֆիլտրել',
    ru: 'фильтровать'
  };
  
  return (
    <div className='filter-btn-wrapper'>
      <button 
        className='filter-btn' 
        onClick={handleClick}
        disabled={disabled}
      >
        {langMap[lang]}
      </button>
    </div>
  );
}