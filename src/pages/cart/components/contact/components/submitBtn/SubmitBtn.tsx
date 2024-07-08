import './SubmitBtn.css';

import useLang from '../../../../../../hooks/useLang';
import { LangType } from '../../../../../../types';

type Props = {
  onClick: () => void;
  disabled: boolean;
}

export default function SubmitBtn({ onClick, disabled }: Props) {
  const lang = useLang() as LangType;
  
  const text = {
    am: 'Պատվիրել',
    ru: 'Заказать'
  };
  
  return (
    <button 
      className='cart-submit-btn' 
      onClick={onClick}
      disabled={disabled}
    >
      {text[lang]}
    </button>
  );
}