import useLang from '../../../../../../../../hooks/useLang';
import { LangType } from '../../../../../../../../types';
import './FilterBtn.css';

type Props = {
  handleClick: () => void;
  disabled: boolean;
  marginTop?: string;
}

export default function FilterBtn({ handleClick, disabled, marginTop = '0' }: Props) {
  const lang = useLang() as LangType;

  const langMap = {
    am: 'ֆիլտրել',
    ru: 'фильтровать'
  };
  
  return (
    <li className='filter-btn-wrapper'>
      <button 
        className='filter-btn' 
        aria-label='apply filters button'
        onClick={handleClick}
        disabled={disabled}
        style={{ marginTop }}
      >
        {langMap[lang]}
      </button>
    </li>
  );
}