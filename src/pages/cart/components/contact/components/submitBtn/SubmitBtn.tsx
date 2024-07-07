import './SubmitBtn.css';

import useLang from '../../../../../../hooks/useLang';
import { LangType } from '../../../../../../types';

type Props = {
  onClick: () => void;
}

export default function SubmitBtn({ onClick }: Props) {
  const lang = useLang() as LangType;
  
  const text = {
    am: 'Պատվիրել',
    ru: 'Заказать'
  };
  
  return (
    <button className='cart-submit-btn' onClick={onClick}>
      {text[lang]}
    </button>
  );
}